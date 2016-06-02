import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <span className={styles.brand}>👑zDnD</span>
            </div>
        );
    }
}

export default Header;
