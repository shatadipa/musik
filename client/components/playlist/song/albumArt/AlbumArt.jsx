import React from 'react';
import styles from './albumArt.css';

export default class AlbumArt extends React.Component {
    render() {
        return (
            <a className={this.props.styles.map(s => styles[s]).concat(styles.albumArt).join(' ')}>
                <img src={this.props.source}/>
                <div />
            </a>
        );
    }
}