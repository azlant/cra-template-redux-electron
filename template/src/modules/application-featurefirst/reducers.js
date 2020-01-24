import { Application } from './records';

import types from './types';

const flagReducer = (state = new Application(), action )=> {
    switch (action.type) {    
        case types.TOGGLE_FLAG: 
            return state
                    .set('flag', (! (state.get('flag')) ));
        default:
            return state;
    }
};

// could have multiple reducers here that you assemble with combineReducers()

export default flagReducer;