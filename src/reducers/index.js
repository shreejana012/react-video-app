import {combineReducers} from 'redux';
import InputFormReducer from './input-form-reducer';

const allReducers = combineReducers({
    comment: InputFormReducer,
});
export default allReducers;