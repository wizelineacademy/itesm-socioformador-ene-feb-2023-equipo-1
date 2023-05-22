import { DEFAULT_ERROR_MESSAGE } from 'app/utils/backend/constants';
import { createAnswerBotSchema } from 'app/utils/backend/validators/answerBot';
import { db } from 'app/utils/db.server';

const createAnswerByBot = async (body) => {

  const { error, value } = createAnswerBotSchema.validate(body);

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

  const { ...rest } = value;

  const created = await db.AnswerBot.create({
    data: {
      ...rest,
    },
  });

  // console.log(value);

  return {
    successMessage: 'The question to bot has been created succesfully!',
    question: created,
  };

};

export default createAnswerByBot;