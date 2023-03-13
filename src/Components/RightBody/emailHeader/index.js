import React from "react";
import EmailIcons from "../emailIcons";
import EmailTitle from "../emailTitle";
import EmailInformation from "./../emailInfo/index";
import './index.css'
const EmailHeader = () => {
  return (
    <div className="emailHeaderContainer">
      <EmailInformation />
      <EmailIcons/>
      
    </div>
  );
};

export default EmailHeader;
