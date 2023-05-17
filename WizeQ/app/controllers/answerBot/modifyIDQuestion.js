import { DEFAULT_ERROR_MESSAGE } from 'app/utils/backend/constants';
import { modifyAnswerBotQuestionPost } from 'app/utils/backend/validators/answerBot';
import { db } from 'app/utils/db.server';

const updatePost = async (body) => {

  const { error, value } = modifyAnswerBotQuestionPost.validate(body);

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

  const { post_question_id, ...rest } = value;
  
  const findQABot = await db.AnswerBot.findFirst({
    where: {
      post_question_id: null,
      ...rest,
    },
    orderBy: {
        date_created: 'desc',
    },
  });

  let upToDate;

  if (findQABot) {
    upToDate = await db.AnswerBot.update({
      where: {
        id: findQABot.id,
      },
      data: {
        post_question_id: post_question_id,
      },
    });
  }

  // console.log(value);

  return {
    successMessage: 'The id of the question made to bot has been linked succesfully!',
    feedback: upToDate,
  };

};

export default updatePost;
