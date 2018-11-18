import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from "prop-types";
import './Wallpaper.css';

const Wallpaper = (props) => {
   let {
      transitionName,
      transitionAppear,
      transitionLeave,
      transitionAppearTimeout,
      transitionEnterTimeout,
      transitionLeaveTimeout,
      wallpaperUri,
      children
   } = props;
   
   return (
      <CSSTransitionGroup
         transitionAppear={transitionAppear}
         transitionLeave={true}
         transitionName={transitionName}
         transitionAppearTimeout={transitionAppearTimeout}
         transitionEnterTimeout={transitionEnterTimeout}
         transitionLeaveTimeout={transitionLeaveTimeout} >
         <div id="container" style={{ backgroundImage: 'url(' + wallpaperUri + ')' }} key={wallpaperUri}>
            {children}
         </div>
      </CSSTransitionGroup>
   );
}

Wallpaper.propTypes = {
   transitionName: PropTypes.string,
   transitionAppear: PropTypes.bool,
   transitionLeave: PropTypes.bool,
   transitionAppearTimeout: PropTypes.number,
   transitionEnterTimeout: PropTypes.number,
   transitionLeaveTimeout: PropTypes.number,
   wallpaperUri: PropTypes.string,
};

Wallpaper.defaultProps = {
   "transitionName": "example",
   "transitionAppear": true,
   "transitionLeave": true,
   "transitionAppearTimeout": 1500,
   "transitionEnterTimeout": 1500,
   "transitionLeaveTimeout": 1500,
   "wallpaperUri": require("./../../images/wallpaper.jpg"),
};

export default (Wallpaper);