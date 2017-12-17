import { SELECTED_VIDEO } from './../actions/index';
export default function(state = [], action) {
    switch (action.type) {
      case SELECTED_VIDEO:
        return [action.payload];
    }
    return state;
  }