import React from "react";
// import classNames from "classnames";

import "components/Appointment/styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";

export default function Appointment(props){







  return (
    <article className="appointment">
    <Header {...props}/>
 
      {props.interview ?
      
          <Show {...props.interview} />
      
        :
       
          <Empty />
     }
  
    </article>
  )
  }
