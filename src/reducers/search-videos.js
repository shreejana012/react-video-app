export default function(state = [], action) {
    switch (action.type) {
      case 'fetch':
        return action.payload.data.items 
        break;     
        // return [...action.payload.items];
      default: 
        return state;
    }
  }
