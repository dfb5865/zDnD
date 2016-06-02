import React, { Component, PropTypes } from 'react';
import styles from './SelectedPartyMember.scss';

 class SelectedPartyMember extends React.Component {
    render() {
        return (
            <div className={styles.container}>
            	{this.props.member.name}
            </div>
        );
    }
}

SelectedPartyMember.propTypes = {
    member: React.PropTypes.shape({
        'name': React.PropTypes.string,
        'race': React.PropTypes.string,
        'subRace': React.PropTypes.string,
        'class': React.PropTypes.string,
        'health': React.PropTypes.number,
        'armorCLass': React.PropTypes.number,
        'currentHealth': React.PropTypes.number,
        'totalHealth': React.PropTypes.number,
        'armorClass': React.PropTypes.number,
    })
};

export default SelectedPartyMember;
