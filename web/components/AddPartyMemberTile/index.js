import React, { Component, PropTypes } from 'react';
import styles from './AddPartyMemberTile.scss';

class AddPartyMemberTile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.characterSearch();
    }

    render() {
        return (
            <div className={styles.container} onClick={this.handleClick}>
                <div className={styles.nameContainer}>
                    <span className={styles.name}>Add Party Member</span>
                </div>
            </div>
        );
    }
}

AddPartyMemberTile.propTypes = {
    characterSearch: React.PropTypes.func
};

export default AddPartyMemberTile;
