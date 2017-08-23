import React from 'react';
import styles from './songInfo.css';

export default class SongInfo extends React.Component {
    render(){
        return (
            <div className={styles.songInfo}>
                <div>{this.props.song.title}</div>
                <div>{this.props.song.year}</div>
            </div>
        );
    }
}