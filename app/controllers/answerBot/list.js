import { db } from 'app/utils/db.server';
import { ALL_DEPARTMENTS, NOT_ASSIGNED_DEPARTMENT_ID } from 'app/utils/backend/filterConstants';

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

// Filter the search by a range of dates.
const buildWhereDateRange = (dateRange) => {
  if (dateRange && dateRange.startDate && dateRange.endDate) {
    return {
      date_created: {
        lte: new Date(dateRange.endDate),
        gte: new Date(dateRange.startDate),
      },
    };
  }

  return {};
};

// Get the list of records from the AnswerBot table.
const listAnswerBot = async (params) => {
  try {
    // Destructuring.
    const { department, dateRange } = params;

    // Finds all records that match the submitted values.
    const getAnswers = await db.AnswerBot.findMany({
      where: {
        ...buildWhereDepartment(department),
        ...buildWhereDateRange(dateRange),
      },
    });

    // Returns the search result.
    return getAnswers;

    // Error and exception handling.
  } catch (error) {
    // console.error(error);
    throw new Error('An error occurred while getting the responses from the bot.');
  }
};

export default listAnswerBot;
