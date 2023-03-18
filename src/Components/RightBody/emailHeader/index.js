import React from "react";
import EmailIcons from "../emailIcons";
import EmailInformation from "./../emailInfo/index";
import style from './index.module.css'
const EmailHeader = () => {
  return (
    <div className={style.emailHeaderContainer}>
      <EmailInformation title="Lorem Ipsum
       <no_reply@loremipsum.com>" />
      <EmailIcons/>
    </div>
  );
};

export default EmailHeader;
