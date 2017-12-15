export default function(state=[],action){
    switch(action.type){
        case 'ADDED_COMMENT':
         return action.payload
         break;
        default: 
            return state;
    }
}