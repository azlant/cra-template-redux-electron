
const ACTION_HANDLERS = {
  'TEST_ACTION': (state) => {
    return {
      ...state
    };
  }
};

export const initialState = {
  someStateVar: true
};

const testReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default testReducer;
