import { DEFAULT_ERROR_MESSAGE_CREATE_BOT } from 'app/utils/backend/constants';
import { createBotSchema } from 'app/utils/backend/validators/answerBot';
import { CREATED_ANSWEBOT } from 'app/utils/constants';
import { db } from 'app/utils/db.server';

const createAnswerByBot = async (body) => {
  // Validates the received data.
  const { error, value } = createBotSchema.validate(body);

  // Error and exception handling for validation.
  if (error) {
    return {
      error: {
        message: DEFAULT_ERROR_MESSAGE_CREATE_BOT,
        detail: error.message,
      },
    };
  }

  // Destructuring, rest has all the remaining values of the data.
  const { ...rest } = value;

  // Create a new record.
  const created = await db.AnswerBot.create({
    data: {
      ...rest,
    },
  });

  // Returns a success message of the operation performed.
  return {
    successMessage: CREATED_ANSWEBOT,
    question: created,
  };
};

export default createAnswerByBot;
