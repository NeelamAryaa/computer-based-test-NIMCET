import React, { Component, Fragment } from "react";
import ExamSummary from "./exam-summary";
import Instructions from "./instructions";
import MainContent from "./main-content";
import QuestionsScreen from "./questions-screen";
import { Switch, Route } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" component={MainContent} exact />

          <Route path="/instruction" component={Instructions} />
          {/*<FullScreen className="bg-white" handle={true}>
            <Route path="/questionscreen" component={QuestionsScreen} />
    </FullScreen>*/}
          <Route path="/questionscreen" component={QuestionsScreen} />

          <Route path="/examsummary" component={ExamSummary} />
        </Switch>
      </Fragment>
    );
  }
}

export default HomePage;
