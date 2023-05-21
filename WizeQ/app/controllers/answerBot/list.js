import { db } from 'app/utils/db.server';
import { ALL_DEPARTMENTS, NOT_ASSIGNED_DEPARTMENT_ID } from 'app/utils/backend/filterConstants';

const buildWhereDepartment = (department) => {
    if (department === undefined || department === ALL_DEPARTMENTS) return {};
  
    if (department === NOT_ASSIGNED_DEPARTMENT_ID) {
      return {
        assigned_department: null,
      };
    }
  
    return { assigned_department: department };
};

const listAnswerBot = async (params) => {

  const { department, limit } = params;

  const getAnswers = await db.AnswerBot.findMany({
    where: {
      ...buildWhereDepartment(department),
    },
    take: limit || 4,
  });

  return getAnswers;
};

export default listAnswerBot;