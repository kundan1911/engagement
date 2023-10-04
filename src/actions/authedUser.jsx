// Action Types
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

/**
 * Action creator to set an authenticated user.
 * 
 * @param {Object} authedUser - The authenticated user object.
 * @returns {Object} - The action object.
 */
export const setAuthedUser = (authedUser) => {
  localStorage.setItem('authedUser', JSON.stringify(authedUser));
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
};

/**
 * Action creator to logout the current user.
 * 
 * @returns {Object} - The action object.
 */
export const logoutAuthedUser = () => {
  localStorage.removeItem('authedUser');
  return { type: LOGOUT_AUTHED_USER };
};
/**
 * Thunk to handle the user login process.
 * Searches the state for a matching user based on the provided 
 * username and password. If a match is found, dispatches an action to 
 * set the authenticated user.
 * 
 * @param {string} username - The username to authenticate.
 * @param {string} password - The password to match with the username.
 * @returns {Function} - Dispatch function.
 */
export const handleLogin = (username, password) => (dispatch, getState) => {
  const matchingUser = Object.values(getState().users).find(
    (user) => user.id === username && user.password === password
  );

  if (matchingUser) {
    dispatch(setAuthedUser(matchingUser));
  }
};

/**
 * Thunk to handle the user logout process.
 * Dispatches an action to logout the authenticated user.
 * 
 * @returns {Function} - Dispatch function.
 */
export const handleLogout = () => (dispatch) => dispatch(logoutAuthedUser());