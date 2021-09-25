import {
  INCREMENT,
  ANSWER,
  NEXT_QUESTION,
  UNCHECKED,
  UPDATE_QUES_ARRAY,
  CHANGE_QUESTION,
  // COUNT,
} from "./question.types";

const questions = [
  {
    section: "mathematics",
    question:
      "How many words starting with letter D can be formed by taking all letters from word DELHI, so that the letters are not repeated?",
    option: [24, 46, 28, 30],
  },
  {
    section: "analitical-reasoning",
    question:
      "Sum of ages of Anu and Bhanu is 10 years more than sum of ages of Bhanu, Chanu and Dhanu. Average age of Chanu and Dhanu is 19 years. Find the average age of Anu and Dhanu if Dhanu is 10 years elder than Chanu.",
    option: [25, 36, 31, 30],
  },
  {
    section: "computer",
    question:
      "The memory unit which directly communicates with the CPU is known as",
    option: [
      "primary memory",
      "secondary memory",
      "cache memory",
      "shared memory",
    ],
  },
  {
    section: "english",
    question: "Choose the correct expression of approval:",
    option: ["super", "damn", "rotten", "hell"],
  },
  {
    section: "english",
    question: "Choose the incorrect expression of approval:",
    option: ["super", "damn", "rotten", "hell"],
  },
  {
    section: "english",
    question: "Choose the correct expression of not approval:",
    option: ["super", "damn", "rotten", "hell"],
  },
];

let array = [...questions];
for (let i = 0; i < 6; i++) {
  array[i].isVisited = i === 0;
  array[i].isReviewed = false;
  array[i].isAnswered = false;
}

const INITIAL_STATE = {
  questions: array,
  currentIndex: 0,
  answerArray: new Array(6).fill(-1),
  counter: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        questions: action.payload,
      };

    case INCREMENT:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };

    case ANSWER:
      const newarray = [...state.answerArray];
      console.log(newarray);
      newarray[state.currentIndex] = action.payload;

      return {
        ...state,
        answerArray: newarray,
      };

    case UNCHECKED:
      return {
        ...state,
        questions: action.payload.ques,
        answerArray: action.payload.ans,
      };

    case UPDATE_QUES_ARRAY:
      return {
        ...state,
        questions: action.payload,
      };

    case CHANGE_QUESTION:
      return {
        ...state,
        currentIndex: action.payload,
      };

    // case COUNT:
    //   return {
    //     ...state,
    //     counter: state.counter + action.payload,
    //   };

    default:
      return state;
  }
};

export default reducer;
