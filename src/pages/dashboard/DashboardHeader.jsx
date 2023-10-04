// Import necessary dependencies for routing
import { Link } from "react-router-dom";

/**
 * DashboardHeader component that displays the primary title,
 * description, and primary call-to-action buttons for the dashboard.
 *
 * The component provides links for creating a new poll and viewing the leaderboard.
 * Additionally, it highlights key metrics and functionalities of the Employee Poll System.
 */
const DashboardHeader = () => {
  return (
    <div className="py-14">
      {/* Main title */}
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Empower Your Team's Voice
      </h1>

      {/* Subtitle description */}
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        In our Employee Poll System, we believe in the power of collective
        decision-making. Engage, vote, and discover the most popular opinions
        among your peers.
      </p>

      {/* CTA Buttons: Create a poll and View leaderboard */}
      <div className="flex flex-col mb-12 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        {/* Link to create a new poll */}
        <Link
          to="/add"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Create a Poll
          <svg
            className="ml-2 -mr-1 w-5 h-5"
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
        {/* Link to view the leaderboard */}
        <Link
          to="/leaderboard"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          View Leaderboard
        </Link>
      </div>

      {/* List of key metrics and functionalities */}
      <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
        <div className="flex justify-center">
          <div>
            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
              Employee Engagement Metrics
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Analyze the participation and engagement trends in our company
              polls.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
              Empower Employee Initiatives
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Every team member has the capability to create polls, giving voice
              to their ideas and concerns.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
              Collective Insights
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Dive deep into the aggregated perspectives of your team. Our polls
              foster transparency and shared understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;