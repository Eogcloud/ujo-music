import extend from 'xtend'
import config from './../constants/config'
let newState

const user = (state, action) => {
  let appState = extend({
      slideDecks: config.slideDecks,
      playList : config.playList,
      slideDeckName: "default",
      playListName: "default",
      songIndex: 0,
      currentSlide: 0,
      loading: true,
      sortedPlayLists: [],
      menu: true,
      timer: true,
      hideMusicPlayer: false,
      playListsForUI: config.playListsForUI
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
    case 'SHOW_MENU':
      newState = extend(appState, {
         menu: action.menu
      });
      return newState
    case 'SHOW_MUSIC_PLAYER':
      newState = extend(appState, {
        hideMusicPlayer: action.showMusicPlayer
      });
      return newState
    case 'UPDATE_TIMER':
      newState = extend(appState, {
        timer: action.timer
      });
      return newState
    case 'UPDATE_PLAYLISTS_UI':
      newState = extend(appState, {
        playListsForUI: action.playListsForUI
      });
      return newState
    default:
      return appState
  }
}

export default user

