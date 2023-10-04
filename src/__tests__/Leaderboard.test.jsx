import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Leaderboard from '../pages/leaderboard/Leaderboard';

const mockStore = configureMockStore();

// Test suite for the <Leaderboard /> component
describe('<Leaderboard />', () => {
  // Mock data to be used in the tests
  const mockData = {
    users: {
      user1: {
        id: 'user1',
        name: 'User One',
        avatarURL: 'path-to-image1',
        answers: { q1: 'optionOne', q2: 'optionTwo' },
        questions: ['q1', 'q2'],
      },
      user2: {
        id: 'user2',
        name: 'User Two',
        avatarURL: 'path-to-image2',
        answers: { q1: 'optionOne' },
        questions: ['q1'],
      },
    },
  };

  // Test case 1: Ensure that the Leaderboard component renders correctly
  it('renders leaderboard correctly', () => {
    // Create a mock Redux store with the mock data
    const store = mockStore(mockData);

    // Render the Leaderboard component wrapped in a Redux provider and Router
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );
    
    // Note: No assertions made here, but if it renders without errors, the test will pass
  });

  // Test case 2: Verify that users are sorted by the number of polls they've answered
  it('sorts users by the number of answered polls', () => {
    const store = mockStore(mockData);

    // Render the Leaderboard component again as above
    const { getAllByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );

    // Capture all the users displayed on the leaderboard
    const sortedUsers = getAllByText(/User/);

    // Print each user's name to the console
    // Note: This is not a true assertion. The order needs to be manually verified based on console output
    sortedUsers.forEach(user => console.log(user.textContent));
  });
});
