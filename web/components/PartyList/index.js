import React, { Component, PropTypes } from 'react';
import styles from './PartyList.scss';

import PartyMember from '../../components/PartyMember';

 class PartyList extends React.Component {
    render() {
        var rows = [];
        this.props.partyMembers.forEach(function (member) {
            rows.push(<PartyMember key={member.name} member={member} setSelectedPartyMember={this.props.setSelectedPartyMember} />);
        }.bind(this));

        return (
            <div className={styles.container}>
                {rows}
            </div>
        );
    }
}

PartyList.propTypes = {
    partyMembers: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            'name': React.PropTypes.string,
            'race': React.PropTypes.string,
            'subRace': React.PropTypes.string,
            'class': React.PropTypes.string,
            'health': React.PropTypes.number,
            'armorCLass': React.PropTypes.number
        })
    ),
    setSelectedPartyMember: React.PropTypes.func
};

export default PartyList;
