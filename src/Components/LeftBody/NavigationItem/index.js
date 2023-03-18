import React from 'react'
import style from './style.module.css';

function index({icon,emailSection,numberOfEmails, type}) {

  return (
    <>
    { type == "TopNav"
      ?
        emailSection == 'Inbox'
        ?
            <li className={style.active}>
                <img src={icon} /><span className={style.text}>{emailSection}</span><span>{numberOfEmails}</span>
            </li>
        :
            <li>
            <img src={icon} /><span className={style.text}>{emailSection}</span><span>{numberOfEmails}</span>
            </li>
      :
        <li>
        <img src={icon} />
        </li>
   }
  </>
  )
}

export default index