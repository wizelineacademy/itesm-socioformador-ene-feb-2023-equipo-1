import Joi from 'joi';
import {
  MAXIMUM_QUESTION_LENGTH,
  MINIMUM_QUESTION_LENGTH,
  MINIMUM_ANSWER_LENGTH,
  MAXIMUM_ANSWER_LENGTH,
} from 'app/utils/backend/constants';

export const createAnswerBotSchema = Joi.object().keys({
  question_by_user: Joi.string().min(MINIMUM_QUESTION_LENGTH).max(MAXIMUM_QUESTION_LENGTH).required(),
  answer_by_bot: Joi.string().min(MINIMUM_ANSWER_LENGTH).max(MAXIMUM_ANSWER_LENGTH).required(),
  answer_status: Joi.number().integer().min(-1).max(1).required(),
  assigned_department: Joi.number().integer().min(1).allow(null),
  user_id: Joi.number().integer().min(1).allow(null),
});

export const modifyAnswerBotQuestionPost = Joi.object().keys({
  post_question_id: Joi.number().integer().min(1).allow(null),
  question_by_user: Joi.string().min(MINIMUM_QUESTION_LENGTH).max(MAXIMUM_QUESTION_LENGTH).required(),
  answer_by_bot: Joi.string().min(MINIMUM_ANSWER_LENGTH).max(MAXIMUM_ANSWER_LENGTH).required(),
  answer_status: Joi.number().integer().min(-1).max(1).required(),
  assigned_department: Joi.number().integer().min(1).allow(null),
  user_id: Joi.number().integer().min(1).allow(null),
});