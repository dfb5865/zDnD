import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/zip-details';

export class Party extends React.Component {
    componentWillMount() {
        this.props.actions.loadPartyData(this.props.partyId);
    }

    render() {
        return (
            <div>
                {this.props.partyData}
            </div>
        );
    }
}

Party.propTypes = {
    actions: React.PropTypes.shape({
        loadPartyData: React.PropTypes.func
    }),
    partyId: React.PropTypes.string,
    partyData: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        partyId: state.partyId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Party);
