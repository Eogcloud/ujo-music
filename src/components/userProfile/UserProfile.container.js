import { connect } from 'react-redux'
import { updateAllUserValues,
         updateSongIndex
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
    sortedPlayList
  } = state.user

  return {
    slideDecks,
    playList,
    slideDeckName,
    playListName,
    songIndex,
    currentSlide,
    sortedPlayList,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAllUserValues : (slideDeckName, playList, songIndex) => dispatch(updateAllUserValues(slideDeckName, playList, songIndex)),
    updateSongIndex: (event) => dispatch(updateSongIndex(event))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)