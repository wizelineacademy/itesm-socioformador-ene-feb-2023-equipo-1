import { json, redirect } from '@remix-run/node';
import {
  useFetcher, useLoaderData, useSearchParams, useSubmit,
} from '@remix-run/react';
import React, { useEffect, useState, useRef } from 'react';
import {
  commitSession, getAuthenticatedUser, getSession, requireAuth,
} from 'app/session.server';
import * as Styled from 'app/styles/Home.Styled';
import ListQuestions from 'app/components/ListQuestions';
import Notifications from 'app/components/Notifications';
import AnswerBot from 'app/components/AnswerBot';
import listDepartments from 'app/controllers/departments/list';
import listLocations from 'app/controllers/locations/list';
import listQuestions from 'app/controllers/questions/list';
import createQuestion from 'app/controllers/questions/create';
import createAnswerByBot from 'app/controllers/answerBot/create';
import updateFeedback from 'app/controllers/answerBot/modifyFeedback';
import updatePostID from 'app/controllers/answerBot/modifyIDQuestion';
import { PAGE_QUESTIONS_LIMIT, DEFAULT_LOCATION } from 'app/utils/constants';
import dateRangeConversion from 'app/utils/dateRangeConversion';
import modifyPinStatus from 'app/controllers/questions/modifyPinStatus';
import modifyEnabledValue from 'app/controllers/questions/modifyEnableStatus';
import voteQuestion from 'app/controllers/questionVotes/voteQuestion';
import ACTIONS from 'app/utils/actions';

export const loader = async ({ request }) => {
  await requireAuth(request);
  const user = await getAuthenticatedUser(request);

  const url = new URL(request.url);

  const order = url.searchParams.get('order');
  const status = url.searchParams.get('status');
  const department = Number.parseInt(url.searchParams.get('department'), 10);
  const location = url.searchParams.get('location');
  const dateRange = dateRangeConversion(url.searchParams.get('dateRange'));
  const page = url.searchParams.get('page') ?? 1;

  const questions = await listQuestions({
    user,
    orderBy: order,
    status,
    department: Number.isNaN(department) ? undefined : department,
    location,
    dateRange,
    offset: (page - 1) * PAGE_QUESTIONS_LIMIT,
  });

  const locations = await listLocations();
  const departments = await listDepartments();

  return json({
    questions,
    locations,
    departments,
  });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const formAction = formData.get('action');

  const user = await getAuthenticatedUser(request);
  const form = Object.fromEntries(formData.entries());

  // Extract and format department.
  const { assignedDepartment } = form;
  const parsedDepartment = parseInt(assignedDepartment, 10);

  let response;
  let payload;
  let questionId;

  switch (formAction) {
    case ACTIONS.PINNIN:
      questionId = parseInt(formData.get('questionId'), 10);
      const value = formData.get('value') !== 'false';
      response = await modifyPinStatus(questionId, value);
      break;
    case ACTIONS.VOTE_QUESTION:
      const voteQuestionId = parseInt(formData.get('questionId'), 10);
      const voteQuestionUser = JSON.parse(formData.get('user'));
      const isUpVote = formData.get('isUpVote') === 'true';
      response = await voteQuestion(voteQuestionId, voteQuestionUser, isUpVote);
      break;
    case ACTIONS.ENABLED_ACTION:
      questionId = parseInt(formData.get('questionId'), 10);
      const enabledValue = formData.get('enabledValue') !== 'false';
      response = await modifyEnabledValue(questionId, enabledValue);
      break;

    // Create a new record in AnswerBot table.
    case ACTIONS.CREATE_QUESTION_ANSWERBOT:
      // Create the payload.
      payload = {
        question_by_user: form.question_by_user,
        answer_by_bot: form.answer_by_bot,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id,
      };

      // Post the payload.
      response = await createAnswerByBot(payload);

      // If the result is successful, it shows it on the screen.
      if (response.successMessage) {
        const session = await getSession(request);
        const { successMessage } = response;
        session.flash('globalSuccess', successMessage);
        const destination = '/?index';

        return redirect(destination, {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        });
      }
      break;

    // Update feedback.
    case ACTIONS.UPDATE_FEEDBACK_ANSWERBOT:
      // Create the payload.
      payload = {
        question_by_user: form.question_by_user,
        answer_by_bot: form.answer_by_bot,
        answerFeedback: form.answerFeedback,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id,
      };

      // Update the record with the payload.
      response = await updateFeedback(payload);

      // If the result is successful, it shows it on the screen.
      if (response.successMessage) {
        const session = await getSession(request);
        const { successMessage } = response;
        session.flash('globalSuccess', successMessage);
        const destination = '/?index';

        return redirect(destination, {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        });
      }
      break;

    // Update post id.
    case ACTIONS.UPDATE_POST_ANSWERBOT:
      // Create the payload.
      payload = {
        question: form.question,
        created_by_employee_id: user.employee_id,
        is_anonymous: false,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        assigned_to_employee_id: null,
        botEnabled: true,
        location: DEFAULT_LOCATION,
        accessToken: user.accessToken,
      };

      // Create a question in the forum.
      response = await createQuestion(payload);

      // If the result is successful, proceed to continue.
      if (response.successMessage) {
        // Create another payload.
        payload = {
          postQuestionID: response.question.question_id,
          question_by_user: form.question,
          answer_by_bot: form.answer,
          assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
          user_id: user.employee_id,
        };

        // Update the AnswerBot record with the new payload.
        response = await updatePostID(payload);

        // If the result is successful, it shows it on the screen.
        if (response.successMessage) {
          const session = await getSession(request);
          const { successMessage } = response;
          session.flash('globalSuccess', successMessage);
          const destination = '/?index';

          return redirect(destination, {
            headers: {
              'Set-Cookie': await commitSession(session),
            },
          });
        }
      }

      break;

    default:
      break;
  }

  return json(response);
};

