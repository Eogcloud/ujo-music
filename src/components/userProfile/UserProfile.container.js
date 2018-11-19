import { connect } from 'react-redux'
import { updateAllUserValues,
         updateSongIndex,
         shouldShowMenu,
         handleHideMusicPlayer,
         changeLoadingUser
     } from '../../actions/actions'

import UserProfile from './UserProfile'

const mapStateToProps = (state) => {
  const {
    slideDecks,
    playList,
    slideDeckName,
    playListName,
    songIndex,
    currentSlide,
    loading,
    sortedPlayList,
    menu,
    hideMusicPlayer,
    playListsForUI
  } = state.user

  return {
    slideDecks,
    playList,
    slideDeckName,
    playListName,
    songIndex,
    currentSlide,
    sortedPlayList,
    loading,
    menu,
    hideMusicPlayer,
    playListsForUI
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAllUserValues : (slideDeckName, playList, songIndex) => dispatch(updateAllUserValues(slideDeckName, playList, songIndex)),
    updateSongIndex: (event) => dispatch(updateSongIndex(event)),
    shouldShowMenu: (menu) => dispatch(shouldShowMenu(menu)),
    handleMouseMovement: (event) => dispatch(handleHideMusicPlayer(event)),
    changeLoading: (loading) => dispatch(changeLoadingUser(loading))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)