import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Index from './components/index';
import Playlist from './components/playlist';
import Key from './components/key';

export default(
  <Route path='/' component={App} >
    <IndexRoute component={Index} />
    <Route path='/playlist' component={Playlist} />
    <Route path='/key/:key' component={Key} />
  </Route>
)
