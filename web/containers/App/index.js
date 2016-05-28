import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './App.scss';

import * as actionCreators from '../../actions/app';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		if (e.key === 'Enter') {
      		this.props.actions.loadPartyPage(e.target.value);
    	}
	}

  	render() {
    	return (
	      	<div className={styles.container}>
	        	<div className={styles.partyNameContainer}>
	        		<div className={styles.partyNameForm}>
	        			<div className={styles.brand}>👑thann</div>
	        			<span className={styles.partyNameLabel}>Enter your party name:</span>
	        			<input className={styles.partyNameInput} id="party-name" type="text" onKeyPress={e => this.handleInput(e)}/>
	        		</div>
	        	</div>
	      	</div>
    	);
  }
}

App.propTypes = {
    actions: React.PropTypes.shape({
        loadPartyPage: React.PropTypes.func
    })
};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
