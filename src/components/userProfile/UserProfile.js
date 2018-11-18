import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from "prop-types";
import MusicPlayer from '../musicplayer/MusicPlayer';
import Wallpaper from './../wallpaper/Wallpaper';

const UserProfile = (props) => {
   
   return (
      <Wallpaper key={1}>
         <MusicPlayer/>
      </Wallpaper>
   )
}

export default (UserProfile);
