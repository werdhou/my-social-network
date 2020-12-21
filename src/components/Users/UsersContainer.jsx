import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsersTotalCount, unfollow, toggleIsFollowingProgress, getUsers } from '../../redux/users-reducer'
import Preloader from '../Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getAllUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowInProgress} from '../../redux/users-selectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            { this.props.isFetching ?
                <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followInProgress

//     }
// }


let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFollowingProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer)

