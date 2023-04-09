import React from 'react'
import style from './style.module.css';
import NavigationItem from '../NavigationItem/index';

import {Icons} from '../../data'

function index() {

  return (
    <ul className={style.BottomNav}>
           {Icons.map((icon, index) => {
            return (
              <NavigationItem key={index} {...icon} type="BottomNav" />
            );
        })}
    </ul>
  )
}

export default index