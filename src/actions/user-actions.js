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

export const updateAllUserValues = (slideDeckName, playListName, songIndex) => (dispatch, getState) => {
  dispatch(updateSlideDeckName(slideDeckName))
  dispatch(updatePlayList(playListName))
  dispatch(updateSongIndex(songIndex))
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

  console.log(currentSlide)
  let delay = slideDecks[slideDeckName][currentSlide].delay;
  let nextSlide = currentSlide + 1;
  
  if(nextSlide >= slideDecks[slideDeckName].length){
     nextSlide = 0;
  }
  console.log(nextSlide)
  setTimeout(()=>{
     dispatch(updateCurrentSlide(nextSlide));
     dispatch(startSlideShow());
  }, delay)
}

export const updateSongIndex = (event) => (dispatch, getState) => {
  const state = getState().user
  console.log(event.target)
  // if(event.keys){
  //   if(state.songIndex<=state.playList[state.playListName].length){
  //     let newSongIndex = state.songIndex + 1
  //     console.log(newSongIndex)
  //     dispatch(changeSongIndex(newSongIndex))
  //   } 
  // } else {
  //   if(state.songIndex>0){
  //     let newSongIndex = state.songIndex - 1
  //     console.log(newSongIndex)
  //     dispatch(changeSongIndex(newSongIndex))
  //   } 
  // }
  
}

