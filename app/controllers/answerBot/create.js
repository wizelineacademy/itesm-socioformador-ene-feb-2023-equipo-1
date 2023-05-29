import { DEFAULT_ERROR_MESSAGE } from 'app/utils/backend/constants';
import { createBotSchema } from 'app/utils/backend/validators/answerBot';
import { db } from 'app/utils/db.server';

const createAnswerByBot = async (body) => {
  // Validates the received data.
  const { error, value } = createBotSchema.validate(body);

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
  const { ...rest } = value;

  // Create a new record.
  const created = await db.AnswerBot.create({
    data: {
      ...rest,
    },
  });

  // Returns a success message of the operation performed.
  return {
    successMessage: 'The question to bot has been created succesfully!',
    question: created,
  };

};

export default createAnswerByBot;
