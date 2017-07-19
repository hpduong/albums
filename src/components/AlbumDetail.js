import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//function component just to display the already pulled data from AlbumList.js

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>  
    </Card>
  );
};

export default AlbumDetail;
