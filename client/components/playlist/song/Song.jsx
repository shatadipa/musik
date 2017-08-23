import React from 'react';
import styles from './song.css';
import AlbumArt from './albumArt/AlbumArt.jsx';
import SongNumber from './songNumber/SongNumber.jsx';
import Ellipses from './ellipses/Ellipses.jsx';
import SongInfo from './songInfo/SongInfo.jsx';
import Duration from './duration/Duration.jsx';

export default class Song extends React.Component {
  render() {
    return (
      <li className={styles.song}>
        <SongNumber n={this.props.n}/>
        <AlbumArt source={this.props.song.albumart}/>
        <SongInfo song= {this.props.song}/>
        <Duration duration={this.props.song.duration} />
        <Ellipses />
      </li>
    );
  }
}