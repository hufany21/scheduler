import React from "react";
import InterviewerListItem from "./InterviewerListItem";


import "components/InterviewerList.scss";

export default function InterviewerList(props) {
 
  const parsedInterviewers = props.interviewers.map(interviewers => <InterviewerListItem key={interviewers.id}
    name={interviewers.name} 
    avatar={interviewers.avatar} 
    id = {interviewers.id}
    selected={props.value === interviewers.id}
    setInterviewer={() => props.onChange(interviewers.id)}/>
    );

  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">
  { parsedInterviewers}
  </ul>
  </section>
  )
  };
