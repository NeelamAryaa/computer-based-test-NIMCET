import React, { Component } from "react";

class QuesScreenLeftPanel extends Component {
  state = {
    active: false,
  };

  onChangeOption = (idx) => {
    this.props.updateCheckedOption(idx);
  };

  clearResponse = () => {
    this.props.updateCheckedOption(-1);
    this.props.clearResponse();
  };

  onClickSaveAndNext = () => {
    this.props.updateCheckedOption(-1);
    this.props.SetAnswer(this.props.checkedOption);
    this.props.onClickSaveAndNext();
  };

  render() {
    return (
      <div className="col-9 px-0">
        <div className=" mx-0">
          {/*<div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
            />
            <label
              class="btn btn-outline-primary border-0 fs-5 rounded"
              for="btnradio1"
            >
              Mathematics
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label
              class="btn btn-outline-primary border-0 fs-5 rounded"
              for="btnradio2"
            >
              Analitical Reasoning
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label
              class="btn btn-outline-primary border-0 fs-5 rounded"
              for="btnradio3"
            >
              Computer
            </label>
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio4"
              autocomplete="off"
            />
            <label
              class="btn btn-outline-primary border-0 fs-5 rounded"
              for="btnradio4"
            >
              English
            </label>
          </div>*/}
          <div
            className="row w-75 text-primary text-center"
            style={{ fontSize: "16px" }}
          >
            <div className="col text-info bg-dark">Mathematics</div>
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
                      this.props.checkedOption !== -1
                        ? idx === this.props.checkedOption
                        : idx ===
                          this.props.answerArray[this.props.currentIndex]
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
                className="btn btn-success
                "
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
