// Import required libraries and components.
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { handleAddAnswer } from "../../actions/questions";
import Footer from "../../components/Footer";

/**
 * ViewPoll Component: Represents a single poll where users can vote.
 *
 * @param {Object} dispatch - Redux store dispatch function.
 * @param {Object} authedUser - Authenticated user object.
 * @param {Object} question - Current question object.
 * @param {Object} author - Author of the question.
 * @returns {JSX.Element} - Rendered ViewPoll component.
 */
const ViewPoll = ({ dispatch, authedUser, users, questions }) => {
  // Hooks
  const navigate = useNavigate(); // React-router navigation hook.
  
  const questionId = useParams().id;
  const question = questions[questionId];
  const author = question ? users[question.author] : null;

  if (!authedUser || !question || !author) {
    navigate("/");
    return null; // Return null or some loading component.
  }

  // Check if authenticated user has voted for either option.
  const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  /**
   * Handles the vote action for option one.
   *
   * @param {Event} e - Event object.
   */
  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    // Remove the navigate line.
  };
  
  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    // Remove the navigate line.
  };
  

  /**
   * Calculates the percentage of votes for the given option.
   *
   * @param {string} option - The option to calculate (either "optionOne" or "optionTwo").
   * @param {Object} question - Current question object.
   * @returns {string} - Percentage of votes for the given option.
   */
  const calcPercentage = (option, question) => {
    const numberVotesTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return (question.optionOne.votes.length / numberVotesTotal) * 100 + "%";
      case "optionTwo":
        return (question.optionTwo.votes.length / numberVotesTotal) * 100 + "%";
      default:
        return "";
    }
  };

  return (
    <div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl py-[185px] px-12 ">
            {/* Heading and Description */}
            <div className="flex flex-col items-center justify-center text-center py-8">
              <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl  dark:text-white capitalize">
                Poll By {author.id}
              </h1>
              <img
                src={author.avatarURL}
                alt="Profile"
                className="h-32 w-42 mb-14 mt-2 rounded-full"
              />
              <h4 className="max-w-2xl mb-8 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-4xl dark:text-gray-400">
                Would You Rather
              </h4>

              {/* Poll options */}
              <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-2xl">
                <button
                  onClick={handleOptionOne}
                  disabled={hasVoted}
                  className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 
        ${
          hasVotedForOptionOne
            ? "bg-blue-600 border-blue-600 hover:bg-blue-700"
            : ""
        }`}
                >
                  <div>
                    <p className="font-bold mb-2">
                      {question.optionOne.text}
                      {hasVotedForOptionOne && (
                        <span className="ml-2 text-blue-300">✓ Chosen</span>
                      )}
                    </p>

                    {!hasVoted && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        Cast Vote
                      </span>
                    )}
                    {hasVoted && (
                      <p className="text-xs">
                        Total Votes: {question.optionOne.votes.length} (
                        {calcPercentage("optionOne", question)})
                      </p>
                    )}
                  </div>
                </button>

                <button
                  onClick={handleOptionTwo}
                  disabled={hasVoted}
                  className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 
        ${
          hasVotedForOptionTwo
            ? "bg-blue-600 border-blue-600 hover:bg-blue-700"
            : ""
        }`}
                >
                  <div>
                    <p className="font-bold mb-2">
                      {question.optionTwo.text}
                      {hasVotedForOptionTwo && (
                        <span className="ml-2 text-blue-300">✓ Chosen</span>
                      )}
                    </p>

                    {!hasVoted && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                        Cast Vote
                      </span>
                    )}
                    {hasVoted && (
                      <p className="text-xs">
                        Total Votes: {question.optionTwo.votes.length} (
                        {calcPercentage("optionTwo", question)})
                      </p>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

/**
 * Maps the required state from the Redux store to the props required by the `ViewPoll` component.
 *
 * @param {object} state - The current state in the Redux store.
 * @returns {object} The mapped props containing the authenticated user, the specific question, and the author of the question.
 */
const mapStateToProps = ({ authedUser, users, questions }) => {
  return { authedUser, users, questions };
};

export default connect(mapStateToProps)(ViewPoll);
