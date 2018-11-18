import extend from 'xtend'
let newState

const app = (state, action) => {
   const image = require("./../images/gif.gif");
   var appState = extend(
      {
         user: {
            slideDecks: [{
               transitionName: "example",
               transitionAppear: true,
               transitionLeave: true,
               transitionAppearTimeout: 1500,
               transitionEnterTimeout: 1500,
               transitionLeaveTimeout: 1500,
               uri: image
            }],
            playlists: [{ 'uri': 'https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq' }],
            currentSong: 0,
            currentSlideDeck: 0,
            currentSlide: 0,
            sidebarActive: 0
         }
      }, state);
}

export default app

