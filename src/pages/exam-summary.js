import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ExamSummary extends Component {
  render() {
    const ques = this.props.Questions;
    let num_of_ans, num_of_notVisit, num_of_review;
    num_of_ans = num_of_notVisit = num_of_review = 0;
    console.log(ques);

    ques.map((ques) => {
      if (ques.isAnswered) {
        num_of_ans++;
      }
      if (!ques.isVisited) {
        num_of_notVisit++;
      }
      if (ques.isReviewed) {
        num_of_review++;
      }
      return { num_of_ans, num_of_notVisit };
    });

    return (
      <Fragment>
        <nav
          className="navbar 
           py-0 px-3 text-white"
          style={{ background: "#29385c" }}
        >
          NIMCET - 2021
        </nav>
        <div
          className="d-flex flex-column align-items-center px-5 "
          style={{ height: "45vw" }}
        >
          <div className="h-25 d-flex align-items-end fs-3 py-3">
            Exam Summary
          </div>
          <table className="table h-25 table-bordered">
            <thead>
              <tr>
                <th scope="col">Section name</th>
                <th scope="col">Question no.</th>
                <th scope="col">Answered</th>
                <th scope="col">Not answered</th>
                <th scope="col">Marked for review</th>
                <th scope="col">Not visited</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Mathematics</th>
                <td>50</td>
                <td>{num_of_ans}</td>
                <td>10</td>
                <td>{num_of_review}</td>
                <td>{num_of_notVisit}</td>
              </tr>
              <tr>
                <th scope="row">Analitical Reasoning</th>
                <td>50</td>
                <td>20</td>
                <td>10</td>
                <td>1</td>
                <td>19</td>
              </tr>
              <tr>
                <th scope="row">Computer</th>
                <td>50</td>
                <td>20</td>
                <td>10</td>
                <td>1</td>
                <td>19</td>
              </tr>
              <tr>
                <th scope="row">English</th>
                <td>50</td>
                <td>20</td>
                <td>10</td>
                <td>1</td>
                <td>19</td>
              </tr>
            </tbody>
          </table>
          <div className="fs-4">Are you sure to submit your test?</div>
          <div className="m-2">
            <Link to="/score-screen">
              <button type="button" className="btn btn-primary me-2">
                Yes
              </button>
            </Link>
            <button type="button" className="btn btn-secondary ">
              No
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Questions: state.index.questions,
  };
};

export default connect(mapStateToProps)(ExamSummary);
