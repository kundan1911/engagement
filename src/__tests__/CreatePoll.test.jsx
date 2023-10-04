import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import CreatePoll from '../pages/createpoll/CreatePoll';
import { handleAddQuestion } from '../actions/questions';

// Initialize the mock store for redux
const middlewares = [];
const mockStore = configureMockStore(middlewares);

// Mock the handleAddQuestion action for testing purposes
jest.mock('../actions/questions', () => ({
    handleAddQuestion: jest.fn()
}));

/**
 * Test suite for the <CreatePoll /> component.
 */
describe('<CreatePoll />', () => {
  let store;

  /**
   * Set up the mock redux store and clear any previous mock calls
   * before each test case.
   */
  beforeEach(() => {
    store = mockStore({ authedUser: { id: 'mockUserId' } });
    store.dispatch = jest.fn();
    handleAddQuestion.mockClear();
  });

  /**
   * Test if the component updates option fields correctly.
   */
  it('updates option fields correctly', () => {
    // Render the component wrapped with redux and router
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <CreatePoll />
        </Router>
      </Provider>
    );

    // Simulate user input for the first option and check if it updates correctly
    const firstOptionInput = getByPlaceholderText('Enter first option');
    fireEvent.change(firstOptionInput, { target: { value: 'Test Option 1' } });
    expect(firstOptionInput.value).toBe('Test Option 1');

    // Simulate user input for the second option and check if it updates correctly
    const secondOptionInput = getByPlaceholderText('Enter second option');
    fireEvent.change(secondOptionInput, { target: { value: 'Test Option 2' } });
    expect(secondOptionInput.value).toBe('Test Option 2');
  });

  /**
   * Test if the component dispatches the correct action when the form
   * is submitted with valid data.
   */
  it('dispatches the correct action with valid form data', async () => {
    // Render the component wrapped with redux and router
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <CreatePoll />
        </Router>
      </Provider>
    );

    // Simulate user input for the first and second options
    const firstOptionInput = getByPlaceholderText('Enter first option');
    fireEvent.change(firstOptionInput, { target: { value: 'Test Option 1' } });
    const secondOptionInput = getByPlaceholderText('Enter second option');
    fireEvent.change(secondOptionInput, { target: { value: 'Test Option 2' } });

    // Simulate form submission
    const submitButton = getByText('Create Poll');
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Check if the correct action creator was called with the right arguments
    expect(handleAddQuestion).toHaveBeenCalledWith('Test Option 1', 'Test Option 2');
  });
});
