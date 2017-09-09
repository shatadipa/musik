import React from 'react';
import styles from './playlist.css';
import Song from './song/Song.jsx';

export default class Playlist extends React.Component {
  render() {
    return (
      <ul className={styles.playlist}>
          {
            this.props.songs.map(function (song, index) {
              return <Song key={song.id} song={song} n={index}/>;
            })
          }
      </ul>
    );
  }
}