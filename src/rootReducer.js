import { combineReducers } from 'redux';
import focusMap from './redux/focusMap/reducers';
import player from './redux/player/reducers';

export default combineReducers({
 focusMap,
 player
});
