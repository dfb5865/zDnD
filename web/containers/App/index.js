import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.partyNameContainer}>
        	<div className={styles.partyNameForm}>
        		<div className={styles.brand}>👑thann</div>
        		<span className={styles.partyNameLabel}>Enter your party name:</span>
        		<input className={styles.partyNameInput} id="party-name" type="text" />
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
