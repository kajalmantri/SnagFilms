const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_FILMS':
      return Object.assign({}, state, {films: action.payload.data});
    default:
      return state;
  }
};
