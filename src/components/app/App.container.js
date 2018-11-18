import App from './App'
import {connect} from 'react-redux';
import {changeLoading} from '../../actions/actions';
import {startSlideShow} from '../../actions/actions';
import {stopTimer} from '../../actions/actions';

const mapStateToProps = (state) => {
   return {
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      changeLoading : (loading) => dispatch(changeLoading(loading)),
      startSlideShow : () => dispatch(startSlideShow()),
      stopTimer : (timer) => dispatch(stopTimer(timer))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)