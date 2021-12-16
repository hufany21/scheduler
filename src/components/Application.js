import React from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getInterviewersForDay } from "./helpers/selectors";
import { getInterview } from "./helpers/selectors";
import { getAppointmentsForDay } from "./helpers/selectors";
import useApplicationData from "hooks/useApplicationData";




       

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  console.log(state)
  

  const getAppointments = getAppointmentsForDay(state, state.day);
  const  getInterviewers =  getInterviewersForDay(state, state.day);

  
 
  


  const schedule = getAppointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);
  
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={getInterviewers}
        bookInterview= {bookInterview}
        cancelInterview ={cancelInterview}
       
      />
    );
  });

  // const setDay = day => setState({ ...state, day });
 


  //   useEffect(() => {
  //   Promise.all([
  //     axios.get('http://localhost:8001/api/days'),
  //     axios.get('http://localhost:8001/api/appointments'),
  //     axios.get('http://localhost:8001/api/interviewers')
  //   ]).then((all) => {
  //     setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      
  //   });
  // }, []);
  
  

  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList days={state.days} value = {state.day} onChange={setDay} />

</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
     {schedule}
     <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
