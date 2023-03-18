import React from "react";
import EmailHeader from "../emailHeader";
import EmailContentBody from "../EmailContentBody";
import style from  './index.module.css' 
const EmailContent = () => {
  return (
    <div className={style.emailContentContainer}>
      <EmailHeader />
      <EmailContentBody />
    </div>
  );
};

export default EmailContent;
