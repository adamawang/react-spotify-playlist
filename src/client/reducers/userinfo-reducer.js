export default function userInfoReducer(state = [], action) {
  switch(action.type) {
    case 'GET_USERINFO':
      return action.payload;
    default:
      return state;
  }
}
