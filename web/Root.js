import 'normalize.css';
import './scss/main.scss';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

class Root extends Component {
   render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
    store: React.PropTypes.object,
    history: React.PropTypes.object
};

export default Root;
