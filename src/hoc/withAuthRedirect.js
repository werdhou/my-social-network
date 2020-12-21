import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateToPropsForRedirect = (state) => {
    return {
        auth: state.auth.isAuth

    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) {
                return <Redirect to={'/login'} />
            }
            return <Component{...this.props} />
        }
    }


    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}