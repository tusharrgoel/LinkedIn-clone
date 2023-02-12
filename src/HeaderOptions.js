import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';

function HeaderOptions({avatar,Icon,title,onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headeroption'>
       {Icon && <Icon  className = "HeaderOption_icon"/>}
       {avatar && (
       <Avatar className='HeaderOption_icon' src ={user?.photoUrl} />
       
       )}
       <h3 className='HeaderOption_title'> {title}</h3>
    </div>
  )
}

export default HeaderOptions
