import { combineReducers } from 'redux';

import PlaylistReducer from './playlist-reducer';
import SongReducer from './song-reducer';

const rootReducer = combineReducers({
  playlist: PlaylistReducer,
  song: SongReducer,
});


export default rootReducer;
