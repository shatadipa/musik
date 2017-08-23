import React from 'react';
import styles from './songNumber.css';

export default class SongNumber extends React.Component {
    render () {
        return (
            <div className={styles.songNumber}>{this.props.n+1}</div>
        );
    }
}