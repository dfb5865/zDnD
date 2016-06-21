import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Party from '../containers/Party';
import Search from '../containers/Search';
import TextInput from '../containers/TextInput';

export default (
  <Route path="/">
     <IndexRoute component={TextInput}/>
     <Route path="Search" component={Search}/>
</Route>
);
