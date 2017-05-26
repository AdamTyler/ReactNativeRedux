import React from 'react'
import { Image, Text, View, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const {title, artist, image, thumbnail_image, url } = album
  const {
    textContainer,
    thumb,
    thumbContainer,
    imageStyle,
    titleStyle
  } = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbContainer}>
          <Image style={thumb} source={{uri: thumbnail_image}} />
        </View>
        <View style={textContainer}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          <Text>Buy Album Now</Text>
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumb: {
    height: 50,
    width: 50
  },
  thumbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  titleStyle: {
    fontSize: 18
  }
}

export default AlbumDetail
