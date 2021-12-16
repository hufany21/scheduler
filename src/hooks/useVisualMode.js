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
    if(mode === his[his.length-1] && mode !== initial){
      his.pop()
    }
    setMode(his[his.length-1])
   }

  return { mode, transition, back };
};