import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import PropTypes from "prop-types";
import './Menu.css';
import {
   BrowserView,
   MobileView,
   isBrowser,
   isMobile
} from "react-device-detect";

const Menu = (props) => {
   const {
      playlists,
      currentPlaylistName,
      currentSongIndex
   } = props;

   var currentIndex
   playlists.forEach((playlist, index) => {
      let fixedCurrentPlaylistName = currentPlaylistName.replace(/%20/g, ' ');
      if(playlist.playListName == fixedCurrentPlaylistName){
         currentIndex = index
      }
   });
   const listItems = playlists.map((playlist) => {
      let className = null;
      let fixedCurrentPlaylistName = currentPlaylistName.replace(/%20/g, ' ');
      if (playlist.playListName == fixedCurrentPlaylistName){
        className = 'active';
      }
      return (
         <li key={playlist.playListName}>
            <a className={className} href={`/user/${playlist.playListName  }/${playlist.playListName}/${currentSongIndex}`}>{playlist.playListName}</a>
         </li>
      )
   });

   return (
     <div style={{height: "100%", width: "100%", position: 'absolute', left: 0, right: 0}}>
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionLeave={true}
        transitionName={'example'}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={1500} >
      <div id="menuContainer">
         <div id="circle"></div>
         <div id="playListContainer" style={{ zIndex: 1 }}>
            <ul id="playlists">
               {listItems}
            </ul>
         </div>
         <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionLeave={true}
        transitionName={'infoContainer'}
        transitionEnterTimeout={1000}>
         <div id="informationContainer">
            <p className="infoHover qoute">{playlists[currentIndex].qoute}</p>
            <h2 className="infoHover">Time Period</h2>
            <p className="infoHover">{playlists[currentIndex].timePeriod}</p>
            <h2 className="infoHover">Genre</h2>
            <p className="infoHover">{playlists[currentIndex].genre}</p>
         </div>
         </ReactCSSTransitionGroup>
         <div className="bottom" style={{ height: '100%', width: '10%', border: '0.25px solid #1f1e1e', position: 'absolute', left: '0%', top: '0%' }}></div>
         <div className="bottom" style={{ height: '100%', width: '20%', border: '0.25px solid #1f1e1e', position: 'absolute', left: '10%', top: '0%' }}></div>
         <div className="bottom" style={{ height: '100%', width: '20%', border: '0.25px solid #1f1e1e', position: 'absolute', left: '30%', top: '0%' }}></div>
         <div className="bottom" style={{ height: '100%', width: '20%', border: '0.25px solid #1f1e1e', position: 'absolute', left: '50%', top: '0%' }}></div>
         <div className="bottom" style={{ height: '100%', width: '20%', border: '0.25px solid #1f1e1e', position: 'absolute', left: '70%', top: '0%' }}></div>
         <div className="bottom" style={{ height: '100%', width: '10%', border: '0.25px solid #1f1e1e', position: 'absolute', left: '90%', top: '0%' }}></div>
      </div>
      </ReactCSSTransitionGroup>
    </div>
   )
}

Menu.propTypes = {
   playlists: PropTypes.array,
   qoute: PropTypes.string
};

Menu.defaultProps = {
   playlists: [
      {
         playListName: 'PINK FLOYD',
         qoute: "Long you live and high you'll fly, and smiles you'll give, tears you'll cry and all you touch and all you see is all your life will ever be ― Pink Floyd",
         genre: 'psychedelic',
         timePeriod: '1960'
      },
      {
         playListName: 'BERLIN',
         qoute: "Long you live and high you'll fly, and smiles you'll give, tears you'll cry and all you touch and all you see is all your life will ever be ― Pink Floyd",
         genre: 'House',
         timePeriod: '1960'
      },
      {
         playListName: 'LATE MORNING',
         qoute: 'late mornings...',
         genre: 'ambient',
         timePeriod: '1960'
      },
      {
         playListName: 'HIP HOP',
         qoute: "Hip-hop is the streets. Hip-hop is a couple of elements that it comes from back in the days... that feel of music with urgency that speaks to you. It speaks to your livelihood and it's not compromised. It's blunt. It's raw, straight off the street - from the beat to the voice to the words.' - Nas",
         genre: 'rap',
         timePeriod: '1990'
      }
   ],
   currentPlaylistName: 'PINK FLOYD',
   currentPlaylistIndex: 0,
   currentSlideDeck: 'example',
   currentSongIndex: 0
};

export default (Menu);