import React from 'react'
import classes from './MyPosts.module.css'
import MyPostsReduxForm from './MyPostsForm'
import Post from './Post/Post'


const MyPosts = (props) => {   
    
    let postsElements = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount} /> )

    let onAddPost = (formData) => {
    props.addPost(formData.addNewPost)
    }
    

    return (
        <div className={classes.postBlock}>
            <div>
                <h3> My Posts</h3>
            </div>
            < MyPostsReduxForm onSubmit={onAddPost} 
            />
            <div>
                New post
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts