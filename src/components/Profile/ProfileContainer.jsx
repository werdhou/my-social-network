import React from "react";
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reduer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedId
      if (!userId) {
        this.props.history.push('./login')
      }
    }
    this.props.getUserProfile(userId)
      this.props.getStatus(userId)
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedId: state.auth.userId,
    isAuth: state.auth.isAuth

  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

