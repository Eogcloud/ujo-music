import React, { Component } from 'react';
import './Logo.css';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from "prop-types";

const Logo = (props) => {
   return (
      <div id="logoContainer" style={{ fontFamily: props.font, color: props.color, right: props.pos.x, top: props.pos.y }}>
         <CSSTransitionGroup
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}
            transitionName={'info'}>
            <h1>UJO.</h1>
         </CSSTransitionGroup>
         <div className="block">
         </div>
         <div id="music-container">
            <CSSTransitionGroup
               transitionAppear={true}
               transitionAppearTimeout={5000}
               transitionEnterTimeout={0}
               transitionLeaveTimeout={0}
               transitionName={'music'}
            >
               <h2>music</h2>
            </CSSTransitionGroup>
         </div>
      </div >
   )
}

Logo.propTypes = {
   "pos": PropTypes.object,
   "color": PropTypes.string,
   "font": PropTypes.string,
};

Logo.defaultProps = {
   "pos": { "x": "18%", "y": "8%" },
   "color": "black",
   "font": "'Questrial', sans-serif",
};

export default (Logo);
