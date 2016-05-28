import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../containers/App';
import Party from '../containers/Party';
import CharacterSheet from '../containers/CharacterSheet';

export default (
  <Route path="/">
     <IndexRoute component={App}/>
     <Route path="party" component={Party}/>
     <Route path="sheet" component={CharacterSheet}/>
</Route>
);
