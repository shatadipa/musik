import React from 'react';
import Header from './header/Header.jsx';
import Playlist from './playlist/Playlist.jsx';
import PlayerBar from './playerBar/PlayerBar.jsx';
import songs from './mockData.js';

export default class App extends React.Component {

  render() {
    return (
      <section>
        <Header />
        <Playlist songs={songs} />
        <PlayerBar song={songs[0]}/>
      </section>
    );
  }
}