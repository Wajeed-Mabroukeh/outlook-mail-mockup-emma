import React from "react";
import EmailTitle from "../emailTitle";
import EmailText from "../emailText";
import "./index.css";
const EmailInformation = () => {
  return (
    <div className="emailInformationContainer">
      <div className="temp">{/*Wajeed Components*/}A</div>
      <div className="emailLeftHeader">
        {/*Wajeed Components*/}
        <p className="tempText">Lorem Ipsum &lt;no_reply@loremipsum.com&gt;</p>
        <div className="smallInformation">
          <EmailText />
          <div className="rowFlex">
            <p>To:</p>
            <EmailText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInformation;
