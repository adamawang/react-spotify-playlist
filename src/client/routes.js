import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Idx from './components/index';
import Playlists from './containers/playlists';
import Key from './components/key';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Idx} />
    <Route path="/playlists" component={Playlists} />
    <Route path="/key/:key" component={Key} />
  </Route>
)
