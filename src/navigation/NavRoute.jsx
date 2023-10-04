import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import InvalidRoute from "./InvalidRoute";

import Navbar from "../components/Navbar";
import Dashboard from "../pages/dashboard/Dashboard";
import Leaderboard from "../pages/leaderboard/Leaderboard";
import CreatePoll from "../pages/createpoll/CreatePoll";
import CreateForm from "../pages/createFormMain/createFormMain";
import Store from "../pages/Redeem/store";
import ViewPoll from "../pages/viewpoll/ViewPoll";
import UserLogin from "../pages/userlogin/UserLogin";

function NavRoute({ dispatch, loggedIn }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div>
      {loggedIn && <Navbar />}
      <Routes>
        <Route path="/login" exact element={<UserLogin />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          exact
          element={
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          exact
          element={
            <PrivateRoute>
              <CreatePoll />
            </PrivateRoute>
          }
        />
         <Route
          path="/createForm"
          exact
          element={
            <PrivateRoute>
              <CreateForm />
            </PrivateRoute>
          }
        />
         <Route
          path="/Store"
          exact
          element={
            <PrivateRoute>
              <Store />
            </PrivateRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <PrivateRoute>
              <ViewPoll />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
             element={<InvalidRoute page="page" />}
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(NavRoute);
