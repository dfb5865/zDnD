import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Party.scss';

import Header from '../../components/Header';
import PartyList from '../../components/PartyList';
import SelectedCharacter from '../../components/SelectedCharacter';

import * as actionCreators from '../../actions/party';

export class Party extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className={styles.content}>
                    <PartyList
                        characterSearch={this.props.actions.characterSearch}
                        setSelectedCharacter={this.props.actions.setSelectedCharacter}
                        characters={this.props.characters}
                        />
                    <SelectedCharacter character={this.props.selectedCharacter} />
                </div>
            </div>
        );
    }
}

Party.propTypes = {
    actions: React.PropTypes.shape({
        characterSearch: React.PropTypes.func,
        setSelectedCharacter: React.PropTypes.func,
    }),
    characters: React.PropTypes.arrayOf(React.PropTypes.object),
    selectedCharacter: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        characters: state.party.characters,
        selectedCharacter: state.party.selectedCharacter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Party);
