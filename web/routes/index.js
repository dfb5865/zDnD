import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Party from '../containers/Party';
import Search from '../containers/Search';

export default (
  <Route path="/">
     <IndexRoute component={Party}/>
     <Route path="Search" component={Search}/>
</Route>
);
