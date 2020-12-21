import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import News from './News'

const NewsContainer = (props) => {


    return (
        <News />
    )
}
let AuthRedirectComponent = withAuthRedirect(NewsContainer)

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect( )(WithURLDataContainerComponent)