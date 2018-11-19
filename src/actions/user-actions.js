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

const updateLoading = (currentSlide) => ({
  type: 'UPDATE_LOADING',
  currentSlide
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
   
  let keys = Object.keys(state.playList);
  for (let i = 0; i < keys.length; i++){
    sortedPlayList.push(keys[i])
  }
  
  dispatch(sortPlayList(sortedPlayList))
}

const startSlideShow = () => (dispatch, getState) => {
  let state = getState().user;
  let slideDecks = state.slideDecks;
  let currentSlide = state.currentSlide;
  let slideDeckName = state.slideDeckName;

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

export const updateSongIndex = (event) => (dispatch, getState) => {
  const state = getState().user

  if(event.which == 37){
    if(state.songIndex < state.playList[state.playListName].length - 1){
      let songIndex = Number(state.songIndex) + 1
      dispatch(changeSongIndex(songIndex))
    } 
  } else if (event.which == 39) {
    if(state.songIndex > 0){
      let songIndex = Number(state.songIndex) - 1
      dispatch(changeSongIndex(songIndex))
    } 
  }
}

export const shouldShowMenu = (menu) => (dispatch, getState) => {
  dispatch(showMenu(menu))
  console.log(menu)
}

export const handleHideMusicPlayer = (event) => (dispatch, getState) => {
  const state = getState().user
  dispatch(hideMusicPlayer(false))

  // if(event){
  //   // dispatch(hideMusicPlayer(false))
  //   // console.log(state.timer)
  //   // if(!state.timer){
  //   //   setTimeout(()=>{
  //   //     dispatch(updateTimer(false))
  //   //   }, 5000)
  //   // }
  // }

  
  // if(state.timer){
  //   setTimeout(()=>{
  //     console.log("hidded")
  //     dispatch(hideMusicPlayer(true))
  //     dispatch(updateTimer(false))
  //   }, 5000)
  // } 
  
  // if(timer == 0){
  //   dispatch(hideMusicPlayer(true))
  // }
}





