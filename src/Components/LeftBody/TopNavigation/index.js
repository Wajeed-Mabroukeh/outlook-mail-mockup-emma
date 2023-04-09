import React from 'react'
import style from './style.module.css';
import NavigationItem from '../NavigationItem/index'

import {NavigationData} from '../../data'
function index() {


  return (
    <ul className={style.TopNav}>
           {NavigationData.map((item, index) => {
            return (
              <NavigationItem key={index} {...item}  type="TopNav"/>
            );
        })}
    </ul>
  )
}

export default index