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
            	<div style={{width: 500 + 'px'}}>
            		{JSON.stringify(this.props.character)}
            	</div>
            </div>
        );
    }
}

SelectedCharacter.propTypes = {
    character: React.PropTypes.object
};

export default SelectedCharacter;
