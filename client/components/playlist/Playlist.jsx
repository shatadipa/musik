import React from 'react';
import styles from './playlist.css';
import Song from '../song/Song.jsx';

export default class Playlist extends React.Component {
  render() {
    return (
      <ul className={[styles.playlist].join(' ')}>
          {
            this.props.list.map(function (song) {
              return <Song key={song.id} song={song}/>;
            })
          }
      </ul>
    );
  }
}