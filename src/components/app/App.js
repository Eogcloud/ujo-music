import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route, Switch } from "react-router-dom";
import Dashboard from './../dashboard/Dashboard.container';
import MusicPlayer from './../musicplayer/MusicPlayer';
import UserProfile from '../userProfile/UserProfile';

class App extends Component {
   componentWillMount(){
      this.props.changeLoading(false);
      this.props.startSlideShow();
   }
   render(){
      return (
         <Switch>
            <Route
               exact path="/"
               render={() => <Dashboard/>}
            />
            <Route
               exact path="/user/:slideDeck/:song/"
               render={() => <UserProfile />}
            />
         </Switch>
      )
   }
}
export default (App);
