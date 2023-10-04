import { connect } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../util/formatDate";

/**
 * Displays the avatar of the user.
 * @param {string} avatarURL - The URL of the user's avatar.
 * @param {string} name - The name of the user.
 */
const UserAvatar = ({ avatarURL, name }) => (
  <img
    className="w-24 h-24 mb-3 rounded-full shadow-lg"
    src={avatarURL}
    alt={`${name}'s avatar`}
  />
);

const TimeStamp = ({ timestamp }) => {
  const formattedDate = formatDate(timestamp);
  // console.log("Formatted Date inside TimeStamp:", formattedDate);
  return (
    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">
      published on {formattedDate}
    </span>
  );
};

/**
 * Displays the name of the user.
 * @param {string} name - The name of the user.
 */
const UserName = ({ name }) => (
  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
    {name}
  </h5>
);

/**
 * Displays the poll question.
 * @param {object} optionOne - The first poll option.
 * @param {object} optionTwo - The second poll option.
 */
const PollQuestion = ({ optionOne, optionTwo }) => (
  <span className="text-sm text-gray-500 dark:text-gray-400">
    {optionOne.text} or {optionTwo.text}?
  </span>
);

/**
 * A reusable button component.
 * @param {ReactNode} children - The content inside the button.
 * @param {string} additionalClasses - Additional CSS classes for styling.
 */
const ActionButton = ({ children, additionalClasses }) => (
  <button
    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg focus:outline-none ${additionalClasses}`}
  >
    {children}
  </button>
);

/**
 * A card component to display poll data.
 * Contains the author's avatar, name, poll question, and action buttons.
 * @param {object} question - The poll question data.
 * @param {object} author - The author data.
 * @param {boolean} isAnswered - Indicates if the poll is answered.
 */
const Card = ({ question, author, isAnswered }) => {
  // console.log("Timestamp:", question.timestamp);

  return (
    <Link to={"questions/" + question.id}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-8 mt-8 px-4">
          <UserAvatar avatarURL={author?.avatarURL} name={author.name} />
          <UserName name={author.name} />
          <TimeStamp timestamp={question.timestamp} />
          <PollQuestion
            optionOne={question.optionOne}
            optionTwo={question.optionTwo}
          />
          <div className="flex mt-4 space-x-3 md:mt-6">
            {isAnswered ? (
              <ActionButton additionalClasses="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                View Insights
              </ActionButton>
            ) : (
              <ActionButton additionalClasses="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Share Feedback
              </ActionButton>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default connect()(Card);
