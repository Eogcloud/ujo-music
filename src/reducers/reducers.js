import { combineReducers } from 'redux';
import dashboard from './dashboard-reducers';
import user from './user-reducers';

export default combineReducers({
   dashboard,
   user
});
