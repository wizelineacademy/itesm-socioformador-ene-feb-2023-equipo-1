import { DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT } from 'app/utils/backend/constants';
import { modifyFeedbackBotSchema } from 'app/utils/backend/validators/answerBot';
import { POSITIVE_FEEDBACK_ANSWEBOT, NEGATIVE_FEEDBACK_ANSWEBOT } from 'app/utils/constants';
import { db } from 'app/utils/db.server';

const updateFeedback = async (body) => {
  // Validates the received data.
  const { error, value } = modifyFeedbackBotSchema.validate(body);

  // Error and exception handling for validation.
  if (error) {
    return {
      error: {
        message: DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT,
        detail: error.message,
      },
    };
  }

  // Destructuring, rest has all the remaining values of the data.
  const { answerFeedback, ...rest } = value;

  // Find the record that matches the submitted values.
  const findFeed = await db.AnswerBot.findFirst({
    where: {
      answer_feedback: 0,
      ...rest,
    },
    orderBy: {
      date_created: 'desc',
    },
  });

  // Error and exception handling in case there is no record to update.
  if (!findFeed) {
    return {
      error: {
        message: DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT,
        detail: 'The record to update the feedback does not exist.',
      },
    };
  }

  // If the record exists, update the feedback.
  const updateFeed = await db.AnswerBot.update({
    where: {
      id: findFeed.id,
    },
    data: {
      answer_feedback: answerFeedback,
    },
  });

  // Returns a success message of the operation performed.
  return {
    successMessage: answerFeedback === 1 ? POSITIVE_FEEDBACK_ANSWEBOT : NEGATIVE_FEEDBACK_ANSWEBOT,
    feedback: updateFeed,
  };
};

export default updateFeedback;
