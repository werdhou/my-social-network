import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
   <div>

        <div className={classes.item}>
          <img src="https://sun9-46.userapi.com/impf/CWniZEf9BtqB2ld-xjwZOH1jIh96pLd2mULDpg/cc5UapoTewg.jpg?size=200x0&quality=90&crop=0,0,500,627&sign=7c88e211edba8a8e2f9967f9b42e0a75&ava=1" />
          {props.message}
         </div>
        <button>Like</button> <span>{props.likesCount}</span>
    </div>
    )
}

export default Post