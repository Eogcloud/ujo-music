import React, { Component } from 'react';
import PropTypes from "prop-types";
import './MusicPlayer.css';

const MusicPlayer = (props) => {
   const { 
      song 
   } = props
   
   return (
      <audio controls style={{
         width: "70%",
         margin:'auto',
         display: 'block',
         opacity: 0.7,
         position: 'relative',
         top: '90%'
      }}>
         <source src={song} type="audio/mpeg"/>
      </audio>
   )
}

MusicPlayer.propTypes = {
   song: PropTypes.string     
};

MusicPlayer.defaultProps = {
   song: "https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq"    
};

export default (MusicPlayer);
