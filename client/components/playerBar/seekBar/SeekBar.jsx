import React from 'react';
import styles from './seekBar.css';

export default class SeekBar extends React.Component {
    render() {
        return (
            <section className={styles.seekBar}>
                <label>2.10</label>
                <div className={styles.bar}>
                    <div className={styles.fill}></div>
                    <div className={styles.seek}></div>
                </div>
                <label>2.26</label>
            </section>
        );
    }
}