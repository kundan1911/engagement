import { LOGOUT_AUTHED_USER, SET_AUTHED_USER } from "../actions/authedUser";

/**
 * authedUser Reducer
 * 
 * Manages the state of the currently authenticated user.
 *
 * @param {Object|null} state - Current state of the authenticated user. Default is null, representing no authenticated user.
 * @param {Object} action - The action object to process.
 * @returns {Object|null} - The new state of the authenticated user.
 */
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      // Update state with the provided authenticated user.
      return action.authedUser;

    case LOGOUT_AUTHED_USER:
      // Reset state to null, indicating no user is authenticated.
      return null;

    default:
      // If the action type isn't recognized, return the current state unchanged.
      return state;
  }
}
