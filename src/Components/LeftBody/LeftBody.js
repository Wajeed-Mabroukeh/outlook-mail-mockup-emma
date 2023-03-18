import React from 'react'
import style from './style.module.css';
import TopNavigation from './TopNavigation/index';
import BottomNavigation from './BottomNavigation/index';

function LeftBody() {
  return (
    <div className={style.content}>
      <TopNavigation />
      <BottomNavigation />
      </div>
  )
}

export default LeftBody