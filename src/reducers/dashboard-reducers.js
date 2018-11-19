import extend from 'xtend'
let newState

const dashboard = (state, action) => {
   const image1 = require("./../images/wallpaper.jpg");

   let appState = extend(
      {
         slideDecks: [{
            transitionName: "example",
            transitionAppear: true,
            transitionLeave: true,
            transitionAppearTimeout: 1500,
            transitionEnterTimeout: 1500,
            transitionLeaveTimeout: 1500,
            uri: image1,
            delay: 5000
         }],
         currentSlide: 0,
         loading: true,
      }, state);

   switch (action.type) {
      case 'UPDATE_LOADING':
         newState = extend(appState, {
            loading: action.loading
         });
         return newState
      case 'UPDATE_TIMER':
         newState = extend(appState, {
            timer: action.timer
         });
         return newState
      case 'UPDATE_CURRENT_SLIDE':
         newState = extend(appState, {
            currentSlide: action.currentSlide
         });
         return newState
      default:
         return appState
   }
}

export default dashboard

