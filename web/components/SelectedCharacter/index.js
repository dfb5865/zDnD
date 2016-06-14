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
                <div className={styles.topContainer}>
                    <div className={styles.characterName}></div>
                    <div className={styles.classAndLevel}>
                        <div className={styles.classAndLevel_topContainer}>
                            <div className={styles.class}></div>
                            <div className={styles.level}></div>
                            <div className={styles.playerName}></div>
                        </div>
                        <div className={styles.classAndLevel_bottomContainer}>
                            <div className={styles.race}></div>
                            <div className={styles.alignment}></div>
                            <div className={styles.experience}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.leftContainer}>
                    <div className={styles.proficiencyBonus}></div>
                    <div className={styles.inspiration}></div>
                    <div className={styles.strength}>
                        <div className={styles.strengthNumber}></div>
                        <div className={styles.strengthBonuses}></div>
                    </div>
                    <div className={styles.dexterity}>
                        <div className={styles.dexterityNumber}></div>
                        <div className={styles.dexterityBonuses}></div>
                    </div>

                    <div className={styles.constitution}>
                        <div className={styles.constitutionNumber}></div>
                        <div className={styles.constitutionBonuses}></div>
                    </div>
                    <div className={styles.intelligence}>
                        <div className={styles.intelligenceNumber}></div>
                        <div className={styles.intelligenceBonuses}></div>
                    </div>

                    <div className={styles.wisdom}>
                        <div className={styles.wisdomNumber}></div>
                        <div className={styles.wisdomBonuses}></div>
                    </div>
                    <div className={styles.charisma}>
                        <div className={styles.charismaNumber}></div>
                        <div className={styles.charismaBonuses}></div>
                    </div>
                    <div className={styles.passiveWisdom}></div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.rightContainer_topContainer}>
                        <div className={styles.armorContainer}>
                            <div className={styles.armorClass}></div>
                            <div className={styles.dexterityModifier}></div>
                            <div className={styles.armor}></div>
                            <div className={styles.shield}></div>
                            <div className={styles.misc}></div>
                        </div>
                        <div className={styles.initiative}></div>
                        <div className={styles.speed}></div>
                    </div>
                    <div className={styles.rightContainer_leftContainer}>
                        <div className={styles.hitPointsContainer}>
                            <div className={styles.currentHitPoints}></div>
                            <div className={styles.hitDice}></div>
                        </div>
                        <div className={styles.spellcastingContainer}>
                            <div className={styles.spellcastingAbility}></div>
                            <div className={styles.spellSaveDC}></div>
                            <div className={styles.spellAttackBonus}></div>
                        </div>
                        <div className={styles.attacksContainer}>
                            <div className={styles.attackContainer}>
                                <div className={styles.weapon}></div>
                                <div className={styles.type}></div>
                                <div className={styles.attackBonus}></div>
                                <div className={styles.attackDamage}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightContainer_rightContainer}>
                        <div className={styles.inventoryContainer}>
                            <div className={styles.item}></div>
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
