import React from "react";
import EmailText from "../emailText";
import style from "./index.module.css";
const EmailInformation = ({title}) => {
  return (
    <div className={style.emailInformationContainer}>
      <div className={style.temp}>{/*Wajeed Components*/}A</div>
      <div className={style.emailLeftHeader}>
        {/*Wajeed Components*/}
        <p className={style.tempText}>{title}</p>
        <div className={style.smallInformation}>
          <EmailText text="Thu 6/18/2020 4:49 PM" />
          <div className={style.rowFlex}>
            <p>To:</p>
            <EmailText text="You:" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInformation;
