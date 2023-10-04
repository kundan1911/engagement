// Importing Card component which is used to display each question
import Card from "../../components/Card";

/**
 * QuestionSection component that displays a set of questions
 * based on the specified filter function.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - Title of the section.
 * @param {string} props.subtitle - Subtitle description of the section.
 * @param {Array} props.questions - Array of question objects.
 * @param {Object} props.users - Object containing user data.
 * @param {Function} props.filterFunction - Function to filter questions.
 * @param {boolean} props.isAnswered - Flag to determine if questions are answered or not.
 *
 * @returns {JSX.Element} Rendered component
 */
const QuestionSection = ({
  title,
  subtitle,
  questions,
  users,
  filterFunction,
  isAnswered,
}) => {
  return (
    <div className="py-10">
      <div className="py-8">
        {/* Title and subtitle of the section */}
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {subtitle}
        </p>
      </div>

      {/* Display the list of filtered questions */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {questions.filter(filterFunction).map((question) => (
          <li key={question.id}>
            {/* Use the Card component to display each question */}
            <Card
              question={question}
              author={users[question.author]}
              isAnswered={isAnswered}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionSection;