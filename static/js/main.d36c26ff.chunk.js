(this["webpackJsonpcbt-app"]=this["webpackJsonpcbt-app"]||[]).push([[0],{208:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(41),i=s.n(r),a=(s(91),s(60),s(2)),o=s(3),l=s(5),d=s(4),j=s(20),h=s(17),b=s(0),x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getCount=function(t){var s,c,n,r=e.props.Questions;return s=c=n=0,r[t].forEach((function(e){e.isAnswered&&s++,e.isReviewed&&n++,e.isVisited&&c++})),{num_of_ans:s,num_of_visit:c,num_of_review:n}},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"h-100",children:[Object(b.jsx)("nav",{className:"navbar \r py-0 px-3 text-white",style:{background:"#29385c"},children:"NIMCET - 2021"}),Object(b.jsxs)("div",{className:"d-flex flex-column align-items-center px-5 ",style:{height:"40vw"},children:[Object(b.jsx)("div",{className:"h-25 d-flex align-items-end fs-3 py-3",children:"Exam Summary"}),Object(b.jsxs)("table",{className:"table h-25 table-bordered",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Section name"}),Object(b.jsx)("th",{scope:"col",children:"Question no."}),Object(b.jsx)("th",{scope:"col",children:"Answered"}),Object(b.jsx)("th",{scope:"col",children:"Not answered"}),Object(b.jsx)("th",{scope:"col",children:"Marked for review"}),Object(b.jsx)("th",{scope:"col",children:"Not visited"})]})}),Object(b.jsx)("tbody",{children:Object.keys(this.props.Questions).map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{scope:"row",className:"text-capitalize",children:[t," ",function(){return e.getCount(t)}]}),Object(b.jsx)("td",{children:e.props.Questions[t].length}),Object(b.jsx)("td",{children:e.getCount(t).num_of_ans}),Object(b.jsx)("td",{children:e.props.Questions[t].length-e.getCount(t).num_of_ans}),Object(b.jsx)("td",{children:e.getCount(t).num_of_review}),Object(b.jsx)("td",{children:e.props.Questions[t].length-e.getCount(t).num_of_visit})]})}))})]}),Object(b.jsx)("div",{className:"fs-4",children:"Are you sure to submit your test?"}),Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsx)(h.b,{to:"/score-screen",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary me-2",children:"Yes"})}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary ",children:"No"})]})]})]})}}]),s}(c.Component),u=Object(j.b)((function(e){return{Questions:e.index.questions}}))(x),p=s(8),O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={checked:!1,checkBoxError:!1},e.onSubmitHandler=function(t){t.preventDefault();var s=e.state.checked;!1===s&&e.setState({checkBoxError:!0}),!0===s&&e.props.history.push("/questionscreen")},e.handleChange=function(t){e.setState({checked:t.target.checked}),t.target.checked&&e.setState({checkBoxError:!1})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar bg-info ",children:Object(b.jsx)("div",{className:"container-fluid text-light fw-bold",children:"INSTRUCTIONS"})}),Object(b.jsx)("div",{className:"ibpsInstructions py-3",children:Object(b.jsxs)("div",{className:"english_Instructions",children:[Object(b.jsx)("p",{className:" px-3",children:Object(b.jsx)("b",{children:"Please read the instructions carefully"})}),Object(b.jsx)("h3",{className:"text-start px-3 fs-5",children:"A) General Instructions"}),Object(b.jsxs)("ol",{className:"instructionOl text-start",children:[Object(b.jsxs)("li",{children:["The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default - you are not required to end or submit your exam."," "]}),Object(b.jsxs)("li",{children:["The question palette at the right of screen shows one of the following statuses of each of the questions numbered:",Object(b.jsxs)("div",{id:"QuestionIndicatorIns",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"missedIcon",children:"1"}),Object(b.jsx)("div",{children:"You have not visited the question yet."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"skippedIcon",children:"2"}),Object(b.jsx)("div",{children:"You have not answered the question."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"attemptedIcon",children:"3"}),Object(b.jsx)("div",{children:"You have answered the question."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"reviewIcon",children:"4"}),Object(b.jsx)("div",{children:"You have NOT answered the question but have marked the question for review."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"review_answeredIcon",children:"5"}),Object(b.jsx)("div",{children:"You have answered the question but marked it for review."})]})]})]}),Object(b.jsxs)("li",{className:"noListStyle",children:["The Marked for Review status simply acts as a reminder that you have set to look at the question again.",Object(b.jsx)("span",{className:"Red",children:"If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation."})]})]}),Object(b.jsx)("h3",{className:"text-start px-3 fs-5",children:"B) Navigating to a question:"}),Object(b.jsxs)("ol",{className:"instructionOl text-start",children:[Object(b.jsxs)("li",{children:["For multiple choice type question:",Object(b.jsxs)("ol",{children:[Object(b.jsxs)("li",{children:["Click on the question number on the question palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question."," "]}),Object(b.jsx)("li",{children:"Click on Save and Next to save answer to current question and to go to the next question in sequence."}),Object(b.jsx)("li",{children:"Click on Mark for Review and Next to save answer to current question, mark it for review, and to go to the next question in sequence."})]})]}),Object(b.jsxs)("li",{children:["You can view the entire paper by clicking on the"," ",Object(b.jsx)("b",{children:"Question Paper"})," button."]})]}),Object(b.jsx)("h3",{className:"text-start mx-3 fs-5",children:"C) Answering questions:"}),Object(b.jsxs)("ol",{className:"instructionOl text-start",children:[Object(b.jsxs)("li",{children:["For multiple choice type question:",Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"To select your answer, click on one of the option buttons"}),Object(b.jsx)("li",{children:"To change your answer, click the another desired option button"}),Object(b.jsxs)("li",{children:["To save your answer, you MUST click on"," ",Object(b.jsx)("b",{children:"Save & Next"})," "]}),Object(b.jsxs)("li",{children:["To deselect a chosen answer, click on the chosen option again or click on the ",Object(b.jsx)("b",{children:"Clear Response"})," button."]}),Object(b.jsxs)("li",{children:["To mark a question for review click on"," ",Object(b.jsx)("b",{children:"Mark for Review & Next"}),"."," ",Object(b.jsx)("span",{className:"Red",children:"If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation."})]})]})]}),Object(b.jsxs)("li",{children:["To change an answer to a question, first select the question and then click on the new answer option followed by a click on the"," ",Object(b.jsx)("b",{children:"Save & Next"})," button."]}),Object(b.jsx)("li",{children:"Questions that are saved or marked for review after answering will ONLY be considered for evaluation."})]}),Object(b.jsx)("h3",{className:"text-start mx-3 fs-5",children:"D) Navigating through sections:"}),Object(b.jsxs)("ol",{className:"instructionOl text-start mb-0",children:[Object(b.jsx)("li",{children:"Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted."}),Object(b.jsxs)("li",{children:["After clicking the ",Object(b.jsx)("b",{children:"Save & Next"})," button on the last question for a section, you will automatically be taken to the first question of the next section."," "]}),Object(b.jsxs)("li",{children:["You can move the mouse cursor over the section names to view the status of the questions for that section."," "]}),Object(b.jsxs)("li",{children:["You can shuffle between sections and questions anytime during the examination as per your convenience."," "]})]})]})}),Object(b.jsxs)("div",{class:" ms-3 form-check",children:[Object(b.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1",onChange:function(t){return e.handleChange(t)}}),Object(b.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"I have read and understood the instructions. All Computer Hardwares allotted to me are in proper working condition. I agree that I am not carrying any prohibited gadget like mobile phone etc. / any prohibited material with me into the exam hall. I agree that in case of not adhering to the instructions, I will be disqualified from taking the exam."})]}),this.state.checkBoxError?Object(b.jsxs)("div",{className:"text-danger ps-3",children:[" ","*You must agree before go ahead."]}):null,Object(b.jsx)("button",{type:"submit",onClick:this.onSubmitHandler,className:"btn btn-primary my-4 mx-3",children:"I am ready to begin"})]})}}]),s}(c.Component),m=Object(p.f)(O),f=function(){return Object(b.jsxs)("div",{className:"card w-75 mx-auto my-5 text-start shadow bg-white rounded",children:[Object(b.jsx)("h5",{className:"card-header text-white",style:{background:"#8a8b8c"},children:"Mock Test - 1"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Your score : 480"}),Object(b.jsxs)("div",{className:"card-text w-50 d-flex justify-content-between",children:[Object(b.jsx)("div",{children:"Questions : 120"}),Object(b.jsx)("div",{children:"Marks : 480"}),Object(b.jsx)("div",{children:"Time : 120 mintues"})]}),Object(b.jsx)(h.b,{to:"/instruction",children:Object(b.jsx)("div",{className:"btn btn-primary mt-3",children:"Start Test"})})]})]})},v=function(){return Object(b.jsx)("nav",{className:"navbar navbar-dark ",style:{backgroundColor:"#29385c"},children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"d-flex",children:Object(b.jsx)("a",{className:"navbar-brand",href:"/",children:"Computer Based Test"})})})})},g=function(){return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)("div",{className:"bg-light py-4 px-5",style:{minHeight:"90vh"},children:[Object(b.jsx)(f,{}),Object(b.jsx)(f,{}),Object(b.jsx)(f,{})]})]})},y=s(9),N=s(6),w="UPDATE_CURRENT_INDEX",k="ANSWER",S="NEXT_QUESTION",C="UNCHECKED",q="UPDATE_QUES_ARRAY",I="CHANGE_QUESTION",A="UPDATE_SECTION",R="IS_VISITED",T=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).fetchQuestion=function(t){e.props.UpdateCurrentSection(t),e.props.UpdateCurrentIndex(0),e.props.updateCheckedOption(-1),e.props.IsVisited()},e.onChangeOption=function(t){e.props.updateCheckedOption(t)},e.clearResponse=function(){e.props.updateCheckedOption(-1),e.props.clearResponse()},e.onClickSaveAndNext=function(){if(e.props.SetAnswer(e.props.checkedOption),e.props.NextQuestion(),e.props.questions[e.props.currentSection].length-1>e.props.currentIndex)e.props.UpdateCurrentIndex(e.props.currentIndex+1),e.props.questions[e.props.currentSection][e.props.currentIndex+1].isVisited=!0;else{e.props.UpdateCurrentIndex(0);var t=Object.keys(e.props.questions).indexOf(e.props.currentSection)+1;t===Object.keys(e.props.questions).length?e.props.UpdateCurrentSection(Object.keys(e.props.questions)[0]):(e.props.UpdateCurrentSection(Object.keys(e.props.questions)[t]),e.props.IsVisited())}e.props.onClickSaveAndNext(),e.props.updateCheckedOption(-1),console.log(e.props.currentSection)},e.getQuestion=function(){if(e.props.questions[e.props.currentSection].length-1>=e.props.currentIndex)return e.props.questions[e.props.currentSection][e.props.currentIndex].question;var t=Object.keys(e.props.questions).indexOf(e.props.currentSection)+1;if(t===Object.keys(e.props.questions).length){e.props.UpdateCurrentSection(Object.keys(e.props.questions)[0]),e.props.UpdateCurrentIndex(0)}else e.props.UpdateCurrentSection(Object.keys(e.props.questions)[t]),e.props.UpdateCurrentIndex(0)},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"col-9 px-0",children:[Object(b.jsx)("div",{className:" mx-0",children:Object(b.jsx)("div",{className:"row fs-5 ms-0 text-primary text-center",style:{width:"73vw"},children:Object.keys(this.props.questions).map((function(t){return Object(b.jsx)("div",{className:"btn col rounded-pill text-capitalize cursor-pointer fs-5 ".concat(t===e.props.currentSection?"bg-primary text-white":"text-primary "),onClick:function(){return e.fetchQuestion(t)},children:t})}))})}),Object(b.jsx)("hr",{className:"m-0"}),Object(b.jsxs)("div",{class:"row px-3",children:[Object(b.jsx)("div",{class:"col text-start text-danger",children:"Question type : MCQ"}),Object(b.jsx)("div",{class:"col text-end",children:"Time left : 01:23:44"})]}),Object(b.jsx)("hr",{className:"m-0"}),Object(b.jsx)("div",{className:"px-5 fs-4 rounded-pill text-white text-capitalize",style:{backgroundColor:"#29385c",width:"fit-content"},children:this.props.currentSection}),Object(b.jsx)("hr",{className:"m-0"}),Object(b.jsxs)("div",{className:"p-2",style:{height:"75vh"},children:[this.props.currentSection&&this.getQuestion()?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h5",{children:["Question - ",this.props.currentIndex+1]}),Object(b.jsx)("div",{className:"",children:this.getQuestion()})]}):null,Object(b.jsx)("div",{children:this.props.questions[this.props.currentSection].length-1>=this.props.currentIndex?this.props.questions[this.props.currentSection][this.props.currentIndex].option.map((function(t,s){return Object(b.jsxs)("div",{class:"form-check",children:[Object(b.jsx)("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onChange:function(){return e.onChangeOption(s)},checked:-1!==e.props.checkedOption?s===e.props.checkedOption:s===e.props.answerArray[Object.keys(e.props.questions).indexOf(e.props.currentSection)][e.props.currentIndex]}),Object(b.jsx)("label",{class:"form-check-label",for:"flexRadioDefault1",children:t})]})})):null})]}),Object(b.jsxs)("div",{className:"w-100 d-inline-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"flex px-3 ",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary me-4 ",onClick:this.props.MarkForReview,children:"Mark for Review"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary ",onClick:this.clearResponse,children:"Clear Response"})]}),Object(b.jsx)("div",{className:"flex px-3",children:Object(b.jsx)("button",{type:"button",className:"btn btn-success\r ",onClick:this.onClickSaveAndNext,children:"Save and Next"})})]})]})}}]),s}(c.Component),Q=Object(j.b)((function(e){return{currentSection:e.index.currentSection,currentIndex:e.index.currentIndex}}),(function(e){return{UpdateCurrentSection:function(t){return e(function(e){return function(t){t({type:A,payload:e})}}(t))},UpdateCurrentIndex:function(t){return e(function(e){return function(t){t({type:w,payload:e})}}(t))}}}))(T),_=function(e){return Object(b.jsxs)("div",{className:"col-3 p-0 border-start",children:[Object(b.jsxs)("div",{className:"row mx-0 text-primary",children:[Object(b.jsx)("div",{className:"col ps-3",children:Object(b.jsx)("u",{children:"Question paper"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("u",{children:"Instruction"})})]}),Object(b.jsx)("hr",{className:"m-0"}),Object(b.jsxs)("div",{className:"row py-2 mx-0",children:[Object(b.jsx)("img",{src:"https://picsum.photos/id/20/100/100",className:"col",alt:"img",height:"100"}),Object(b.jsxs)("div",{className:"col border-start",children:[Object(b.jsx)("div",{className:"row px-2",children:"Name : Neelam"}),Object(b.jsx)("div",{className:"row px-2",children:"Roll no.: 20218833"})]})]}),Object(b.jsx)("hr",{className:"m-0"}),Object(b.jsxs)("div",{className:"container",style:{fontSize:"13px"},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("i",{className:"fa fa-circle fs-4",style:{color:"green"}})}),Object(b.jsx)("div",{className:"col",children:"Answered"})]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("i",{className:"fa fa-circle fs-4",style:{color:"red"}})}),Object(b.jsx)("div",{className:"col",children:"Not answered"})]})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("i",{className:"fa fa-circle fs-4",style:{color:"#ffc107"}})}),Object(b.jsx)("div",{className:"col",children:"Marked for review"})]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("i",{className:"fa fa-circle fs-4",style:{color:"gray"}})}),Object(b.jsx)("div",{className:"col",children:"Not visit"})]})})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("i",{className:"fa fa-circle fs-4",style:{color:"#0dcaf0"}})}),Object(b.jsx)("div",{className:"col ps-0",children:"Answered & marked for review"})]})})})]}),Object(b.jsx)("hr",{className:"m-0"}),Object(b.jsx)("div",{className:"px-3 fs-5 text-white text-capitalize",style:{backgroundColor:"#29385c"},children:e.currentSection}),Object(b.jsx)("hr",{className:"m-0"}),Object(b.jsx)("div",{className:"container border",style:{height:"255px",background:"#63e7f23d"},children:Object(b.jsx)("div",{className:"row",children:e.questions[e.currentSection].map((function(t,s){return Object(b.jsx)("div",{role:"button",className:"col-2 border bg-secondary  text-white px-0 py-1 m-1 d-flex justify-content-center align-items-center \n                    ".concat(e.questions[e.currentSection][s].isAnswered&&e.questions[e.currentSection][s].isReviewed?"bg-info":e.questions[e.currentSection][s].isAnswered?"bg-success":e.questions[e.currentSection][s].isReviewed?"bg-warning":e.questions[e.currentSection][s].isVisited?"bg-danger":null,"\n\n                      "),onClick:function(){return e.onChangeQues(s)},children:s+1},s)}))})}),Object(b.jsx)("div",{className:"container-fluid text-center",children:Object(b.jsx)(h.b,{to:"examsummary",children:Object(b.jsx)("button",{type:"button",className:"btn btn-success my-3",children:"Submit"})})})]})},E=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={checkedOption:-1},e.updateCheckedOption=function(t){e.setState({checkedOption:t})},e.onClickSaveAndNext=function(){e.setState({checkedOption:-1}),e.props.NextQuestion()},e.onChangeQues=function(t){e.setState({checkedOption:-1}),e.props.ChangeQuestion(t)},e.clearResponse=function(){e.props.Unchecked()},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(b.jsx)(c.Fragment,{children:Object(b.jsxs)("div",{className:"row  mx-0",children:[Object(b.jsx)(Q,{questions:this.props.questions,answerArray:this.props.answerArray,currentIndex:this.props.currentIndex,MarkForReview:this.props.MarkForReview,clearResponse:this.clearResponse,onClickSaveAndNext:this.onClickSaveAndNext,SetAnswer:this.props.SetAnswer,updateCheckedOption:this.updateCheckedOption,checkedOption:this.state.checkedOption,IsVisited:this.props.IsVisited,NextQuestion:this.props.NextQuestion}),Object(b.jsx)(_,{questions:this.props.questions,currentSection:this.props.currentSection,onChangeQues:this.onChangeQues,updateCheckedOption:this.updateCheckedOption})]})})}}]),s}(c.Component),U=Object(j.b)((function(e){return{currentIndex:e.index.currentIndex,questions:e.index.questions,answerArray:e.index.answerArray,currentSection:e.index.currentSection}}),(function(e){return{NextQuestion:function(){return e((function(e,t){var s=t().index,c=s.questions,n=s.currentIndex,r=s.currentSection,i=s.answerArray,a=Object(N.a)({},c),o=Object(y.a)(i);console.log(o),-1!==o[Object.keys(c).indexOf(r)][n]&&(a[r][n].isAnswered=!0,e({type:S,payload:a}))}))},SetAnswer:function(t){return e(function(e){return function(t){t({type:k,payload:e})}}(t))},Unchecked:function(){return e((function(e,t){var s=t().index,c=s.questions,n=s.currentIndex,r=s.answerArray,i=s.currentSection,a=Object(N.a)({},c),o=Object(y.a)(r);a[i][n].isAnswered=!1,o[Object.keys(c).indexOf(i)][n]=-1,e({type:C,payload:{ques:a,ans:o}})}))},MarkForReview:function(){return e((function(e,t){var s=t().index,c=s.questions,n=s.currentIndex,r=s.currentSection,i=Object(N.a)({},c);i[r][n].isReviewed=!0,e({type:q,payload:i})}))},ChangeQuestion:function(t){return e(function(e){return function(t,s){var c=s().index,n=c.questions,r=c.currentSection,i=Object(N.a)({},n);i[r][e].isVisited=!0,t({type:q,payload:i}),t({type:I,payload:e})}}(t))},IsVisited:function(){return e((function(e,t){var s=t().index,c=s.questions,n=s.currentSection,r=s.currentIndex,i=Object(N.a)({},c);i[n][r].isVisited=!0,e({type:R,payload:i})}))}}}))(E),M=s(86),D={labels:["Wrong","Correct","Unattempt"],datasets:[{label:"# of Votes",data:[40,40,40],backgroundColor:["rgba(247, 0, 0, 0.6)","rgba(26, 165, 46, 0.6)","rgba(247, 229, 0, 0.6)"],borderColor:["rgba(247, 0, 0, 1)","rgba(26, 165, 46, 1)","rgba(247, 229, 0, 1)"],borderWidth:1.5,cutout:100}]},F=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("nav",{className:"navbar navbar-dark flex-nowrap",style:{backgroundColor:"#29385c"},children:[Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"d-flex",children:Object(b.jsx)("a",{className:"navbar-brand",href:"/",children:"Your Score"})})}),Object(b.jsx)("div",{className:"container-fluid justify-content-end",children:Object(b.jsxs)("button",{type:"button",class:"btn btn-info text-white ",children:[Object(b.jsx)("i",{className:"fa fa-file pe-2"}),"Answer Key"]})})]}),Object(b.jsxs)("div",{className:"d-flex flex-column w-50 text-center border mt-4 mx-auto shadow ",children:[Object(b.jsx)("h2",{className:"border-bottom py-2",children:"Overview"}),Object(b.jsx)("div",{className:"pb-4",children:Object(b.jsx)(M.a,{data:D,height:300,width:300,options:{maintainAspectRatio:!1}})})]}),Object(b.jsxs)("div",{className:"row m-5",children:[Object(b.jsx)("div",{className:"col mb-4",children:Object(b.jsx)("div",{className:"border-3 border-start border-primary shadow h-100 py-2",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{className:"col mr-2",children:[Object(b.jsx)("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1 ",children:"Score"}),Object(b.jsxs)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:[Object(b.jsx)("span",{children:"3.00"}),"/",Object(b.jsx)("span",{className:"ng-binding",children:"480"})]})]}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"fa fa-clipboard text-gray-300",style:{color:"#cfd1d3",fontSize:"24px"}})})]})})})}),Object(b.jsx)("div",{className:"col mb-4",children:Object(b.jsx)("div",{className:"border-3 border-start border-info shadow h-100 py-2",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{className:"col mr-2",children:[Object(b.jsx)("div",{className:"text-xs font-weight-bold text-info text-uppercase mb-1 ",children:"Accuracy"}),Object(b.jsx)("div",{className:"row no-gutters align-items-center",children:Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsxs)("div",{className:"h5 mb-0 mr-3 font-weight-bold text-gray-800",children:[Object(b.jsx)("span",{children:"50.00"}),"%"]})})})]}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"fa fa-bullseye text-gray-300",style:{color:"#cfd1d3",fontSize:"24px"}})})]})})})}),Object(b.jsx)("div",{className:"col mb-4",children:Object(b.jsx)("div",{className:"border-3 border-start border-success shadow h-100 py-2",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{className:"col mr-2",children:[Object(b.jsx)("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-1 ",children:"Rank (AIR)"}),Object(b.jsxs)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:[Object(b.jsx)("span",{children:"841"}),Object(b.jsx)("span",{children:"/980"})]})]}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"fa fa-list-ol text-gray-300",style:{color:"#cfd1d3",fontSize:"24px"}})})]})})})}),Object(b.jsx)("div",{className:"col mb-4",children:Object(b.jsx)("div",{className:"border-3 border-start border-danger shadow h-100 py-2",children:Object(b.jsx)("div",{className:"card-body ",children:Object(b.jsxs)("div",{className:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{className:"col mr-2",children:[Object(b.jsx)("div",{className:"text-xs font-weight-bold text-danger text-uppercase mb-1 ",children:"Percentage"}),Object(b.jsxs)("div",{className:"h5 mb-0 font-weight-bold text-gray-800",children:[Object(b.jsx)("span",{children:"0.63"}),"%"]})]}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("i",{className:"fa fa-percent",style:{color:"#cfd1d3",fontSize:"24px"}})})]})})})})]}),Object(b.jsxs)("div",{className:"card m-5 shadow",children:[Object(b.jsx)("div",{className:"card-header",children:"Attempted Efficiency"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col mb-4 px-4",children:Object(b.jsx)("div",{class:"card h-100 py-2 border-0",children:Object(b.jsx)("div",{class:"card-body",children:Object(b.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{class:"col mr-2",children:[Object(b.jsx)("div",{class:"text-info font-weight-light text-uppercase mb-1",children:"Attempted"}),Object(b.jsxs)("div",{class:"h5 mb-0 font-weight-lightbold text-gray-700",children:[Object(b.jsx)("span",{children:"2"})," ",Object(b.jsx)("span",{children:"of"})," ",Object(b.jsx)("span",{children:"120"})]})]}),Object(b.jsx)("div",{class:"col-auto",children:Object(b.jsx)("div",{class:"text-info",children:Object(b.jsxs)("span",{class:"fa-stack fa-2x",children:[Object(b.jsx)("i",{class:"fa fa-circle fa-stack-2x",style:{opacity:"0.2"}}),Object(b.jsx)("i",{class:"fa fa-pencil fa-stack-1x "})]})})})]})})})}),Object(b.jsx)("div",{class:"col mb-4 px-4",children:Object(b.jsx)("div",{class:"card h-100 py-2 border-0",children:Object(b.jsx)("div",{class:"card-body",children:Object(b.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{class:"col mr-2",children:[Object(b.jsx)("div",{class:"text-success font-weight-light text-uppercase mb-1 ",children:"Correct"}),Object(b.jsxs)("div",{class:"h5 mb-0 font-weight-lightbold text-gray-700",children:[Object(b.jsx)("span",{children:"1"})," ",Object(b.jsx)("span",{children:"of"})," ",Object(b.jsx)("span",{children:"120"})]})]}),Object(b.jsx)("div",{class:"col-auto",children:Object(b.jsx)("div",{class:"text-success",children:Object(b.jsxs)("span",{class:"fa-stack fa-2x",children:[Object(b.jsx)("i",{class:"fa fa-circle fa-stack-2x",style:{opacity:"0.2"}}),Object(b.jsx)("i",{class:"fa fa-check fa-stack-1x "})]})})})]})})})}),Object(b.jsx)("div",{class:"col mb-4 px-4",children:Object(b.jsx)("div",{class:"card h-100 py-2 border-0",children:Object(b.jsx)("div",{class:"card-body",children:Object(b.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{class:"col mr-2",children:[Object(b.jsx)("div",{class:"text-danger font-weight-light text-uppercase mb-1 ",children:"Incorrect"}),Object(b.jsxs)("div",{class:"h5 mb-0 font-weight-lightbold text-gray-700",children:[Object(b.jsx)("span",{children:"1"})," ",Object(b.jsx)("span",{children:"of"})," ",Object(b.jsx)("span",{children:"120"})]})]}),Object(b.jsx)("div",{class:"col-auto",children:Object(b.jsx)("div",{class:"text-danger",children:Object(b.jsxs)("span",{class:"fa-stack fa-2x",children:[Object(b.jsx)("i",{class:"fa fa-circle fa-stack-2x",style:{opacity:"0.2"}}),Object(b.jsx)("i",{class:"fa fa-times fa-stack-1x"})]})})})]})})})}),Object(b.jsx)("div",{class:"col mb-4 px-4",children:Object(b.jsx)("div",{class:"card h-100 py-2 border-0",children:Object(b.jsx)("div",{class:"card-body",children:Object(b.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(b.jsxs)("div",{class:"col mr-2",children:[Object(b.jsx)("div",{class:"text-warning font-weight-light text-uppercase mb-1 ",children:"Time/Ques"}),Object(b.jsx)("div",{class:"h5 mb-0 font-weight-lightbold text-gray-700",children:Object(b.jsx)("span",{children:"0 Min 18 Sec"})})]}),Object(b.jsx)("div",{class:"col-auto",children:Object(b.jsx)("div",{class:"text-warning",children:Object(b.jsxs)("span",{class:"fa-stack fa-2x",children:[Object(b.jsx)("i",{class:"fa fa-circle fa-stack-2x",style:{opacity:"0.2"}}),Object(b.jsx)("i",{class:"fa fa-hourglass-half fa-stack-1x"})]})})})]})})})})]}),Object(b.jsx)("div",{className:"p-3",children:"Your detailed section performance is shown below"}),Object(b.jsx)("div",{class:"col-xs-12",children:Object(b.jsxs)("table",{class:"table table-bordered table-grid section-table customScrollBar",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Section"}),Object(b.jsx)("th",{scope:"col",children:"Attempted"}),Object(b.jsx)("th",{scope:"col",children:"Correct"}),Object(b.jsx)("th",{scope:"col",children:"Accuracy"}),Object(b.jsx)("th",{scope:"col",children:"Time"})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:"Mathematics"}),Object(b.jsxs)("td",{children:[Object(b.jsx)("div",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"2"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{children:"50"})]})]}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"1"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{children:"50"})]})}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{"ng-bind":"nu_ex(((x[5]*100)/x[4])).toFixed(2)+'%'",class:"ng-binding",children:"50.00%"})}),Object(b.jsx)("td",{"ng-bind":"convertHMS(x[8])",class:"ng-binding",children:"00:37"})]}),Object(b.jsxs)("tr",{"ng-repeat":"x in report_data.scorecard",class:"ng-scope",children:[Object(b.jsx)("th",{scope:"row","ng-bind":"x[0]",class:"ng-binding",children:"Analytical Ability and Logical Reasoning"}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"0"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{"ng-bind":"x[3]",class:"ng-binding",children:"40"})]})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("div",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"0"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{children:"40"})]})]}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{children:"0.00%"})}),Object(b.jsx)("td",{children:"00:00"})]}),Object(b.jsxs)("tr",{children:[" ",Object(b.jsx)("th",{scope:"row",children:"Computer Awareness"}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"0"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{children:"10"})]})}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{"ng-bind":"x[5]",class:"ng-binding",children:"0"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{children:"10"})]})}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{children:"0.00%"})}),Object(b.jsx)("td",{children:"00:00"})]}),Object(b.jsxs)("tr",{children:[" ",Object(b.jsx)("th",{scope:"row",children:" General English"}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"0"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{children:"20"})]})}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:" 0"}),Object(b.jsx)("span",{children:" / "}),Object(b.jsx)("span",{children:" 20"})]})}),Object(b.jsx)("td",{children:Object(b.jsx)("div",{children:"0.00%"})}),Object(b.jsx)("td",{children:" 00:00"})]})]})]})})]})]})]})};var V=function(){return Object(b.jsx)(h.a,{basename:"/computer-based-test-NIMCET",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{path:"/",component:g,exact:!0}),Object(b.jsx)(p.a,{path:"/instruction",component:m}),Object(b.jsx)(p.a,{path:"/questionscreen",component:U}),Object(b.jsx)(p.a,{path:"/examsummary",component:u}),Object(b.jsx)(p.a,{path:"/score-screen",component:F})]})})})},Y=s(28),B=s(85),H=Object(N.a)({},{mathematics:[{section:"mathematics",question:"How many words starting with letter D can be formed by taking all letters from word DELHI, so that the letters are not repeated?",option:[24,46,28,30]},{section:"mathematics",question:"How many words starting with letter D ?",option:[4,16,28,30]}],"analitical reasoning":[{section:"analitical_reasoning",question:"Sum of ages of Anu and Bhanu is 10 years more than sum of ages of Bhanu, Chanu and Dhanu. Average age of Chanu and Dhanu is 19 years. Find the average age of Anu and Dhanu if Dhanu is 10 years elder than Chanu.",option:[25,36,31,30]},{section:"analitical_reasoning",question:"Sum of ages of Anu and Bhanu is 10 years more than sum of ages of Bhanu, Chanu and Dhanu.",option:[5,60,13,30]}],computer:[{section:"computer",question:"The memory unit which directly communicates with the CPU is known as",option:["primary memory","secondary memory","cache memory","shared memory"]},{section:"computer",question:"The first instruction of bootstrap loader program of an operating system is stored in",option:["bios","ram","cache memory","rom"]}],english:[{idx:0,section:"english",question:"Choose the correct expression of approval:",option:["none","damn","rotten","hell"]},{section:"english",question:"Choose the incorrect expression of approval:",option:["super","damn","rotten","all of these"]},{section:"english",question:"Choose the correct expression of not approval:",option:["super","damn","rotten","hell"]}]});Object.keys(H).forEach((function(e){H[e].forEach((function(e){e.isVisited=!1,e.isReviewed=!1,e.isAnswered=!1}))}));var P={questions:H,currentIndex:0,answerArray:[],currentSection:Object.keys(H)[0]};for(var z in H[P.currentSection][P.currentIndex].isVisited=!0,H)P.answerArray.push(new Array(H[z].length).fill(-1));var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(N.a)(Object(N.a)({},e),{},{questions:t.payload});case w:return Object(N.a)(Object(N.a)({},e),{},{currentIndex:t.payload});case k:var s=Object(y.a)(e.answerArray);return s[Object.keys(e.questions).indexOf(e.currentSection)][e.currentIndex]=t.payload,Object(N.a)(Object(N.a)({},e),{},{answerArray:s});case C:return Object(N.a)(Object(N.a)({},e),{},{questions:t.payload.ques,answerArray:t.payload.ans});case q:return Object(N.a)(Object(N.a)({},e),{},{questions:t.payload});case I:return Object(N.a)(Object(N.a)({},e),{},{currentIndex:t.payload});case A:return Object(N.a)(Object(N.a)({},e),{},{currentSection:t.payload});case R:return Object(N.a)(Object(N.a)({},e),{},{questions:t.payload});default:return e}},W=Object(Y.b)({index:L}),X="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,G=Object(Y.d)(W,X(Object(Y.a)(B.a))),J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,209)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),r(e),i(e)}))};s(206),s(207);i.a.render(Object(b.jsx)(j.a,{store:G,children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(V,{})})}),document.getElementById("root")),J()},60:function(e,t,s){},91:function(e,t,s){}},[[208,1,2]]]);
//# sourceMappingURL=main.d36c26ff.chunk.js.map