import React from 'react';
import styles from './playerBar.css';
import AlbumArt from '../playlist/song/albumArt/AlbumArt.jsx';
import SongInfo from '../playlist/song/songInfo/SongInfo.jsx';

export default class PlayerBar extends React.Component {
  render() {
    return (
      <footer id={styles.playerBar}>
          <AlbumArt source={this.props.song.albumart}/>
          <SongInfo song={this.props.song}/>
      </footer>
    );
  }
}