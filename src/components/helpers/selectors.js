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
