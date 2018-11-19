const updateLoading = (loading) => ({
   type: 'UPDATE_LOADING',
   loading
});

export const changeLoading = (loading) => (dispatch) => {
   setTimeout(()=>{
      dispatch(updateLoading(loading));
   }, 750);
}

const updateTimer = (timer) => ({
   type: 'UPDATE_TIMER',
   timer
});

//if no timer exists create one
//
// export const createTimer = (delay) => (dispatch) => {
//    setTimeout(()=>{
//       dispatch(updateCurrentSlide());
//    }, delay)
// }

export const stopTimer = () => (dispatch, getState) => {
   let state = getState().dashboard;
   clearTimeout(state.timer);
   dispatch(updateTimer(0));
}

export const startSlideShow = () => (dispatch, getState) => {
   let state = getState().dashboard;
   let slideDecks = state.slideDecks;
   let currentSlide = state.currentSlide;
   let delay = slideDecks[currentSlide].delay;
   let nextSlide = currentSlide + 1;
   
   if(nextSlide >= slideDecks.length){
      nextSlide = 0;
   }

   let timer = setTimeout(()=>{
      dispatch(updateCurrentSlide(nextSlide));
      dispatch(startSlideShow());
   }, delay)
   dispatch(updateTimer(timer));
}

const updateCurrentSlide = (currentSlide) => ({
   type: 'UPDATE_CURRENT_SLIDE',
   currentSlide
});

// changeWallpaper(currentSlideIndex) {
//   if (currentSlideIndex == state.slideDeck.length - 1) {
//     dispatch({ currentSlideIndex: 0 });
//   }
//   else dispatch({ currentSlideIndex: currentSlideIndex + 1 })
// }

// const stop = (timer) => {
//    if (timer) {
//       clearTimeout(timer);
//       timer = 0;
//    }
// }
