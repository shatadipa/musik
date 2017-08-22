import React from 'react';
import styles from './song.css';
import AlbumArt from '../albumArt/AlbumArt.jsx';

export default class Song extends React.Component {
  render() {
    return (
      <li className={styles.song}>
        <div>#1</div>
        <AlbumArt />
        <div>{this.props.song.title}</div>
        <div>{this.props.song.duration}</div>
        <div>Menu</div>
      </li>
    );
  }
}