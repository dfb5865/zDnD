import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Search.scss';

import Header from '../../components/Header';
import CharacterSearchTile from '../../components/CharacterSearchTile';

import * as actionCreators from '../../actions/search';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props.actions.loadCharacters();
    }
    render() {
        var tiles = [];
        this.props.characters.forEach(function (character) {
            tiles.push(
                <CharacterSearchTile
                    key={character.name}
                    character={character}
                    selectCharacter={this.props.actions.selectCharacter} />
            );
        }.bind(this));

        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    {tiles}
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    actions: React.PropTypes.shape({
        loadCharacters: React.PropTypes.func,
        selectCharacter: React.PropTypes.func,
    }),
    characters: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
    return {
        characters: state.search.characters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
