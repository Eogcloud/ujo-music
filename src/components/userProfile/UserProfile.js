import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from "prop-types";
import MusicPlayer from '../musicplayer/MusicPlayer';
import Wallpaper from './../wallpaper/Wallpaper';

import Menu from './../menu/Menu.js';
import './UserProfile.css';

class UserProfile extends Component {
  static propTypes = {
    slideDecks: PropTypes.object,
    playList: PropTypes.object,
    slideDeckName: PropTypes.string,
    playListName: PropTypes.string,
    songIndex: PropTypes.number,
    currentSlide: PropTypes.number,
    sortedPlayList: PropTypes.array,
    menu: PropTypes.bool,
    handleMouseMovement: PropTypes.bool,
    updateAllUserValues: PropTypes.func,
    updateSongIndex: PropTypes.func,
    shouldShowMenu: PropTypes.func,
  }

  componentWillMount = () => {
    const {
      updateAllUserValues,
      shouldShowMenu
    } = this.props
    let urlData = window.location.href.split("/")
    let slideDeckName = urlData[4]
    let playListName = urlData[5]
    let songIndex = urlData[6]
    updateAllUserValues(slideDeckName, playListName, songIndex)
    shouldShowMenu(true)
  }

  // changeMenu(event) {
  //   if (this.state.menu)
  //     this.setState({ menu: false })
  //   else
  //     this.setState({ menu: true })
  // }

  render() {
    const {
      slideDecks,
      playList,
      slideDeckName,
      playListName,
      songIndex,
      currentSlide,
      menu,
      sortedPlayList,
      updateSongIndex,
      hideMusicPlayer,
      handleMouseMovement,
      shouldShowMenu
    } = this.props


    if (menu)
      return (
        <div style={{height: '100%', width: '100%'}}>
          <Menu
            //  playLists = {sortedPlayList}
            //  currentPlaylistIndex = {playList[playListName]}
            //  currentPlaylistName = {}
            //  currentSlideDeck = {}
            //  currentSongIndex = {}
          />
          <div id="menu" onClick={()=>shouldShowMenu()}>close</div>
        </div>
      )
    else
      return (
        <div
          onKeyDown={updateSongIndex}
          onMouseMove={handleMouseMovement}
          // tabIndex="0"
          
        >
          <div id="menu" onClick={()=>shouldShowMenu(true)}>menu</div>

          <Wallpaper
            transitionAppear={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionAppear : null}
            transitionLeave={true}
            transitionName={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionName : null}
            transitionAppear={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionAppearTimeout : null}
            transitionEnterTimeout={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionEnterTimeout : null}
            transitionLeaveTimeout={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionLeaveTimeout : null}
            wallpaperUri={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].uri : null}
            key={currentSlide}
          >

          </Wallpaper>
            <MusicPlayer 
            song = {playList[playListName] ? playList[playListName] : null}
            songIndex = {songIndex}
            hideMusicPlayer = {hideMusicPlayer}
          />
        </div>
      )
  }
}



export default (UserProfile);
