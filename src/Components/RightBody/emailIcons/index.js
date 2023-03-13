import React from 'react'
import './index.css'
import icon1 from '../../../assets/Icon/UI/restart.png'
import Restart from '../../../assets/Icon/UI/restart Copy.png'
import IconMore from '../../../assets/Icon-More.png'
import CombinedShape from '../../../assets/Combined Shape.png'
const EmailIcons = () => {
  return (
    <div className='emailIconsContainer'>
      <img src={icon1}/>
      <img src={Restart}/>
      <img src={CombinedShape}/>
      <img src={IconMore}/>
    </div>
  )
}

export default EmailIcons