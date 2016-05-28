import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Party.scss';

import PartyMember from '../../components/PartyMember';

import * as actionCreators from '../../actions/party';

export class Party extends React.Component {
    constructor(props) {
        super(props);
        this.props.actions.loadPartyData(this.props.partyId);
    }

    render() {
        if(this.props.partyData.members === undefined){
            return (<div>Loading...</div>);
        }

        var rows = [];
        var lastCategory = null;
        this.props.partyData.members.forEach(function (member) {
          rows.push(<PartyMember key={member.name} member={member} />);
        });

        return (
            <div>
                <div>
                    {this.props.partyData.partyName}
                </div>
                <div>
                    {rows}
                </div>
            </div>
        );
    }
}

Party.propTypes = {
    actions: React.PropTypes.shape({
        loadPartyData: React.PropTypes.func
    }),
    partyId: React.PropTypes.string,
    partyData: React.PropTypes.shape({
        partyName: React.PropTypes.string,
        members: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                'name': React.PropTypes.string,
                'race': React.PropTypes.string,
                'subRace': React.PropTypes.string,
                'class': React.PropTypes.string,
                'health': React.PropTypes.number,
                'armorCLass': React.PropTypes.number
            })
        ),
    })
};

function mapStateToProps(state) {
    return {
        partyId: state.app.partyId,
        partyData: state.party.partyData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Party);
