import React, { Component, PropTypes } from 'react';
import styles from './CharacterSearchTile.scss';

class CharacterSearchTile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.selectCharacter(this.props.character);
    }

    render() {
        return (
            <div className={styles.container} onClick={this.handleClick}>
                <div className={styles.nameContainer}>
                    <span className={styles.name}> {this.props.character.name} </span>
                    <span className={styles.race}> {this.props.character.race} </span>
                    <span className={styles.class}> {this.props.character.class} </span>
                </div>
                <div className={styles.statusContainer}>
                    <div>
                        <span className={styles.stat}>{this.props.character.totalHealth}</span> Health
                    </div>
                    <div>
                        <span className={styles.stat}>{this.props.character.armorClass}</span> Armor
                    </div>
                </div>
            </div>
        );
    }
}

CharacterSearchTile.propTypes = {
    character: React.PropTypes.object,
    selectCharacter: React.PropTypes.func
};

export default CharacterSearchTile;
