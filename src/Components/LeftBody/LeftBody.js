import React from 'react'
import './LeftBody.css';
import TopNavigation from './TopNavigation/index';
import BottomNavigation from './BottomNavigation/index';

function LeftBody() {
  return (
    <div className='content'>
      <TopNavigation />
      <BottomNavigation />
      </div>
  )
}

export default LeftBody