import { DEFAULT_ERROR_MESSAGE } from 'app/utils/backend/constants';
import { modifyBotPostQuestion } from 'app/utils/backend/validators/answerBot';
import { db } from 'app/utils/db.server';

const updatePost = async (body) => {
  // Validates the received data.
  const { error, value } = modifyBotPostQuestion.validate(body);

  // Error and exception handling for validation.
  if (error) {
    return {
      errors: [
        {
          message: DEFAULT_ERROR_MESSAGE,
          detail: error,
        },
      ],
    };
  }

  // Destructuring, rest has all the remaining values of the data.
  const { post_question_id, ...rest } = value;

  // Find the record that matches the submitted values.
  const findQABot = await db.AnswerBot.findFirst({
    where: {
      post_question_id: null,
      answer_feedback: -1,
      ...rest,
    },
    orderBy: {
      date_created: 'desc',
    },
  });

  // Error and exception handling in case there is no record to update.
  if (!findQABot) {
    return {
      errors: [
        {
          message: DEFAULT_ERROR_MESSAGE,
          detail: 'The record to update the link between AnswerBot and Question does not exist.',
        },
      ],
    };
  }

  // If the record exists, update the link.
  const upToDate = await db.AnswerBot.update({
    where: {
      id: findQABot.id,
    },
    data: {
      post_question_id,
    },
  });

  // Returns a success message of the operation performed.
  return {
    successMessage: 'The question has been posted on the forum successfully!',
    detail: upToDate,
  };
};

export default updatePost;
