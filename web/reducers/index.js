import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app.js';
import party from './party.js';

const rootReducer = combineReducers({
	app,
	party,
  	routing
});

export default rootReducer;
