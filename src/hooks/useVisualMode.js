import React, { useState } from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  function transition(SECOND, replace) { 
    if(replace){
      setHistory(prevArray => [...prevArray, SECOND])
    }else{  setHistory(prevArray => [...prevArray, mode])}
 
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