// Required Redux and React dependencies
import { useState } from "react"; // Importing useState for managing component state
import { connect } from "react-redux";

// Component imports
import DashboardHeader from "./DashboardHeader";
import QuestionSection from "./QuestionSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

/**
 * Dashboard component that displays the main poll interface.
 *
 * This component fetches and displays unanswered and answered questions
 * based on the authenticated user's interactions. The list of questions
 * and user details are passed as props from the Redux store.
 *
 * @param {Object} authedUser - The authenticated user object from the Redux store.
 * @param {Array} questions - The list of question objects from the Redux store.
 * @param {Object} users - The list of user objects from the Redux store.
 */
const Dashboard = ({ authedUser, questions, users }) => {
  const [activeTab, setActiveTab] = useState("unanswered"); // State to keep track of the active tab

  // Move the helper functions here, before they're used
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  // Now, use the helper functions
  const unansweredQuestions = questions.filter(unanswered);
  const answeredQuestions = questions.filter(answered);

  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl text-center py-[100px] px-12 ">
          <DashboardHeader />
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setActiveTab("unanswered")}
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    activeTab === "unanswered"
                      ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent"
                  } rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 group`}
                  aria-current={activeTab === "unanswered" ? "page" : undefined}
                >
                  Unanswered
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setActiveTab("answered")}
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    activeTab === "answered"
                      ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent"
                  } rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 group`}
                  aria-current={activeTab === "answered" ? "page" : undefined}
                >
                  Answered
                </a>
              </li>
            </ul>
          </div>

          {/* Render QuestionSection based on activeTab */}
          {activeTab === "unanswered" && (
            <QuestionSection
              title="Dive into Open Discussions"
              subtitle="Explore unanswered polls and share your thoughts"
              questions={unansweredQuestions}
              users={users}
              filterFunction={unanswered}
              isAnswered={false}
            />
          )}
          {activeTab === "answered" && (
            <QuestionSection
              title="Insights from Past Discussions"
              subtitle="Browse through answered polls and gain insights"
              questions={answeredQuestions}
              users={users}
              filterFunction={answered}
              isAnswered={true}
            />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

/**
 * Redux mapStateToProps function to extract the required data from the state.
 *
 * This function maps the state's authedUser, questions, and users to the
 * component's props for easy access. The list of questions is sorted
 * by their timestamp to maintain a consistent order.
 *
 * @param {Object} state - The Redux store/state.
 * @returns {Object} Props derived from the state.
 */
const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

// Connecting the Dashboard component to the Redux store using connect() from 'react-redux'
export default connect(mapStateToProps)(Dashboard);
