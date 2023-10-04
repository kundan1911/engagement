/**
 * Sample data for users.
 */
let users = {
  sarahedo: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "https://github.com/sarah.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    password: "abc321",
    name: "Tyler McGinnis",
    avatarURL: "https://github.com/tyler.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  mtsamis: {
    id: "mtsamis",
    password: "xyz123",
    name: "Mike Tsamis",
    avatarURL: "https://github.com/mike.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  zoshikanlu: {
    id: "zoshikanlu",
    password: "pass246",
    name: "Zenobia Oshikanlu",
    avatarURL: "https://github.com/zenobia.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
    },
    questions: [],
  },
};

/**
 * Sample data for questions.
 */
let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "Build our new application with Javascript",
    },
    optionTwo: {
      votes: [],
      text: "Build our new application with Typescript",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "mtsamis",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "hire more frontend developers",
    },
    optionTwo: {
      votes: ["mtsamis", "sarahedo"],
      text: "hire more backend developers",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "conduct a release retrospective 1 week after a release",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "conduct release retrospectives quarterly",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "have code reviews conducted by peers",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "have code reviews conducted by managers",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "take a course on ReactJS",
    },
    optionTwo: {
      votes: ["mtsamis"],
      text: "take a course on unit testing with Jest",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "mtsamis",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["mtsamis", "zoshikanlu"],
      text: "deploy to production once every two weeks",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "deploy to production once every month",
    },
  },
};

/**
 * Generates a unique identifier string.
 * @returns {string} A unique string.
 */
function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

/**
 * Fetches the users data.
 * @returns {Promise<object>} A promise that resolves with the users data.
 */
export function _getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...users }), 1000);
  });
}

/**
 * Fetches the questions data.
 * @returns {Promise<object>} A promise that resolves with the questions data.
 */
export function _getQuestions() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...questions }), 1000);
  });
}

/**
 * Formats a question.
 * @param {object} param0 Contains optionOneText, optionTwoText, and author data.
 * @returns {object} The formatted question.
 */
function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author: author.id,    
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

/**
 * Saves a new question.
 * @param {object} question Contains optionOneText, optionTwoText, and author.
 * @returns {Promise<object>} A promise that resolves with the newly saved question.
 */
export function _saveQuestion(question) {
  return new Promise((resolve, reject) => {
    if (
      !question.optionOneText ||
      !question.optionTwoText ||
      !question.author
    ) {
      reject("Please provide optionOneText, optionTwoText, and author");
    }

    const formattedQuestion = formatQuestion(question);
    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };
      resolve(formattedQuestion);
    }, 1000);
  });
}

/**
 * Saves an answer for a question.
 * @param {object} param0 Contains authedUser, qid, and answer.
 * @returns {Promise<boolean>} A promise that resolves with true if the answer is saved.
 */
export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((resolve, reject) => {
    if (!authedUser || !qid || !answer) {
      return reject(new Error("Please provide authedUser, qid, and answer"));
    }

    const user = users[authedUser];
    const question = questions[qid];

    if (!user) {
      return reject(new Error("Invalid authedUser"));
    }

    if (!question || !['optionOne', 'optionTwo'].includes(answer)) {
      return reject(new Error("Invalid qid or answer"));
    }

    setTimeout(() => {
      // Update user answers
      users = {
        ...users,
        [authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [qid]: answer,
          },
        },
      };

      // Update question votes
      const updatedVotes = question[answer].votes.concat([authedUser]);
      questions = {
        ...questions,
        [qid]: {
          ...question,
          [answer]: {
            ...question[answer],
            votes: updatedVotes,
          },
        },
      };
      resolve(true);
    }, 500);
  });
}