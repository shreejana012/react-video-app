import {combineReducers} from 'redux';
import InputFormReducer from './input-form-reducer';
import SearchVideos from './search-videos';
// import SelectedVideos from './selected-videos';

const allReducers = combineReducers({
    comment: InputFormReducer,
    term: SearchVideos,
    // video: SelectedVideos
});
export default allReducers;