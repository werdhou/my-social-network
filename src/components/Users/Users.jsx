import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div>
                <span>
                    <div className={classes.userPhoto}>
                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photo.small : userPhoto} alt={u.name} />
                        </NavLink>
                    </div>
                    <div>{u.follow
                        ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)}
                            onClick={() => {
                                props.unfollow(u.id)

                                // props.toggleIsFollowingProgress(true, u.id)
                                // usersAPI.getUnfollow(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.unfollow(u.id)
                                //         }
                                //         props.toggleIsFollowingProgress(false, u.id)
                                //     })

                            }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.follow(u.id)


                                // props.toggleIsFollowingProgress(true, u.id)
                                // usersAPI.getFollow(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.follow(u.id)
                                //         }
                                //         props.toggleIsFollowingProgress(false, u.id)

                                //     })

                            }}>Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        }</div>
}





export default Users