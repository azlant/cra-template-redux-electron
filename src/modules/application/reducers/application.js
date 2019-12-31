import {Record, List, Map, Set, OrderedMap} from 'immutable';
import ApplicationRecord from '../records/application';

import 
    APP_INITIALIZE
from '../actions';

const { Application } = ApplicationRecord;
const initialAppState = new Application();

export default (state = initialAppState, action )=> {
    switch (action.type) {

    case APP_INITIALIZE:
        return state
                .set('loaded', true);

    default:
        return state;
    }
};
