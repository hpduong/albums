import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//function component just to display the already pulled data from AlbumList.js

const AlbumDetail = ( {album} ) => {
  const { title, artist, thumbnail_image, image, } = album; //destructure from album
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles; //destructure
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image}} />
      </CardSection>

      <CardSection>
        <Button />
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: { //to display images
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: { //add space around image
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
