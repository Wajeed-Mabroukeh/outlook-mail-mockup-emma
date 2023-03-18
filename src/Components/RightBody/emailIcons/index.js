import React from "react";
import style from "./index.module.css";
import { icons } from "./icons";

const EmailIcons = () => {
  return (
    <div className={style.emailIconsContainer}>
      {icons.map((item, index) => (
        <img key={index} src={item.icon} />
      ))}
    </div>
  );
};

export default EmailIcons;
