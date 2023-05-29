import { db } from 'app/utils/db.server';
import { ALL_DEPARTMENTS, NOT_ASSIGNED_DEPARTMENT_ID } from 'app/utils/backend/filterConstants';
import { DEFAULT_LIMIT } from 'app/utils/backend/constants';


// Filter the search and selection of departments.
const buildWhereDepartment = (department) => {
  if (department === undefined || department === ALL_DEPARTMENTS) return {};

  if (department === NOT_ASSIGNED_DEPARTMENT_ID) {
    return {
      assigned_department: null,
    };
  }

  return { assigned_department: department };
};

// Get the list of records from the AnswerBot table.
const listAnswerBot = async (params) => {
  try {

    // Destructuring.
    const { department, limit } = params;

    // Finds all records that match the submitted values.
    const getAnswers = await db.AnswerBot.findMany({
      where: {
        ...buildWhereDepartment(department),
      },
      take: limit || DEFAULT_LIMIT,
    });

    // Returns the search result.
    return getAnswers; 
    
    // Error and exception handling.
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while getting the responses from the bot.');
  }
};

export default listAnswerBot;