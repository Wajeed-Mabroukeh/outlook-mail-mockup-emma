import React from "react";
import "./index.css";
import HiImage from "../../../assets/HiImage.png";
import EmailText from "../emailText";
const EmailContentBody = () => {
  return (
    <div className="emailContentBody">
      <img src={HiImage} />
      <EmailText />
      <div className="emailBodyText">
        <EmailText />
      </div>
    </div>
  );
};

export default EmailContentBody;
