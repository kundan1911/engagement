import React, { useEffect, useState } from "react";
import { QuizzBuilder } from "react-quizzes";
import { useNavigate, Link } from "react-router-dom";
// import QuizExample from "../../components/CreateForm";
// import "../../assets/antd.css";
import Footer from "../../components/Footer";

const CreateForm= () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState([]);
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  /**
   * Handle the change event for the first option input.
   *
   * @param {Event} e - Input change event.
   */
  const handleFirstOptionChange = (e) => {
    setFirstOption(e.target.value);
  };

  /**
   * Handle the change event for the second option input.
   *
   * @param {Event} e - Input change event.
   */
  const handleSecondOptionChange = (e) => {
    setSecondOption(e.target.value);
  };

  /**
   * Handle the form submission.
   * Dispatches the creation of a new poll and redirects the user to the home page.
   *
   * @param {Event} e - Form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };
  const handleChildData = (data) => {
    console.log("oKKKK"); // Update parent state with child data
    console.log("fkdnf",formdata)
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl py-[131px] px-12 ">
          {/* Heading and Description */}
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Create Form 
            </h1>
            <p className="max-w-2xl mb-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Collect feedback from your employees to make informed decisions.
            </p>
            {/* Navigation buttons */}
            <div className="flex justify-center gap-3 mb-4">
              <Link
                to="/leaderboard"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Top Contributors
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

          {/* Create New Poll Form */}
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 border-t border-b border-gray-200 dark:border-gray-600">
            <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
              Would You Rather
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                {/* First Option Input */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="optionOne"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Option 1
                  </label>
                  <input
                    type="text"
                    value={firstOption}
                    onChange={handleFirstOptionChange}
                    name="optionOne"
                    id="optionOne"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter first option"
                    required
                  />
                </div>
                {/* Second Option Input */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="optionTwo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Option 2
                  </label>
                  <input
                    value={secondOption}
                    onChange={handleSecondOptionChange}
                    type="text"
                    name="optionTwo"
                    id="optionTwo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter second option"
                    required
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={!firstOption || !secondOption}
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Create Poll
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default CreateForm
