import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component { // this is a Dynamic Class Component vs Statis Functional Component
  state = { albums: [] }; //empty array

  componentWillMount() { //runs js as soon as AlbumList is called
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data })); //setState tells to re-render with new data, updates component state
   }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} /> //key for unique identifier
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
        </View>
      );
    }
  }

export default AlbumList;
