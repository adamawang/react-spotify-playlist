import { combineReducers } from 'redux';

import PlaylistReducer from './playlist-reducer';
import SongReducer from './song-reducer';
import UserReducer from './userinfo-reducer';

const rootReducer = combineReducers({
  playlist: PlaylistReducer,
  song: SongReducer,
  user: UserReducer,
});


export default rootReducer;
