import { SEARCH_VIDEOS } from './../actions/index';
export default function(state = [], action) {
    switch (action.type) {
      case 'SEARCH_VIDEOS':
        return [...action.payload.items];
    }
  
    return state;
  }