import React, { Component, PropTypes } from 'react';
import styles from './SelectedCharacter.scss';

 class SelectedCharacter extends React.Component {
    render() {

    	if (JSON.stringify(this.props.character) === JSON.stringify({})) {
			return (
				<div className={styles.container}>
					<div style={{'fontSize': 500 + 'px', margin: 'auto'}}>
						⚔
					</div>
				</div>
			);
    	}

        return (
            <div className={styles.container}>
                <div className={styles.nameContainer}>
                    <div className={styles.characterName}>Character Name: {this.props.character.name}</div>
                    <div className={styles.atAGlanceContainer}>
                        <div className={styles.classLine}>
                            <div className={styles.class}>Class: {this.props.character.class} ({this.props.character.subClass})</div>
                            <div className={styles.level}>Level: {this.props.character.level}</div>
                            <div className={styles.playerName}>Player Name: {this.props.character.playerName}</div>
                        </div>
                        <div className={styles.raceLine}>
                            <div className={styles.race}>Race: {this.props.character.race} ({this.props.character.subRace})</div>
                            <div className={styles.alignment}>Alignment: {this.props.character.alignment}</div>
                            <div className={styles.experience}>Experience: {this.props.character.experience}</div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomContainer}>
                    <div className={styles.attributesContainer}>
                        <div className={styles.proficiencyBonus}>Proficiency Bonus: {this.props.character.proficiencyBonus}</div>
                        <div className={styles.strength}>
                            <div className={styles.strengthNumber}>Strength: {this.props.character.strength}</div>
                            <div className={styles.strengthBonuses}></div>
                        </div>
                        <div className={styles.dexterity}>
                            <div className={styles.dexterityNumber}>Dexterity: {this.props.character.dexterity}</div>
                            <div className={styles.dexterityBonuses}></div>
                        </div>

                        <div className={styles.constitution}>
                            <div className={styles.constitutionNumber}>Constitution: {this.props.character.constitution}</div>
                            <div className={styles.constitutionBonuses}></div>
                        </div>
                        <div className={styles.intelligence}>
                            <div className={styles.intelligenceNumber}>Intelligence: {this.props.character.intelligence}</div>
                            <div className={styles.intelligenceBonuses}></div>
                        </div>

                        <div className={styles.wisdom}>
                            <div className={styles.wisdomNumber}>Wisdom: {this.props.character.wisdom}</div>
                            <div className={styles.wisdomBonuses}></div>
                        </div>
                        <div className={styles.charisma}>
                            <div className={styles.charismaNumber}>Charisma: {this.props.character.charisma}</div>
                            <div className={styles.charismaBonuses}></div>
                        </div>
                        <div className={styles.passiveWisdom}>Passive Wisdom: -</div>
                    </div>

                    <div className={styles.bottomContainer_rightContainer}>
                        <div className={styles.armorInitiativeAndSpeedContainer}>
                            <div className={styles.armorContainer}>
                                <div className={styles.armorClass}>Armor Class: {this.props.character.armorClass}</div>
                                <div className={styles.dexterityModifier}>Dex Modifier: -</div>
                                <div className={styles.armor}>Armor: -</div>
                                <div className={styles.shield}>Shield: -</div>
                                <div className={styles.misc}>Misc: -</div>
                            </div>
                            <div className={styles.initiative}>Initiative: {this.props.character.initiative}</div>
                            <div className={styles.speed}>Speed: {this.props.character.speed}</div>
                        </div>
                        <div className={styles.hitPointsAndInventoryContainer}>
                            <div className={styles.hitPointsAndAttacksContainer}>
                                <div className={styles.hitPointsContainer}>
                                    <div className={styles.maxHitPoints}>Max Hit Points: {this.props.character.maxHitPoints}</div>
                                    <div className={styles.currentHitPoints}>Current Hit Points: {this.props.character.currentHitPoints}</div>
                                    <div className={styles.temporaryHitPoints}>Temporary Hit Points: {this.props.character.temporaryHitPoints}</div>
                                </div>
                                <div className={styles.spellcastingContainer}>
                                    <div className={styles.spellcastingAbility}>Spellcasting Ability: -</div>
                                    <div className={styles.spellSaveDC}>Spell Save DC: -</div>
                                    <div className={styles.spellAttackBonus}>Spell Attack Bonus: -</div>
                                </div>
                                <div className={styles.attacksContainer}>
                                    <div className={styles.attackContainer}>
                                        <div className={styles.weapon}>Weapon: -</div>
                                        <div className={styles.type}>Type: -</div>
                                        <div className={styles.attackBonus}>Attack Bonus: -</div>
                                        <div className={styles.attackDamage}>Attack Damage: -</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inventoryContainer}>
                                <div className={styles.item}>Item</div>
                                <div className={styles.item}>Item</div>
                                <div className={styles.item}>Item</div>
                                <div className={styles.item}>Item</div>
                                <div className={styles.item}>Item</div>
                                <div className={styles.item}>Item</div>
                                <div className={styles.item}>Item</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SelectedCharacter.propTypes = {
    character: React.PropTypes.object
};

export default SelectedCharacter;
