import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserLogin from "../pages/userlogin/UserLogin";
import thunk from "redux-thunk";

// Set up middlewares, in this case, redux-thunk to handle asynchronous actions
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<UserLogin />", () => {
  it("submits the form and dispatches login action with entered credentials", () => {
    // 1. Mock initial state for the Redux store. 
    // This is a hypothetical initial state where no user is authenticated and we have a test user in the system.
    const store = mockStore({
      authedUser: null,
      users: {
        testUser: {
          id: "testUser",
          password: "testPassword",
        },
      },
    });

    // 2. Render the UserLogin component within the context of the mocked Redux store
    const { getByLabelText, getByText, asFragment } = render(
      <Provider store={store}>
        <UserLogin loggedIn={false} />
      </Provider>
    );

    // 3. Retrieve the username and password input fields from the rendered component
    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");

    // 4. Simulate user typing into the username and password input fields
    fireEvent.change(usernameInput, { target: { value: "testUser" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });

    // 5. Simulate user clicking the "Sign in" button to submit the form
    fireEvent.click(getByText("Sign in"));

    // 6. Capture the list of actions that were dispatched to the store
    const actions = store.getActions();

    // 7. Assertion: Verify that the first dispatched action is of type SET_AUTHED_USER, 
    // indicating successful authentication
    expect(actions[0].type).toBe("SET_AUTHED_USER");
  });

  it("matches the snapshot", () => {
    // Mock the store's initial state for snapshot testing
    const store = mockStore({
      authedUser: null,
      users: {
        testUser: {
          id: "testUser",
          password: "testPassword",
        },
      },
    });

    // Render the UserLogin component and capture the rendered output
    const { asFragment } = render(
      <Provider store={store}>
        <UserLogin loggedIn={false} />
      </Provider>
    );

    // Compare the rendered output with the stored snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});

