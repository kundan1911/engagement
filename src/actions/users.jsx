// Action Types
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

/**
 * Action creator to receive users and set them in the redux state.
 * 
 * @param {Object} users - The users fetched from the API or database.
 * @returns {Object} - The action object.
 */
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

/**
 * Action creator to add an answer from an authenticated user to a specific question.
 * 
 * @param {string} authedUser - ID of the authenticated user who answered.
 * @param {string} qid - ID of the question that was answered.
 * @param {string} answer - The choice made by the user (either 'optionOne' or 'optionTwo').
 * @returns {Object} - The action object.
 */
export function addAnswerUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer,
    };
}

/**
 * Action creator to add a question created by a user.
 * 
 * @param {Object} param0 - Contains the author's ID and the question's ID.
 * @param {string} param0.author - ID of the user who created the question.
 * @param {string} param0.id - ID of the created question.
 * @returns {Object} - The action object.
 */
export function addQuestionUser({ author, id }) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid: id,
    };
}
