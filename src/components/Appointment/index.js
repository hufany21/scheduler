import React from "react";
// import classNames from "classnames";

import "components/Appointment/styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import Form from "./Form.js";
import useVisualMode from "hooks/useVisualMode.js";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );





  return (
    <article className="appointment">
      <Header {...props} />

      {mode === EMPTY && <Empty onAdd={() =>transition(CREATE)} />}
      {mode === CREATE && <Form interviewers = {[]}  onCancel={() =>back(CREATE)}/>}
    
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

    </article>
  )
}
