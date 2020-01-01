import { Application } from '../records';

import {
    TOGGLE_FLAG
} from '../actions';

export default (state = new Application(), action )=> {
    switch (action.type) {    

    case TOGGLE_FLAG: {
        console.log("triggering");
        return state
                .set('flag', (! (state.get('flag')) ));
    }
    default:
        return state;
    }
};
