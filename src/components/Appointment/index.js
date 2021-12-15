import React from "react";
// import classNames from "classnames";

import "components/Appointment/styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import Form from "./Form.js";
import Status from "./Status.js";
import useVisualMode from "hooks/useVisualMode.js";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY,
   
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
  
  }


  console.log('props.interviewers',props.interviewers)

  return (
    <article className="appointment">
      <Header {...props} />

      {mode === EMPTY && <Empty onAdd={() =>transition(CREATE)} />}
      {mode === CREATE && <Form interviewers = {props.interviewers}  onCancel={() =>back(CREATE)}  onSave = {save} />}
      {mode === SAVING && <Status message= 'Saving' />}
   
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

    </article>
  )
}
