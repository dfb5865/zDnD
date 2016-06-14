import React, { Component, PropTypes } from 'react';
import styles from './SelectedCharacter.scss';

var AutosizeInput = require('react-input-autosize');

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
                    <div className={styles.characterName}>Character Name: <AutosizeInput type="text" value={this.props.character.name}/></div>
                    <div className={styles.atAGlanceContainer}>
                        <div className={styles.classLine}>
                            <div className={styles.class}>Class: <AutosizeInput type="text" value={this.props.character.class}/> (<AutosizeInput type="text" value={this.props.character.subClass}/>)</div>
                            <div className={styles.level}>Level: <AutosizeInput type="text" value={this.props.character.level}/></div>
                            <div className={styles.playerName}>Player Name: <AutosizeInput type="text" value={this.props.character.playerName}/></div>
                        </div>
                        <div className={styles.raceLine}>
                            <div className={styles.race}>Race: <AutosizeInput type="text" value={this.props.character.race}/> (<AutosizeInput type="text" value={this.props.character.subRace}/>)</div>
                            <div className={styles.alignment}>Alignment: <AutosizeInput type="text" value={this.props.character.alignment}/></div>
                            <div className={styles.experience}>Experience: <AutosizeInput type="text" value={this.props.character.experience}/></div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomContainer}>
                    <div className={styles.attributesContainer}>
                        <div className={styles.proficiencyBonus}>Proficiency Bonus: <AutosizeInput type="text" value={this.props.character.proficiencyBonus}/></div>
                        <div className={styles.strength}>
                            <div className={styles.strengthNumber}>Strength: <AutosizeInput type="text" value={this.props.character.strength}/></div>
                            <div className={styles.strengthBonuses}></div>
                        </div>
                        <div className={styles.dexterity}>
                            <div className={styles.dexterityNumber}>Dexterity: <AutosizeInput type="text" value={this.props.character.dexterity}/></div>
                            <div className={styles.dexterityBonuses}></div>
                        </div>

                        <div className={styles.constitution}>
                            <div className={styles.constitutionNumber}>Constitution: <AutosizeInput type="text" value={this.props.character.constitution}/></div>
                            <div className={styles.constitutionBonuses}></div>
                        </div>
                        <div className={styles.intelligence}>
                            <div className={styles.intelligenceNumber}>Intelligence: <AutosizeInput type="text" value={this.props.character.intelligence}/></div>
                            <div className={styles.intelligenceBonuses}></div>
                        </div>

                        <div className={styles.wisdom}>
                            <div className={styles.wisdomNumber}>Wisdom: <AutosizeInput type="text" value={this.props.character.wisdom}/></div>
                            <div className={styles.wisdomBonuses}></div>
                        </div>
                        <div className={styles.charisma}>
                            <div className={styles.charismaNumber}>Charisma: <AutosizeInput type="text" value={this.props.character.charisma}/></div>
                            <div className={styles.charismaBonuses}></div>
                        </div>
                        <div className={styles.passiveWisdom}>Passive Wisdom: <AutosizeInput type="text" value="-"/></div>
                    </div>

                    <div className={styles.bottomContainer_rightContainer}>
                        <div className={styles.armorInitiativeAndSpeedContainer}>
                            <div className={styles.armorContainer}>
                                <div className={styles.armorClass}>Armor Class: <AutosizeInput type="text" value={this.props.character.armorClass}/></div>
                                <div className={styles.dexterityModifier}>Dex Modifier: <AutosizeInput type="text" value="-"/></div>
                                <div className={styles.armor}>Armor: <AutosizeInput type="text" value="-"/></div>
                                <div className={styles.shield}>Shield: <AutosizeInput type="text" value="-"/></div>
                                <div className={styles.misc}>Misc: <AutosizeInput type="text" value="-"/></div>
                            </div>
                            <div className={styles.initiative}>Initiative: <AutosizeInput type="text" value={this.props.character.initiative}/></div>
                            <div className={styles.speed}>Speed: <AutosizeInput type="text" value={this.props.character.speed}/></div>
                        </div>
                        <div className={styles.hitPointsAndInventoryContainer}>
                            <div className={styles.hitPointsAndAttacksContainer}>
                                <div className={styles.hitPointsContainer}>
                                    <div className={styles.maxHitPoints}>Max Hit Points: <AutosizeInput type="text" value={this.props.character.maxHitPoints}/></div>
                                    <div className={styles.currentHitPoints}>Current Hit Points: <AutosizeInput type="text" value={this.props.character.currentHitPoints}/></div>
                                    <div className={styles.temporaryHitPoints}>Temporary Hit Points: <AutosizeInput type="text" value={this.props.character.temporaryHitPoints}/></div>
                                </div>
                                <div className={styles.spellcastingContainer}>
                                    <div className={styles.spellcastingAbility}>Spellcasting Ability: <AutosizeInput type="text" value="-"/></div>
                                    <div className={styles.spellSaveDC}>Spell Save DC: <AutosizeInput type="text" value="-"/></div>
                                    <div className={styles.spellAttackBonus}>Spell Attack Bonus: <AutosizeInput type="text" value="-"/></div>
                                </div>
                                <div className={styles.attacksContainer}>
                                    <div className={styles.attackContainer}>
                                        <div className={styles.weapon}>Weapon: <AutosizeInput type="text" value="-"/></div>
                                        <div className={styles.type}>Type: <AutosizeInput type="text" value="-"/></div>
                                        <div className={styles.attackBonus}>Attack Bonus: <AutosizeInput type="text" value="-"/></div>
                                        <div className={styles.attackDamage}>Attack Damage: <AutosizeInput type="text" value="-"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inventoryContainer}>
                                <div className={styles.item}><AutosizeInput type="text" value="Item"/></div>
                                <div className={styles.item}><AutosizeInput type="text" value="Item"/></div>
                                <div className={styles.item}><AutosizeInput type="text" value="Item"/></div>
                                <div className={styles.item}><AutosizeInput type="text" value="Item"/></div>
                                <div className={styles.item}><AutosizeInput type="text" value="Item"/></div>
                                <div className={styles.item}><AutosizeInput type="text" value="Item"/></div>
                                <div className={styles.item}><AutosizeInput type="text" value="Item"/></div>
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
