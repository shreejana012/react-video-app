import {combineReducers} from 'redux';
import InputFormReducer from './input-form-reducer';
import SearchVideos from './search-videos';

const allReducers = combineReducers({
    comment: InputFormReducer,
    term: SearchVideos
});
export default allReducers;