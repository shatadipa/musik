import React from 'react';
import styles from './song.css';
import AlbumArt from '../albumArt/AlbumArt.jsx';
import SongNumber from '../songNumber/SongNumber.jsx';
import Ellipses from '../ellipses/Ellipses.jsx';

export default class Song extends React.Component {
  render() {
    return (
      <li className={styles.song}>
        <SongNumber n={this.props.n}/>
        <AlbumArt source={this.props.song.albumart}/>
        <div>{this.props.song.title}</div>
        <div>{this.props.song.duration}</div>
        <Ellipses />
      </li>
    );
  }
}