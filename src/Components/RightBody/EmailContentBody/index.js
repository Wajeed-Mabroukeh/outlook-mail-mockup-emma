import React from "react";
import style from "./index.module.css";
import HiImage from "../../../assets/HiImage.png";
import EmailText from "../emailText";
const EmailContentBody = () => {
  return (
    <div className={style.emailContentBody}>
      <img src={HiImage} />
      <EmailText text="Jeremy," />
      <div className={style.emailBodyText}>
        <EmailText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
      </div>
    </div>
  );
};

export default EmailContentBody;
