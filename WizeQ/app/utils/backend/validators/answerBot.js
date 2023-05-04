import Joi from 'joi';
import {
  MAXIMUM_QUESTION_LENGTH,
  MINIMUM_QUESTION_LENGTH,
  MINIMUM_ANSWER_LENGTH,
  MAXIMUM_ANSWER_LENGTH,
} from 'app/utils/backend/constants';
import { JOI_ID_VALIDATION } from 'app/utils/backend/joiConstants';

export const createAnswerBotSchema = Joi.object().keys({
  question_by_user: Joi.string().min(MINIMUM_QUESTION_LENGTH).max(MAXIMUM_QUESTION_LENGTH).required(),
  answer_by_bot: Joi.string().min(MINIMUM_ANSWER_LENGTH).max(MAXIMUM_ANSWER_LENGTH).required(),
  answer_status: Joi.number().integer().min(-1).max(1).required(),
  assigned_department: Joi.number().integer().min(1).allow(null),
  user_id: Joi.number().integer().min(1).allow(null),
});

export const modifyAnswerBotQuestionPost = Joi.object().keys({
  post_question_id: Joi.number().integer().min(1).allow(null),
});

export const modifyAnswerBotFeedback = Joi.object().keys({
  answer_status: Joi.number().integer().min(-1).max(1).required(),
});



// `id` int(11) NOT NULL AUTO_INCREMENT,
// `post_question_id` int(11) DEFAULT NULL,
// `question_by_user` VARCHAR(500) NOT NULL,
// `answer_by_bot` VARCHAR(3000) NOT NULL,
// `answer_status` int(1) NOT NULL DEFAULT 0,
// `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
// `assigned_department` int(11) DEFAULT NULL,
// `user_id` int(11) DEFAULT NULL