import  { useState } from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);



  function transition(SECOND,  replace=false) { 
    if(replace){
      const newHistory = [...history];
      newHistory.pop();
      setHistory(()=> [...newHistory, SECOND])
    }else{setHistory(prevArray => [...prevArray, SECOND])}
   setMode(SECOND)
  }
  

  function back() { 
    let his = [...history]
    if (history.length <= 1) {
      setMode(initial);
    } else {
      setMode(history[history.length - 2]);
      his.pop()
      setHistory(his);
    }
  }
  return { mode, transition, back };
};