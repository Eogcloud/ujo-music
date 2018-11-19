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
    updateAllUserValues: PropTypes.func,
    updateSongIndex: PropTypes.func
  }

  componentWillMount = () => {
    const {
      updateAllUserValues
    } = this.props
    let urlData = window.location.href.split("/")
    let slideDeckName = urlData[4]
    let playListName = urlData[5]
    let songIndex = urlData[6]
    updateAllUserValues(slideDeckName, playListName, songIndex)
  }

  changeMenu(event) {
    if (this.state.menu)
      this.setState({ menu: false })
    else
      this.setState({ menu: true })
  }

  render() {
    const {
      slideDecks,
      playList,
      slideDeckName,
      playListName,
      songIndex,
      currentSlide,
      sortedPlayList,
      updateSongIndex
    } = this.props;

    let menu = true;

    if (menu)
      return (
        <div style={{height: '100%', width: '100%'}}>
          <Menu />
          <div id="menu" onClick={this.menu = true}>close</div>
        </div>
      )
    else
      return (
        <div
          onKeyPress={updateSongIndex}
          
        >
          <div id="menu" onClick={this.menu = true}>close</div>

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
            song={playList[playListName] ? playList[playListName][songIndex] : null}
          />
          {/* <List 
          currentSongIndex = {songIndex}
          slideDecks = {slideDecks}
          currentSlideDeck = {slideDeckName}
          listItems = {sortedPlayList ? sortedPlayList : [1,1]}
        /> */}
        </div>
      )
  }
}



export default (UserProfile);
