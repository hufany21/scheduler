export function getAppointmentsForDay(state, day) {

  let results=[]
  const filteredDays = state.days.filter(weekday => weekday.name === day);
  if(filteredDays.length === 0){
  return results
}
  const appointments = filteredDays[0].appointments
  for(let id of appointments){
    if(state.appointments[id]){
      results.push(state.appointments[id]) 
    } 
  }
  return results
}
export function getInterviwersForDay(state, day) {

  let results=[]
  const filteredDays = state.days.filter(weekday => weekday.name === day);
  if(filteredDays.length === 0){
  return results
}
  const interviewers = filteredDays[0].interviewers
  for(let id of interviewers){
    if(state.interviewers[id]){
      results.push(state.interviewers[id]) 
    } 
  }
  return results
}

export function getInterview(state, interview) {
  if(!interview){
    return null
  }
const id = interview.interviewer
const interviewObj= {interviewer: state.interviewers[id], student: interview.student,}
return interviewObj
}
