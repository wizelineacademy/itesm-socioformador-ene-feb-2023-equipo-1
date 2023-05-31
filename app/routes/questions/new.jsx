import React, { useEffect, useRef } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useSubmit } from '@remix-run/react';
import * as Styled from 'app/styles/CreateQuestion.Styled';
import Slogan from 'app/components/Slogan';
import { MAXIMUM_QUESTION_LENGTH, MINIMUM_ANSWER_LENGTH, NOT_ASSIGNED_DEPARTMENT_ID } from 'app/utils/backend/constants';
import { RECOMMENDATIONS_QUESTION, DEFAULT_LOCATION } from 'app/utils/constants';
import QuestionForm from 'app/components/QuestionForm';
import listLocations from 'app/controllers/locations/list';
import {
  commitSession, getAuthenticatedUser, getSession, requireAuth,
} from 'app/session.server';
import listDepartments from 'app/controllers/departments/list';
import listQuestions from 'app/controllers/questions/list';
import createQuestion from 'app/controllers/questions/create';
import createAnswerByBot from 'app/controllers/answerBot/create';
import updateFeedback from 'app/controllers/answerBot/modifyFeedback';
import updatePostID from 'app/controllers/answerBot/modifyIDQuestion'
import Notifications from 'app/components/Notifications';
import AnswerBot from 'app/components/AnswerBot';
import FAQs from 'app/components/FAQs/FAQs';
import ACTIONS from 'app/utils/actions';

export const loader = async ({ request }) => {
  await requireAuth(request);

  const locations = await listLocations();
  const departments = await listDepartments();
  const questionsFAQ = await listQuestions({
    orderBy: "popular",
    dateRange: "this_week",
    limit: 10,
  });
  return json({
    locations,
    departments,
    questionsFAQ,
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

  // values passed as strings
  switch (formAction) {
    case ACTIONS.CREATE_QUESTION_ANSWER:
      const { assigned_to_employee_id: assignedEmployeeId } = form;
      const assignedEmployeeValue = assignedEmployeeId !== 'undefined' ? parseInt(assignedEmployeeId, 10) : undefined;

      payload = {
        question: form.question,
        created_by_employee_id: form.isAnonymous === 'true' ? null : user.employee_id,
        is_anonymous: form.isAnonymous === 'true',
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        assigned_to_employee_id: Number.isNaN(assignedEmployeeValue) ? null : assignedEmployeeValue,
        location: form.location,
        accessToken: user.accessToken,
      };

      response = await createQuestion(payload);

      if (response.successMessage) {
        const session = await getSession(request);
        const { question, successMessage } = response;
        session.flash('globalSuccess', successMessage);
        const destination = `/questions/${question.question_id}`;

        return redirect(destination, {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        });
      }
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
        const destination = `/questions/new`;
    
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
        const destination = `/questions/new`;
    
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
        bot_enabled: true,
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
          console.log('finish',response.feedback);
          const session = await getSession(request);
          const { successMessage } = response;
          session.flash('globalSuccess', successMessage);
          const destination = `/questions/new`;
      
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

function CreateQuestion() {
  const { questionsFAQ, locations, departments } = useLoaderData();
  const submit = useSubmit();
  const formRef = useRef();

  useEffect(() => {
    departments.unshift({ name: 'I don\'t know whom to assign it.', department_id: NOT_ASSIGNED_DEPARTMENT_ID });
  }, []);

  const renderBulletPoint = () => (
    <div>
      <BsCircleFill color="var(--color-secondary)" size="7px" style={{ marginTop: '3px', marginRight: '10px' }} />
    </div>
  );

  const postQuestion = (question) => {
    const data = new FormData(formRef.current);

    data.set('action', ACTIONS.CREATE_QUESTION_ANSWER);

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(question)) {
      data.set(key, value);
    }

    submit(
      data,
      { method: 'post', action: '/questions/new' },
    );
  };

  // Creates a FormData to submit and create a new record.
  const postAnswerBotQuestion = (question) => {
    const data = new FormData(formRef.current);

    data.set('action', ACTIONS.CREATE_QUESTION_ANSWERBOT);

    for (const [key, value] of Object.entries(question)) {
      data.set(key, value);
    }

    submit(
      data,
      { method: 'post', action: '/questions/new' },
    );
  };

  // Creates a FormData to submit and update feedback for an existing record.
  const updateAnswerBotFeedback = (question) => {
    const data = new FormData(formRef.current);

    data.set('action', ACTIONS.UPDATE_FEEDBACK_ANSWERBOT);

    for (const [key, value] of Object.entries(question)) {
      data.set(key, value);
    }

    submit(
      data,
      { method: 'post', action: '/questions/new' },
    );
  };

  // Creates a FormData to submit and update the post id for an existing record.
  const updateAnswerBotPostID = (question) => {
    const data = new FormData(formRef.current);

    data.set('action', ACTIONS.UPDATE_POST_ANSWERBOT);

    for (const [key, value] of Object.entries(question)) {
      data.set(key, value);
    }

    submit(
      data,
      { method: 'post', action: '/questions/new' },
    );
  };

  return (
    <>
      <Notifications />
      <Styled.QuestionDiv>
        <Styled.QuestionSlogan>
          <Slogan />
          <FAQs questionsFAQ={questionsFAQ}/>
        </Styled.QuestionSlogan>
        <Styled.QuestionInput>
          <QuestionForm
            maximumQuestionLength={MAXIMUM_QUESTION_LENGTH}
            minimumQuestionLength={MINIMUM_ANSWER_LENGTH}
            postQuestion={postQuestion}
            locations={locations}
            departments={departments}

          />
        </Styled.QuestionInput>
        <Styled.QuestionRecommendations>
          <Styled.RecommendationsContainer>
            <Styled.Recommendations>
              <span>Things to keep in mind</span>
              {
                RECOMMENDATIONS_QUESTION.map((text) => (
                  <span key={text}>
                    {renderBulletPoint()}
                    {text}
                  </span>
                ))
              }
            </Styled.Recommendations>
          </Styled.RecommendationsContainer>
          <AnswerBot
            postAnswerBotQuestion={postAnswerBotQuestion}
            updateAnswerBotFeedback={updateAnswerBotFeedback}
            updateAnswerBotPostID={updateAnswerBotPostID}
            departments={departments}

          />
        </Styled.QuestionRecommendations>
      </Styled.QuestionDiv>
    </>
  );
}

export default CreateQuestion;
