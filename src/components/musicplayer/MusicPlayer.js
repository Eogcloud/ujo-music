import React, { Component } from 'react';
let song = require('./../../songs/annoying.mp3');

class MusicPlayer extends Component {
   constructor(props) {
      super(props);
      this.state = {
      }
   }
   render() {
      // new Audio('https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq').play();
      return (
         <audio controls>
            <source src={'https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq'} type="audio/mpeg"/>
         </audio>
      )
   }
}

export default (MusicPlayer);
