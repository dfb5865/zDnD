import React, { Component, PropTypes } from 'react';
import styles from './PartyMember.scss';

class PartyMember extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.nameContainer}>
                    <span className={styles.name}> {this.props.member.name} </span>
                    <span className={styles.race}> {this.props.member.race} </span>
                    <span className={styles.class}> {this.props.member.class} </span>
                </div>
                <div className={styles.statusContainer}>
                    <div className={styles.health}>
                        <span className={styles.stat}>
                            {this.props.member.currentHealth} / {this.props.member.totalHealth}
                        </span> Health
                    </div>
                    <div className={styles.armorClass}>
                        <span className={styles.stat}>{this.props.member.armorClass}</span> Armor
                    </div>
                </div>
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
        'armorCLass': React.PropTypes.number,
        'currentHealth': React.PropTypes.number,
        'totalHealth': React.PropTypes.number,
        'armorClass': React.PropTypes.number,
    })
};

export default PartyMember;
