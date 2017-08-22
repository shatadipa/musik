import React from 'react';
import styles from './albumArt.css';

export default class AlbumArt extends React.Component {
    render() {
        return (
            <a className={styles.albumArt}>
                <img src={this.props.source}/>
            </a>
        );
    }
}