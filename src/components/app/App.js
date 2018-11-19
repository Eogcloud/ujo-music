import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route, Switch } from "react-router-dom";
import Dashboard from './../dashboard/Dashboard.container';
import MusicPlayer from './../musicplayer/MusicPlayer';
import UserProfile from '../userProfile/UserProfile.container';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class App extends Component {
  componentWillMount(){
    this.props.changeLoading(false);
    this.props.startSlideShow();
  }
  render(){
    if(isMobile){
      return (
        <Switch>
          <Route
            exact path="/"
            render={() => <UserProfile />}
          />
          <Route
            exact path="/user/:slideDeck/:playList/:songIndex"
            // component={UserProfile} 
            render={() => <UserProfile />}
          />
        </Switch>
      )
    }
    else{
        return (
          <Switch>
            <Route
              exact path="/"
              render={() => <Dashboard/>}
            />
            <Route
              exact path="/user/:slideDeck/:playList/:songIndex"
              // component={UserProfile} 
              render={() => <UserProfile />}
            />
          </Switch>
        )
    }
  }
}
export default (App);
