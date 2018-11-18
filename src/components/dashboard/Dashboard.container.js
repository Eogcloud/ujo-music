import Dashboard from './Dashboard'
import {connect} from 'react-redux';
import {stopTimer} from '../../actions/actions';
import {startSlideShow} from '../../actions/actions';

const mapStateToProps = (state) => {
   const {
      slideDecks, 
      loading,
      currentSlide,
      timer
   } = state.dashboard;

   return {
      slideDecks, 
      loading,
      currentSlide,
      timer
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      stopTimer : () => dispatch(stopTimer()),
      startSlideShow : () => dispatch(startSlideShow())
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Dashboard)