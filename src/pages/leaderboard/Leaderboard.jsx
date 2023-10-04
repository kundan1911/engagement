import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const Leaderboard = ({ users }) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl py-[131px] px-12 ">
          {/* Heading and Description */}
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Employee Polls & Feedback
            </h1>
            <p className="max-w-2xl mb-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Gather insights from your team, understand their needs, and make
              informed decisions to enhance the work environment.
            </p>
            <div className="flex justify-center gap-3 mb-4">
              <Link
                to="/add"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Create a Poll
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                View Dashboard
              </Link>
            </div>
          </div>
          {/* Table showcasing users and their poll statistics */}
          <div className="py-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              {/* Table showcasing users and their poll statistics */}
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* Table Header */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Users
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Answered
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Created
                    </th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="bg-white dark:bg-slate-800">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={user?.avatarURL} alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">{user?.name}</div>
                        <div className="font-normal text-gray-500">{user?.id}</div>
                    </div>  
                </th>
                      <td className="px-6 py-4">
                        {Object.keys(user.answers).length}
                      </td>
                      <td className="px-6 py-4">{user.questions.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

/**
 * Map Redux state to component props.
 *
 * This function fetches the 'users' from the Redux store and then sorts them in descending order based
 * on the number of polls they've answered.
 */
const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

// Connect the component to the Redux store and export.
export default connect(mapStateToProps)(Leaderboard);
