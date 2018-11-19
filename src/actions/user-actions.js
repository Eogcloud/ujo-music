const updateSlideDeckName = (slideDeckName) => ({
  type: 'UPDATE_SLIDEDECK_NAME',
  slideDeckName
});

const updatePlayList = (playListName) => ({
  type: 'UPDATE_PLAYLIST_NAME',
  playListName
});

const changeSongIndex = (songIndex) => ({
  type: 'UPDATE_SONG_INDEX',
  songIndex
});

const updateLoading = (loading) => ({
  type: 'UPDATE_LOADING',
  loading
});

const updateCurrentSlide = (currentSlide) => ({
  type: 'UPDATE_CURRENT_SLIDE',
  currentSlide
});

const sortPlayList = (sortedPlayList) => ({
  type: 'SORTED_PLAYLISTS',
  sortedPlayList
});

const showMenu = (menu) => ({
  type: 'SHOW_MENU',
  menu
});

const hideMusicPlayer = (showMusicPlayer) => ({
  type: 'SHOW_MUSIC_PLAYER',
  showMusicPlayer
});

const updateTimer = (timer) => ({
  type: 'UPDATE_TIMER',
  timer
});

const updatePlaylistsForUI = (playListsForUI) => ({
  type: 'SHOW_MUSIC_PLAYER',
  playListsForUI
});

export const changeLoadingUser = (loading) => (dispatch) => {
  setTimeout(()=>{
     dispatch(updateLoading(loading));
  }, 500);
}

export const updateAllUserValues = (slideDeckName, playListName, songIndex) => (dispatch, getState) => {
  dispatch(updateSlideDeckName(slideDeckName))
  dispatch(updatePlayList(playListName))
  dispatch(changeSongIndex(songIndex))
  dispatch(createUserPlayLists())
  dispatch(startSlideShow())
  // console.log(slideDeckName, playListName, songIndex)
}

const createUserPlayLists = () =>  (dispatch, getState) => {
  const state = getState().user

  let sortedPlayList = []
  let playListsUI = []
   
  let keys = Object.keys(state.playList);
  for (let i = 0; i < keys.length; i++){
    sortedPlayList.push(keys[i])
    //playListsUI.push(state.playList[keys[i]][2])
  }

  //dispatch(updatePlaylistsForUI(playListsUI))
  dispatch(sortPlayList(sortedPlayList))
}

const startSlideShow = () => (dispatch, getState) => {
  let state = getState().user;
  let slideDecks = state.slideDecks;
  let currentSlide = state.currentSlide;
  let slideDeckName = state.slideDeckName;
  if(slideDecks[slideDeckName]){
    let delay = slideDecks[slideDeckName][currentSlide].delay;
    let nextSlide = currentSlide + 1;
    
    if(nextSlide >= slideDecks[slideDeckName].length){
      nextSlide = 0;
    }

    setTimeout(()=>{
      dispatch(updateCurrentSlide(nextSlide));
      dispatch(startSlideShow());
    }, delay)
  }
}

export const updateSongIndex = (event) => (dispatch, getState) => {
  const state = getState().user

  if(event.which == 39){
    if(state.songIndex < state.playList[state.playListName].length - 1){
      let songIndex = Number(state.songIndex) + 1
      dispatch(changeSongIndex(songIndex))
      dispatch(handleHideMusicPlayer(true))
    } 
  } else if (event.which == 37) {
    if(state.songIndex > 0){
      let songIndex = Number(state.songIndex) - 1
      dispatch(changeSongIndex(songIndex))
      dispatch(handleHideMusicPlayer(true))
    } 
  }
}

export const shouldShowMenu = (menu) => (dispatch, getState) => {
  dispatch(showMenu(menu))
}

export const handleHideMusicPlayer = (event) => (dispatch, getState) => {
  const state = getState().user
  dispatch(hideMusicPlayer(false))

  if(event){
    if(state.timer){
      dispatch(updateTimer(false))
      setTimeout(()=>{
        dispatch(hideMusicPlayer(true))
        dispatch(updateTimer(true))
      }, 5000)
    }
  }
}




