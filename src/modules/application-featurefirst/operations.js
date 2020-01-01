import actions from './actions'

// this is a link, or pass-through because the action just operates on local state
// without dispatching multiple actions or side effects, etc.
const toggleFlag = actions.toggleFlag;

// this file exists to manage thunks, etc.

export default {
    toggleFlag,
}