import { INCREMENT, DECREMENT, SET_COUNT } from ".";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return initialState;
  }
};

export { reducer, initialState };
