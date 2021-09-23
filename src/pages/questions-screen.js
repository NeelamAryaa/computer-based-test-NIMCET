import React, { Component, Fragment } from "react";
import QuesScreenLeftPanel from "../components/ques-screen-left-panel";
import QuesScreenRightPanel from "../components/ques-screen-right-panel";
// import { Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import {
  NextQuestion,
  SetAnswer,
  Unchecked,
  MarkForReview,
  ChangeQuestion,
} from "../redux/question/question.actions";

class QuestionsScreen extends Component {
  onClickSaveAndNext = () => {
    this.props.NextQuestion();
  };

  onChangeQues = (idx) => {
    this.setState({ checkedOption: -1 });
    this.props.ChangeQuestion(idx);
  };

  clearResponse = () => {
    this.props.Unchecked();
  };

  render() {
    const currentQuestion = this.props.questions[this.props.currentIndex];

    return (
      <Fragment>
        {/*<nav
          className="navbar 
         py-0 px-3 text-white"
          style={{ backgroundColor: "#29385c" }}
        >
          NIMCET - 2021
        </nav>*/}
        <div className="row  mx-0">
          <QuesScreenLeftPanel
            currentQuestion={currentQuestion}
            answerArray={this.props.answerArray}
            currentIndex={this.props.currentIndex}
            MarkForReview={this.props.MarkForReview}
            clearResponse={this.clearResponse}
            onClickSaveAndNext={this.onClickSaveAndNext}
            SetAnswer={this.props.SetAnswer}
          />
          <QuesScreenRightPanel
            questions={this.props.questions}
            onChangeQues={this.onChangeQues}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.index.currentIndex,
    questions: state.index.questions,
    answerArray: state.index.answerArray,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    NextQuestion: () => dispatch(NextQuestion()),
    SetAnswer: (idx) => dispatch(SetAnswer(idx)),
    Unchecked: () => dispatch(Unchecked()),
    MarkForReview: () => dispatch(MarkForReview()),
    ChangeQuestion: (idx) => dispatch(ChangeQuestion(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(QuestionsScreen);
