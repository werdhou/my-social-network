import React from 'react'
import Preloader from '../../Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import userAvatar from '../../../assets/img/user.png'
import backgroundProfileImg from '../../../assets/img/background-profile.jpg'
import ProfileStatus from '../ProfileStatus/ProfileStatus'


const ProfileInfo = (props) => {
  if (!props.profile)
  return <Preloader />
  return (
    <div>
      <div className={classes.background}>
        <img src={backgroundProfileImg} alt='Background Image'/>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large ? props.profile.photos.large : userAvatar} alt={props.profile.fullName} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
    </div>
  )
}

export default ProfileInfo