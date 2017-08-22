import React from 'react';
import Header from './header/Header.jsx';
import Playlist from './playlist/Playlist.jsx';
import PlayerBar from './playerBar/PlayerBar.jsx';
import Image1 from '../album-art/1.jpg';
import Image2 from '../album-art/2.jpg';
import Image3 from '../album-art/3.jpg';

export default class App extends React.Component {

  render() {
    return (
      <section>
        <Header />
        <Playlist list={[
          { 
            id:1, 
            title: 'Kitne dafe dil ne kaha',
            year: '2017',
            albumart: Image1,
            duration: 2.22
          },
          {
            id:2, 
            title: 'Jag mein na ishq se bada bakheda',
            year: '2016',
            albumart: Image2,
            duration: 2.52
          },
          {
            id:3, 
            title: 'Khana kha ke daaru pee ke chale gaye',
            year: '2015',
            albumart: Image3,
            duration: 5.19
          }
        ]} />
        <PlayerBar />
      </section>
    );
  }
}