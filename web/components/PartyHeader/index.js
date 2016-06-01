import React, { Component, PropTypes } from 'react';
import styles from './PartyHeader.scss';

class PartyHeader extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <span className={styles.partyName}>{this.props.partyName}</span>
            </div>
        );
    }
}

PartyHeader.propTypes = {
    partyName: React.PropTypes.string
};

export default PartyHeader;
