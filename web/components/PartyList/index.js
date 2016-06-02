import React, { Component, PropTypes } from 'react';
import styles from './PartyList.scss';

import PartyMemberTile from '../../components/PartyMemberTile';
import AddPartyMemberTile from '../../components/AddPartyMemberTile';

 class PartyList extends React.Component {
    render() {
        var rows = [];
        this.props.characters.forEach(function (character) {
            rows.push(
                <PartyMemberTile
                    key={character.name}
                    character={character}
                    setSelectedCharacter={this.props.setSelectedCharacter} />
            );
        }.bind(this));

        if (rows.length === 0) {
            return (
                <div className={styles.container}>
                    <AddPartyMemberTile characterSearch={this.props.characterSearch}/>
                </div>
            );
        }

        return (
            <div className={styles.container}>
                {rows}
                <AddPartyMemberTile characterSearch={this.props.characterSearch}/>
            </div>
        );
    }
}

PartyList.propTypes = {
    characterSearch: React.PropTypes.func,
    characters: React.PropTypes.arrayOf(React.PropTypes.object),
    setSelectedCharacter: React.PropTypes.func
};

export default PartyList;
