import { DEFAULT_ERROR_MESSAGE_POST_BOT } from 'app/utils/backend/constants';
import { modifyBotPostQuestion } from 'app/utils/backend/validators/answerBot';
import { POSTED_ANSWEBOT } from 'app/utils/constants';
import { db } from 'app/utils/db.server';

const updatePost = async (body) => {
  // Validates the received data.
  const { error, value } = modifyBotPostQuestion.validate(body);

  // Error and exception handling for validation.
  if (error) {
    return {
      error: {
        message: DEFAULT_ERROR_MESSAGE_POST_BOT,
        detail: error.message,
      },
    };
  }

  // Destructuring, rest has all the remaining values of the data.
  const { postQuestionID, ...rest } = value;

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
      error: {
        message: DEFAULT_ERROR_MESSAGE_POST_BOT,
        detail: 'The record to update the link between AnswerBot and Question does not exist.',
      },
    };
  }

  // If the record exists, update the link.
  const upToDate = await db.AnswerBot.update({
    where: {
      id: findQABot.id,
    },
    data: {
      post_question_id: postQuestionID,
    },
  });

  // Returns a success message of the operation performed.
  return {
    successMessage: POSTED_ANSWEBOT,
    detail: upToDate,
  };
};

export default updatePost;
