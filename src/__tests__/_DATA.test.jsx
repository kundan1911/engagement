import {
  _saveQuestion,
  _getQuestions,
  _saveQuestionAnswer,
} from "../util/_DATA";

describe("_saveQuestion function", () => {
  // Async unit test to verify that the saved question
  // is returned with all expected fields populated
  // when correctly formatted data is passed to the function.
  it("should return the saved question with all expected fields when correct data is passed", async () => {
    const mockCorrectData = {
      optionOneText: "Option 1 Text",
      optionTwoText: "Option 2 Text",
      author: "sarahedo",
    };

    const savedQuestion = await _saveQuestion(mockCorrectData);

    // Verifying that all expected fields are present in the returned data
    expect(savedQuestion).toHaveProperty("id");
    expect(savedQuestion).toHaveProperty("timestamp");
    expect(savedQuestion).toHaveProperty("author", mockCorrectData.author.id);
    expect(savedQuestion).toHaveProperty(
      "optionOne.text",
      mockCorrectData.optionOneText
    );
    expect(savedQuestion).toHaveProperty(
      "optionTwo.text",
      mockCorrectData.optionTwoText
    );
  });

  // Test for incorrectly formatted data
  it("should throw an error if incorrect data is passed", async () => {
    const mockIncorrectData = {
      optionOneText: "Option 1 Text",
    };

    expect.assertions(1);

    try {
      await _saveQuestion(mockIncorrectData);
    } catch (e) {
      expect(e).toBe("Please provide optionOneText, optionTwoText, and author");
    }
  });
});

describe("_saveQuestionAnswer function", () => {
  let existingQuestionId; // This variable will hold a valid question ID.

  // Before running tests, fetch an existing question ID.
  beforeAll(async () => {
    const questions = await _getQuestions();
    for (let key in questions) {
      existingQuestionId = key;
      break;
    }
  });

  // Test to verify that true is returned when correctly formatted data is passed to the function.
  it("should return true when correctly formatted data is passed", async () => {
    const mockAnswerData = {
      authedUser: "sarahedo",
      qid: existingQuestionId,
      answer: "optionOne",
    };

    const result = await _saveQuestionAnswer(mockAnswerData);
    expect(result).toBe(true);
  });

  // Test to verify that an error is returned if incorrect data is passed to the function.
  it("should throw an error if incorrect data is passed", async () => {
    const mockIncompleteAnswerData = {
      authedUser: "sarahedo",
      qid: "",
    };

    expect.assertions(1);

    try {
      await _saveQuestionAnswer(mockIncompleteAnswerData);
    } catch (e) {
      expect(e.message).toBe("Please provide authedUser, qid, and answer");
    }
  });
});