export default function Index() {
  const { questions: initialQuestions, departments } = useLoaderData();
  const [questions, setQuestions] = useState(initialQuestions);

  const fetcher = useFetcher();
  const submit = useSubmit();
  const formRef = useRef();
  const [shouldFetch, setShouldFetch] = useState(true);
  const [page, setPage] = useState(2);
  const [searchParams] = useSearchParams();

  const onFetchMore = () => {
    if (!shouldFetch) return;
    fetcher.load(`/?index&${searchParams.toString()}&page=${page}`);
  };

  useEffect(() => {
    if (fetcher.data && fetcher.data.questions && fetcher.data.questions.length === 0) {
      setShouldFetch(false);
      return;
    }

    if (fetcher.data && fetcher.data.questions && fetcher.data.questions.length > 0) {
      setQuestions((prevQuestions) => [...prevQuestions, ...fetcher.data.questions]);
      setPage((prevPage) => prevPage + 1);
      setShouldFetch(true);
    }
  }, [fetcher.data]);

  useEffect(() => {
    setQuestions(initialQuestions);
    setPage(2);
    setShouldFetch(true);
  }, [initialQuestions, searchParams]);

  // Creates a FormData to submit and create a new record.
  const postAnswerBotQuestion = (question) => {
    const data = new FormData(formRef.current);

    data.set('action', ACTIONS.CREATE_QUESTION_ANSWERBOT);

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(question)) {
      data.set(key, value);
    }

    submit(
      data,
      { method: 'post', action: '/?index' },
    );
  };

  // Creates a FormData to submit and update feedback for an existing record.
  const updateAnswerBotFeedback = (question) => {
    const data = new FormData(formRef.current);

    data.set('action', ACTIONS.UPDATE_FEEDBACK_ANSWERBOT);

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(question)) {
      data.set(key, value);
    }

    submit(
      data,
      { method: 'post', action: '/?index' },
    );
  };

  // Creates a FormData to submit and update the post id for an existing record.
  const updateAnswerBotPostID = (question) => {
    const data = new FormData(formRef.current);

    data.set('action', ACTIONS.UPDATE_POST_ANSWERBOT);

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(question)) {
      data.set(key, value);
    }

    submit(
      data,
      { method: 'post', action: '/?index' },
    );
  };

  return (
    <>
      <Notifications />
      <Styled.Container>
        <ListQuestions
          type="all"
          questions={questions}
          onFetchMore={onFetchMore}
        />
        <AnswerBot
          postAnswerBotQuestion={postAnswerBotQuestion}
          updateAnswerBotFeedback={updateAnswerBotFeedback}
          updateAnswerBotPostID={updateAnswerBotPostID}
          departments={departments}

        />
      </Styled.Container>
    </>
  );
}
