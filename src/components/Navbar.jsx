import { Link, useLocation } from "react-router-dom"; // Import required components/hooks from react-router-dom
import { connect } from "react-redux"; // connect helps to connect React components to the Redux store
import { handleLogout } from "../actions/authedUser"; // Importing the logout action

const Navbar = ({ dispatch, authedUserId, avatarURL }) => {
  const location = useLocation(); // Get the current path using the useLocation hook

  // Handle logout event
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  // Define the navigation items
  const navigation = [
    { name: "Dashboard", href: "/", current: location.pathname === "/" },
    {
      name: "Top Contributors",
      href: "/leaderboard",
      current: location.pathname === "/leaderboard",
    },
    {
      name: "Create Poll",
      href: "/add",
      current: location.pathname === "/add",
    },
    {
      name: "Create Form",
      href: "/createForm",
      current: location.pathname === "/createForm",
    },
    {
      name: "Store",
      href: "/Store",
      current: location.pathname === "/Store",
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
             Engagement
          </span>
        </Link>

        <div className="flex md:order-2">
          <div className="font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg">
            {authedUserId}
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={logout}
          >
            Logout
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-32"
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={
                    item.current
                      ? "bg-blue-700 text-white block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <span
                className="block py-2 pl-3 pr-4 text-gray-900"
                data-testid="user-information"
              >
                User: {authedUserId}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Mapping Redux state to component props
const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Navbar);
