import { ADD_ANSWER_QUESTION, ADD_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

/**
 * questions Reducer
 * 
 * Manages the state of the questions in the application.
 *
 * @param {Object} state - Current state of the questions. Default is an empty object.
 * @param {Object} action - The action object to process.
 * @returns {Object} - The new state of the questions.
 */
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      // Merge the current questions with the new set of questions from the action.
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      // Add the new question to the state.
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case ADD_ANSWER_QUESTION:
      // Update the specific question with the new answer.
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.author)
          }
        }
      };

    default:
      // If the action type isn't recognized, return the current state unchanged.
      return state;
  }
}
