import React, { Component } from 'react';
import PropTypes from "prop-types";
import './MusicPlayer.css';
import {
   BrowserView,
   MobileView,
   isBrowser,
   isMobile
} from "react-device-detect";


const MusicPlayer = (props) => {
   const { 
      song,
      songIndex,
      hideMusicPlayer
   } = props

   console.log(hideMusicPlayer)
   if (isMobile)
      return (
         <div>
            <audio controls src={song ? song[songIndex] : null} style={{
               width: "70%",
               margin: 'auto',
               display: 'block',
               opacity: 0.7,
               position: 'absolute',
               top: '80%',
               left: '15%',
               visibility: hideMusicPlayer
            }}>
            </audio>
         </div>
      )
   else
      return (
         <div>
            <audio controls src={song ? song[songIndex] : null} style={{
               width: "70%",
               margin: 'auto',
               display: 'block',
               opacity: 0.7,
               position: 'absolute',
               top: '90%',
               left: '15%',
               visibility: hideMusicPlayer
            }}>
            </audio>
         </div>
      )
}

MusicPlayer.propTypes = {
   song: PropTypes.string
};

// MusicPlayer.defaultProps = {
//    song: "https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq"    
// };

export default (MusicPlayer);
