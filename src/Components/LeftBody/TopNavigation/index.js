import React from 'react'
import './style.css';
import NavigationItem from '../NavigationItem/index'
import RightArrowImg  from '../../../assets/Icon-Arrow-up.png'
import BottomArrowImg  from '../../../assets/Icon-Arrow-down-1.png'
import InboxImg from '../../../assets/Icon-Inbox.png'
import JunkImg from '../../../assets/Icon-Arrow-down Copy.png'
import DraftImg from '../../../assets/Icon-Junk Copy.png'
import SentItemImg from '../../../assets/Icon-Sent.png'
import ScheduledImg from '../../../assets/Icon-Arrow-down Copy 5.png'
import DeletedItemImg from '../../../assets/Icon-Trash.png'
import ArchiveImg from '../../../assets/Icon-Arrow-down Copy 2.png'
import NotesImg from '../../../assets/Icon-Notes.png'

function index() {
  const Items = [ 
    ['Favorites',RightArrowImg,''],['Folders',BottomArrowImg,''],['Inbox',InboxImg,''],
    ['Junk Email',JunkImg,'9'],['Drafts',DraftImg,''],['Sent Items',SentItemImg,''],
    ['Scheduled',ScheduledImg,''],['Deleted Items',DeletedItemImg,'6'],['Archive',ArchiveImg,''],['Notes',NotesImg,'']
  ];

  return (
    <ul className='TopNav'>
           {Items.map((item, index) => {
            return (
              <NavigationItem key={index} icon={item[1]} emailSection={item[0]} numberOfEmails={item[2]}  type="TopNav"/>
            );
        })}
    </ul>
  )
}

export default index