import { db } from 'app/utils/db.server';

const listAnswerBot = async (params) => {

  // const { department, limit } = params;

  const getAnswers = await db.AnswerBot.findMany({
    where: {
        assigned_department: 1,
    },
    take:  4,
  });

  return getAnswers;
};

export default listAnswerBot;