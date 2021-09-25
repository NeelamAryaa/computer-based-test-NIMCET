import {
  INCREMENT,
  ANSWER,
  NEXT_QUESTION,
  UNCHECKED,
  UPDATE_QUES_ARRAY,
  CHANGE_QUESTION,
  // COUNT,
} from "./question.types";

export const NextQuestion = () => {
  return (dispatch, getState) => {
    const { questions, currentIndex, answerArray } = getState().index;
    const ques = [...questions];
    const answers = [...answerArray];

    if (currentIndex === ques.length - 1) {
      if (answers[currentIndex] !== -1) {
        ques[currentIndex].isAnswered = true;
        dispatch({ type: NEXT_QUESTION, payload: ques });
      }
    } else {
      ques[currentIndex + 1].isVisited = true;
      dispatch({ type: INCREMENT, payload: 1 });
      dispatch({ type: NEXT_QUESTION, payload: ques });
      if (answers[currentIndex] !== -1) {
        ques[currentIndex].isAnswered = true;
        dispatch({ type: NEXT_QUESTION, payload: ques });
      }
    }
  };
};

export const SetAnswer = (idx) => {
  return (dispatch) => {
    dispatch({ type: ANSWER, payload: idx });
  };
};

export const Unchecked = () => {
  return (dispatch, getState) => {
    const { questions, currentIndex, answerArray } = getState().index;
    const ques = [...questions];
    const ans = [...answerArray];
    ques[currentIndex].isAnswered = false;
    ans[currentIndex] = -1;
    dispatch({ type: UNCHECKED, payload: { ques: ques, ans: ans } });
  };
};

export const MarkForReview = () => {
  return (dispatch, getState) => {
    const { questions, currentIndex } = getState().index;
    const ques = [...questions];
    ques[currentIndex].isReviewed = true;

    dispatch({ type: UPDATE_QUES_ARRAY, payload: ques });
  };
};

export const ChangeQuestion = (idx) => {
  return (dispatch, getState) => {
    const question = [...getState().index.questions];
    question[idx].isVisited = true;

    dispatch({ type: UPDATE_QUES_ARRAY, payload: question });
    dispatch({ type: CHANGE_QUESTION, payload: idx });
  };
};

// export const Counter = () => {
//   return (dispatch, getState) => {
//     const ques = getState().index.questions;

//     ques.map((obj) => {
//       if (obj.isAnswered) {
//         return dispatch({ type: COUNT, payload: 1 });
//       } else {
//         return dispatch({ type: COUNT, payload: 0 });
//       }
//     });
//   };
// };
