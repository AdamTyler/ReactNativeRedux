import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  }

  render() {
    const { viewStyle } = styles
    console.log(this.state)
    return (
      <ScrollView style={viewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    )
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((res) => {
      console.log(res)
      this.setState({
        albums: res.data
      })
    })
  }

  renderAlbums() {
    return this.state.albums.map(album =>
    <AlbumDetail album={album} key={album.title} />
    )
  }
}

const styles = {
  viewStyle: {
    position: 'relative'
  }
}

export default AlbumList
