import { DEFAULT_ERROR_MESSAGE } from 'app/utils/backend/constants';
import { modifyFeedbackBotSchema } from 'app/utils/backend/validators/answerBot';
import { db } from 'app/utils/db.server';

const updateFeedback = async (body) => {
  // Validates the received data.
  const { error, value } = modifyFeedbackBotSchema.validate(body);

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
  const { answer_feedback, ...rest } = value;
  
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
      errors: [
        {
          message: DEFAULT_ERROR_MESSAGE,
          detail: 'The record to update the feedback does not exist.',
        },
      ],
    };
  }

  // If the record exists, update the feedback.
  const updateFeed = await db.AnswerBot.update({
    where: {
      id: findFeed.id,
    },
    data: {
      answer_feedback: answer_feedback,
    },
  });

  // Returns a success message of the operation performed.
  return {
    successMessage: 'The feedback to bot has been updated succesfully!',
    feedback: updateFeed,
  };

};

export default updateFeedback;
