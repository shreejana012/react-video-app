import {combineReducers} from 'redux';
import InputFormReducer from './input-form-reducer';
import videos from './search-videos';

const allReducers = combineReducers({
    comment: InputFormReducer,
    videos: videos
});
export default allReducers;