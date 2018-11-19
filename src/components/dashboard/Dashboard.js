import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from "prop-types";
import Logo from './../logo/Logo';
import Wallpaper from './../wallpaper/Wallpaper';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Dashboard.css';
// import { Route, Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
// import { changeLoading } from '../../actions/actions';

const Dashboard = (props) => {   
   const {
      loading,
      slideDecks,
      currentSlide
   } = props;

   if (loading)
      return (
         <div>
            <div id="spinnerContainer">
               <CircularProgress size={45} thickness={4} className="spinner" color="" />
            </div>
         </div>    
      )    
   else
      return (
         <Wallpaper
            transitionAppear={slideDecks[currentSlide].transitionAppear}
            transitionLeave={true}
            transitionName={slideDecks[currentSlide].transitionName}
            transitionEnterTimeout={slideDecks[currentSlide].transitionEnterTimeout}
            transitionLeaveTimeout={slideDecks[currentSlide].transitionLeaveTimeout}
            wallpaperUri={slideDecks[currentSlide].uri}
            key={currentSlide}
         >
          <Logo pos={{ x: "20%", y: "10%" }} color={"black"} font={"'Questrial', sans-serif"} key={currentSlide} />
          <CSSTransitionGroup
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}
            transitionName={'info'}>
            <a id="mainPageButton" href={`/user/${slideDecks[0].transitionName}/${"chill"}/${0}`}>Start Listening</a>   
         </CSSTransitionGroup>
         </Wallpaper> 
      )  
}

Dashboard.propTypes = {
   slideDecks: PropTypes.array,
   loading: PropTypes.bool,
   currentSlide: PropTypes.number,
};
   
export default (Dashboard);