import React from "react";
import style from './index.module.css'
const EmailTitle = ({title}) => {
  return(    
  <h3 className={style.emailTitle}> {title}</h3>
  );
  
};

export default EmailTitle;
