import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import party from './party.js';
import search from './search.js';

const rootReducer = combineReducers({
	search,
	party,
  	routing
});

export default rootReducer;
