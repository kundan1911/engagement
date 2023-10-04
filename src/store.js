import { configureStore } from '@reduxjs/toolkit';
import authedUser from './reducers/authedUser';
import users from './reducers/users';
import questions from './reducers/questions';

// Inside your store configuration
const persistedAuthedUser = localStorage.getItem('authedUser')
  ? JSON.parse(localStorage.getItem('authedUser'))
  : null;

export const store = configureStore({
  preloadedState: {
    authedUser: persistedAuthedUser,
  },
  reducer: {
    authedUser,
    users,
    questions,
  },
});
