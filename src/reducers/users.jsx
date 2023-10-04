import { ADD_ANSWER_USER, ADD_QUESTION_USER, RECEIVE_USERS } from "../actions/users";

/**
 * users Reducer
 * 
 * Manages the state of the users in the application, including their created questions and answers.
 *
 * @param {Object} state - Current state of the users. Default is an empty object.
 * @param {Object} action - The action object to process.
 * @returns {Object} - The new state of the users.
 */
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      // Merge the current users with the new set of users from the action.
      return {
        ...state,
        ...action.users,
      };

    case ADD_ANSWER_USER:
      // Update the user's answers list with the new answer to a specific question.
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };

    case ADD_QUESTION_USER:
      // Update the user's created questions list with the new question's ID.
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid)
        }
      };

    default:
      // If the action type isn't recognized, return the current state unchanged.
      return state;
  }
}
