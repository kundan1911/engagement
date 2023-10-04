import { combineReducers } from "@redux";
import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

/**
 * rootReducer
 * 
 * This rootReducer combines all the individual reducers to create a single state tree.
 * - `authedUser`: Manages the state of the currently authenticated user.
 * - `users`: Manages the state of all users, including their created questions and answers.
 * - `questions`: Manages the state of all questions, including their option votes.
 *
 * @returns {Function} - The combined reducer.
 */
export default combineReducers({
    authedUser,
    users,
    questions,
});
