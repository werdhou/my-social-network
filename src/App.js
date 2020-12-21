import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import NewsContainer from './components/News/NewsContainer';
import Preloader from './components/Preloader/Preloader';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer'


class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs"
              render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?"
              render={() => <ProfileContainer />} />
            <Route path="/users"
              render={() => <UsersContainer />} />
            <Route path="/news" render={() => <NewsContainer />} />
            <Route path="/music" render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' component={Login} />

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})



export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App) 
