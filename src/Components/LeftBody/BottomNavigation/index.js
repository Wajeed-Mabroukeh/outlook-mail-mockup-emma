import React from 'react'
import './style.css';
import NavigationItem from '../NavigationItem/index';
import IconEmail  from '../../../assets/Icon-Email.png';
import IconCalendar  from '../../../assets/Icon-Calendar.png';
import IconMore from '../../../assets/More.png';

function index() {
    const Items = [IconEmail , IconCalendar, IconMore];

  return (
    <ul className='BottomNav'>
           {Items.map((item, index) => {
            return (
              <NavigationItem icon={item} type="BottomNav" />
            );
        })}
    </ul>
  )
}

export default index