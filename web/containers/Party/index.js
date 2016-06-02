import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Party.scss';

import PartyHeader from '../../components/PartyHeader';
import PartyList from '../../components/PartyList';
import SelectedPartyMember from '../../components/SelectedPartyMember';

import * as actionCreators from '../../actions/party';

export class Party extends React.Component {
    constructor(props) {
        super(props);
        this.props.actions.loadPartyData(this.props.partyId);
    }

    render() {
        return (
            <div>
                <PartyHeader partyName={this.props.partyName} />
                <div className={styles.content}>
                    <PartyList setSelectedPartyMember={this.props.actions.setSelectedPartyMember} partyMembers={this.props.partyMembers} />
                    <SelectedPartyMember member={this.props.selectedPartyMember} />
                </div>
            </div>
        );
    }
}

Party.propTypes = {
    actions: React.PropTypes.shape({
        loadPartyData: React.PropTypes.func,
        setSelectedPartyMember: React.PropTypes.func,
    }),
    partyId: React.PropTypes.number,
    partyName: React.PropTypes.string,
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
    selectedPartyMember: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        partyId: state.party.partyId,
        partyName: state.party.partyName,
        partyMembers: state.party.partyMembers,
        selectedPartyMember: state.party.selectedPartyMember
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Party);
