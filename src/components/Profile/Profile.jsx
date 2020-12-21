import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
      <div className={classes.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
      </div>
    )
}

export default Profile