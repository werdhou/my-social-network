import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator } from '../../../redux/profile-reduer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
    return {
        posts: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (addNewPost) => {
            dispatch(addPostActionCreator(addNewPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer