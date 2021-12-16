import React from "react";
// import classNames from "classnames";

import "components/Appointment/styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import Form from "./Form.js";
import Status from "./Status.js";
import Confirm from "./Confirm.js";
import useVisualMode from "hooks/useVisualMode.js";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM= "CONFIRM";
const DELETE = "DELETE";
const EDIT = "EDIT";
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

  function cancel(id){
    transition(DELETE)
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
  } 





  return (
    <article className="appointment">
      <Header {...props} />

      {mode === EMPTY && <Empty onAdd={() =>transition(CREATE)} />}
      {mode === CREATE && <Form interviewers = {props.interviewers}  onCancel={() =>back(CREATE)}  onSave = {save} />}
      {mode === SAVING && <Status message= 'Saving' />}
      {mode === DELETE && <Status message= 'Deleting' />}
      {mode === EDIT && <Form interviewers = {props.interviewers}  student={props.interview.student} interviewer={props.interview.interviewer}
      onCancel={() =>back(SHOW)}  onSave = {save} />}
      
   
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
         onDelete = {() =>transition(CONFIRM)}
         onEdit = {() =>transition(EDIT)}
        /> )}

        {mode === CONFIRM && <Confirm
         id = {props.id} 
         onConfirm = {cancel} 
         interview = {props.interview}
         onCancel={() =>back(SHOW)} />}
     

    </article>
  )
}
