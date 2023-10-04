import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

/**
 * Fetches the initial data required for the application.
 *
 * This function retrieves all users and all questions available.
 *
 * @returns {Promise<Object>} - A promise that resolves with an object containing users and questions.
 */
export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

/**
 * Saves a new question to the database.
 *
 * This function submits a new question to be stored in the database.
 *
 * @param {string} optionOneText - The text of the first option.
 * @param {string} optionTwoText - The text of the second option.
 * @param {string} author - The ID of the user creating the question.
 * @returns {Promise<Object>} - A promise that resolves with the new question.
 */
export function saveQuestion(optionOneText, optionTwoText, author) {
  return _saveQuestion({ optionOneText, optionTwoText, author });
}

/**
 * Records a user's answer to a question in the database.
 *
 * This function saves a user's answer choice for a particular question.
 *
 * @param {string} authedUserId - The ID of the user answering the question.
 * @param {string} qid - The ID of the question being answered.
 * @param {string} answer - The chosen answer (either 'optionOne' or 'optionTwo').
 * @returns {Promise<undefined>} - A promise indicating the save operation's completion.
 */
export function saveQuestionAnswer(authedUserId, qid, answer) {
  return _saveQuestionAnswer({
    authedUser: authedUserId,
    qid,
    answer,
  });
}
