import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from "prop-types";
import Logo from './../logo/Logo';
import Wallpaper from './../wallpaper/Wallpaper';
import CircularProgress from '@material-ui/core/CircularProgress';
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
            transitionAppear={slideDecks[currentSlide].transitionAppearTimeout}
            transitionEnterTimeout={slideDecks[currentSlide].transitionEnterTimeout}
            transitionLeaveTimeout={slideDecks[currentSlide].transitionLeaveTimeout}
            wallpaperUri={slideDecks[currentSlide].uri}
            key={currentSlide}
         >
          <Logo pos={{ "x" :   "18%",  " y": "8%" }} color={"black"} font={"'Questrial', sans-serif"} key={currentSlide} />
         <button>
            <a href={`/user/${slideDecks[0].transitionName}/${"chill"}/${0}`}>Click me!</a>
            {/* <Link
              to={{pathname: `/user/${slideDecks[0].transitionName}/${0}`, props: slideDecks[0]} }>Click me!
            </Link> */}    
         </button>          
         </Wallpaper> 
      )  
}

Dashboard.propTypes = {
   slideDecks: PropTypes.array,
   loading: PropTypes.bool,
   currentSlide: PropTypes.number,
};
   
export default (Dashboard);