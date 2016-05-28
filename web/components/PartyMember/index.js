import React, { Component, PropTypes } from 'react';
import styles from './PartyMember.scss';

class PartyMember extends React.Component {
    render() {
        return (
            <div>
            Name: {this.props.member.name}
            Health: {this.props.member.health}
            </div>
        );
    }
}

PartyMember.propTypes = {
    member: React.PropTypes.shape({
        'name': React.PropTypes.string,
        'race': React.PropTypes.string,
        'subRace': React.PropTypes.string,
        'class': React.PropTypes.string,
        'health': React.PropTypes.number,
        'armorCLass': React.PropTypes.number
    })
};

export default PartyMember;
