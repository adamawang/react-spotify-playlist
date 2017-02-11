export default function songReducer(state = [], action) {
  switch(action.type) {
    case 'GET_SONG':
      return action.payload;
    default:
      return state;
  }
}
