import React from 'react'
import './style.css';

function index(props) {

  return (
    <>
    { props.type == "TopNav"
      ?
        props.emailSection == 'Inbox'
        ?
            <li className='active'>
                <img src={props.icon} /><span className='text'>{props.emailSection}</span><span>{props.numberOfEmails}</span>
            </li>
        :
            <li>
            <img src={props.icon} /><span className='text'>{props.emailSection}</span><span>{props.numberOfEmails}</span>
            </li>
      :
        <li>
        <img src={props.icon} />
        </li>
   }
  </>
  )
}

export default index