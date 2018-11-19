import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from "prop-types";
import MusicPlayer from '../musicplayer/MusicPlayer';
import Wallpaper from './../wallpaper/Wallpaper';
import CircularProgress from '@material-ui/core/CircularProgress';

import Menu from './../menu/Menu.js';
import './UserProfile.css';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class UserProfile extends Component {
  static propTypes = {
    slideDecks: PropTypes.object,
    playList: PropTypes.object,
    slideDeckName: PropTypes.string,
    playListName: PropTypes.string,
    songIndex: PropTypes.string,
    currentSlide: PropTypes.number,
    sortedPlayList: PropTypes.array,
    menu: PropTypes.bool,
    handleMouseMovement: PropTypes.func,
    updateAllUserValues: PropTypes.func,
    updateSongIndex: PropTypes.func,
    shouldShowMenu: PropTypes.func,
  }

  componentWillMount = () => {
    const {
      updateAllUserValues,
      shouldShowMenu,
      changeLoading
    } = this.props
    let urlData = window.location.href.split("/")
    let slideDeckName = urlData[4]
    let playListName = urlData[5]
    let songIndex = urlData[6]
    changeLoading(false)
    updateAllUserValues(slideDeckName, playListName, songIndex)
    shouldShowMenu(true)
  }

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
      loading,
      updateSongIndex,
      hideMusicPlayer,
      handleMouseMovement,
      shouldShowMenu,
      playListsForUI
    } = this.props
    let musicPlayerVisible = hideMusicPlayer ? "hidden" : "initial"
    let slide = slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].uri : 'https://external-preview.redd.it/Ne_TV7TaVNXaw1HKoJg1gtv6KnyzifuxfcxSrffi7-Q.jpg?auto=webp&s=39f1ab8fe398bd67bbaf535ac490e803455e63f9';
    if (isMobile)
      if (!menu)
        return (
          <div style={{ height: '100%', width: '100%' }}>
            <Menu
              playlists = {playListsForUI}
              currentPlaylistIndex = {0}
              currentPlaylistName = {playListName}
              currentSlideDeck = {slideDeckName}
              currentSongIndex = {songIndex}
            />
            <div id="menu" style={{ cursor:'pointer' }} onClick={() => shouldShowMenu(true)}>close</div>
          </div>
        )
      else
        return (
          //This all needs to be refactored out into a .css file. Rushed code :D 
          <div style={{textAlign: 'center', height: '100%', backgroundColor: '#1E1C1C'}}> 
            <CSSTransitionGroup
              transitionAppear={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionAppear : null}
              transitionLeave={true}
              transitionName={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionName : null}
              transitionAppear={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionAppearTimeout : null}
              transitionEnterTimeout={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionEnterTimeout : null}
              transitionLeaveTimeout={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].transitionLeaveTimeout : null}
              wallpaperUri={slideDecks[slideDeckName] ? slideDecks[slideDeckName][currentSlide].uri : null} >
              <div style={{ backgroundImage: "url(" + slide + ")", position: 'absolute', top: '15%', left: '20%' }} className="rotating"> </div>
            </CSSTransitionGroup>
            <div style={{position: 'relative', top: '55%'}}>
             <h2 style={{color:'#eeecea', fontFamily: "'Playfair Display SC', serif"}}>Pink Floyd</h2> 
 
              <h3 style={{color:'#eeecea', fontFamily: "'Playfair Display SC', serif", marginTop: '10px'}}>Comfortably Numb</h3>
            </div>
            <MusicPlayer
              song={playList[playListName] ? playList[playListName] : null}
              songIndex={songIndex}
              hideMusicPlayer={hideMusicPlayer}
            />
            <div id="menu" style={{ cursor:'pointer' }} onClick={() => shouldShowMenu()}>menu</div>
          </div>
        )
    else {
      if (!menu)
        return (
          <div style={{ height: '100%', width: '100%' }}>
            <Menu
              playlists = {playListsForUI}
              currentPlaylistIndex = {0}
              currentPlaylistName = {playListName}
              currentSlideDeck = {slideDeckName}
              currentSongIndex = {songIndex}
            />
            <div id="menu" style={{ cursor:'pointer' }} onClick={() => shouldShowMenu(true)}>close</div>
          </div>
        )
      else
      if (loading)
        return (
           <div>
              <div id="spinnerContainer">
                 <CircularProgress size={45} thickness={4} className="spinner" color="" />
              </div>
           </div>    
        ) 
        return (
          <div
            onKeyDown={updateSongIndex}
            onMouseMove={handleMouseMovement}
            tabIndex='0'
          >
            <div id="menu" style={{ cursor:'pointer' }} onClick={() => shouldShowMenu()}>menu</div>

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
            <div style={{position: 'absolute', top: '81%', left: '16.5%'}}>
             <h2 style={{color:'#eeecea', fontFamily: "'Playfair Display SC', serif", visibility:musicPlayerVisible}}>Pink Floyd</h2> 
 
              <h3 style={{color:'#eeecea', fontFamily: "'Playfair Display SC', serif", marginTop: '10px', visibility:musicPlayerVisible}}>Comfortably Numb</h3>
            </div>
            <MusicPlayer
              song={playList[playListName] ? playList[playListName] : null}
              songIndex={songIndex}
              hideMusicPlayer={musicPlayerVisible}
            />
          </div>
        )
    }
  }
}



export default (UserProfile);
