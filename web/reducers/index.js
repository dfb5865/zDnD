import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app.js';

const rootReducer = combineReducers({
	app,
  	routing
});

export default rootReducer;
