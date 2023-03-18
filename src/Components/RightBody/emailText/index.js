import React from 'react'
import style from './index.module.css'
const EmailText = ({text}) => {
  return (
    <p className={style.infoText}>{text}</p>
  )
}

export default EmailText