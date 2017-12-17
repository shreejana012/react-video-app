export default function videos(state=[],action){
    switch(action.type){
        case 'ADDED_COMMENT':
         return action.payload
         break;
        default: 
            return state;
    }
}