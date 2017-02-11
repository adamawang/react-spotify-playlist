import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  playlist: PlaylistReducer,
  song: SongReducer,
});


export default rootReducer;
