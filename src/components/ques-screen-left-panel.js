import React, { Component } from "react";

class QuesScreenLeftPanel extends Component {
  state = {
    checkedOption: -1,
  };

  onChangeOption = (idx) => {
    this.setState({
      checkedOption: idx,
    });
  };

  clearResponse = () => {
    this.setState({ checkedOption: -1 });
    this.props.clearResponse();
  };

  onClickSaveAndNext = () => {
    this.setState({ checkedOption: -1 });
    this.props.SetAnswer(this.state.checkedOption);
    this.props.onClickSaveAndNext();
  };

  render() {
    return (
      <div className="col-9 px-0">
        <div className=" mx-0">
          <div
            className="row w-75 text-primary text-center"
            style={{ fontSize: "16px" }}
          >
            <button type="button" className="col btn btn-info text-white">
              Mathematics
            </button>
            <div className="col text-info">Analitical Reasoning</div>
            <div className="col text-info">Computer</div>
            <div className="col text-info">English</div>
          </div>
        </div>
        <hr className="m-0" />
        <div class="row px-3">
          <div class="col text-start text-danger">Question type : MCQ</div>
          <div class="col text-end">Time left : 01:23:44</div>
        </div>
        <hr className="m-0" />
        <div
          className="col-4 px-3 fs-4 rounded  text-white"
          style={{ backgroundColor: "#29385c" }}
        >
          Mathematics
        </div>
        <hr className="m-0" />
        {this.props.currentQuestion !== undefined ? (
          <div style={{ height: "73vh" }}>
            <div>
              <div
                className=" text-white px-3"
                style={{ backgroundColor: "#29385c" }}
              >
                Question no. - {this.props.currentIndex + 1}
              </div>
              <div className="px-3">{this.props.currentQuestion.question}</div>
              {this.props.currentQuestion.option.map((opt, idx) => (
                <div className="form-check mx-3" key={idx}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={idx}
                    onChange={() => this.onChangeOption(idx)}
                    checked={
                      idx === this.state.checkedOption ||
                      idx === this.props.answerArray[this.props.currentIndex]
                    }
                  />
                  <label className="form-check-label" for={idx}>
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>{this.props.currentIndex}</div>
        )}

        <div className="w-100 d-inline-flex justify-content-between">
          <div className="flex px-3 ">
            <button
              type="button"
              className="btn btn-primary me-4 "
              onClick={this.props.MarkForReview}
            >
              Mark for Review
            </button>
            <button
              type="button"
              className="btn btn-primary "
              onClick={this.clearResponse}
            >
              Clear Response
            </button>
          </div>
          <div className="flex px-3">
            {
              <button
                type="button"
                className={`btn btn-success ${
                  this.props.currentIndex === 6 ? "disabled" : null
                } `}
                onClick={this.onClickSaveAndNext}
              >
                Save and Next
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default QuesScreenLeftPanel;
