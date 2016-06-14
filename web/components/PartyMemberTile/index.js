import React, { Component, PropTypes } from 'react';
import styles from './PartyMemberTile.scss';

class PartyMemberTile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setSelectedCharacter(this.props.character);
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
                    <div className={styles.health}>
                        <span className={styles.stat}>
                            {this.props.character.currentHitPoints} / {this.props.character.maxHitPoints}
                        </span> Health
                    </div>
                    <div className={styles.armorClass}>
                        <span className={styles.stat}>{this.props.character.armorClass}</span> Armor
                    </div>
                </div>
            </div>
        );
    }
}

PartyMemberTile.propTypes = {
    character: React.PropTypes.object,
    setSelectedCharacter: React.PropTypes.func
};

export default PartyMemberTile;
