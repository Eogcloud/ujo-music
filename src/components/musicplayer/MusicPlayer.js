import React, { Component } from 'react';
import PropTypes from "prop-types";

const MusicPlayer = (props) => {
   const { 
      song 
   } = props
   
   return (
      <audio controls>
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
