import { DEFAULT_ERROR_MESSAGE } from 'app/utils/backend/constants';
import { createAnswerBotSchema } from 'app/utils/backend/validators/answerBot';
import { db } from 'app/utils/db.server';

const updateFeedback = async (body) => {

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

  const { answer_status, ...rest } = value;
  
  const findFeed = await db.AnswerBot.findFirst({
    where: {
      answer_status: 0,
      ...rest,
    },
    orderBy: {
        date_created: 'desc',
    },
  });

  if (findFeed) {
    await db.AnswerBot.update({
      where: {
        id: findFeed.id,
      },
      data: {
        answer_status: answer_status,
      },
    });
  }

  // console.log(value);

  return {
    successMessage: 'The feedback to bot has been updated succesfully!',
    feedback: findFeed,
  };

};

export default updateFeedback;
