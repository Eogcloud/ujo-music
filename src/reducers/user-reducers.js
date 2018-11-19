import extend from 'xtend'
let newState

const user = (state, action) => {
  const image1 = require("./../images/wallpaper.jpg");
  const image2 = require("./../images/gif.gif");

  let song = require('./../songs/annoying.mp3');
  let songFromIPFS = 'https://ipfs.infura.io/ipfs/QmWFJQrFiGMLwkkVQfNQhq3CZLmRT1p1posPjqKCB3Nvfq'

  let ambient1 = require('./../songs/ambient/ambient1.mp3');
  let ambuent2 = require('./../songs/ambient/ambient2.mp3');

  let techno1 = require('./../songs/techno/techno1.mp3');
  let techno2 = require('./../songs/techno/techno2.mp3');
  
  let appState = extend({
      slideDecks: 
        { 
          "example": [{
            transitionName: "example",
            transitionAppear: true,
            transitionLeave: true,
            transitionAppearTimeout: 1500,
            transitionEnterTimeout: 1500,
            transitionLeaveTimeout: 1500,
            uri: image1,
            delay: 5000
          },
          {
            transitionName: "example",
            transitionAppear: true,
            transitionLeave: true,
            transitionAppearTimeout: 1500,
            transitionEnterTimeout: 1500,
            transitionLeaveTimeout: 1500,
            uri: image2,
            delay: 10000
          }],
          "chill": [{
            transitionName: "example",
            transitionAppear: true,
            transitionLeave: true,
            transitionAppearTimeout: 1500,
            transitionEnterTimeout: 1500,
            transitionLeaveTimeout: 1500,
            uri: image2,
            delay: 5000
          },
          {
            transitionName: "example",
            transitionAppear: true,
            transitionLeave: true,
            transitionAppearTimeout: 1500,
            transitionEnterTimeout: 1500,
            transitionLeaveTimeout: 1500,
            uri: image1,
            delay: 10000
          }]
        },
      playList : {
         "test": [
            song,
            songFromIPFS
        ],
         "chill":[
            ambient1,
            ambuent2
        ],
         "cool":[
            techno1,
            techno2
        ]
      },
      slideDeckName: "default",
      playListName: "default",
      songIndex: 0,
      currentSlide: 0,
      loading: false,
      sortedPlayLists: []
    }, state);

  switch (action.type) {
    case 'UPDATE_SLIDEDECK_NAME':
      newState = extend(appState, {
        slideDeckName: action.slideDeckName
      });
      return newState
    case 'UPDATE_PLAYLIST_NAME':
      newState = extend(appState, {
        playListName: action.playListName
      });
      return newState
    case 'UPDATE_SONG_INDEX':
      newState = extend(appState, {
        songIndex: action.songIndex
      });
      return newState
    case 'UPDATE_LOADING':
      newState = extend(appState, {
        loading: action.loading
      });
      return newState
    case 'UPDATE_CURRENT_SLIDE':
      newState = extend(appState, {
         currentSlide: action.currentSlide
      });
      return newState
    case 'SORTED_PLAYLISTS':
      newState = extend(appState, {
        sortedPlayList: action.sortedPlayList
      });
      return newState
    default:
      return appState
  }
}

export default user

