//import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';


//make a Component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={ textStyle }>Albums!</Text>
    </View>
  );
};

// new object with styling of component
const styles = {

  viewStyle: {
      backgroundColor: '#f8f8f8'
  },

  textStyle: {
    fontSize: 20
  }
};
//make component available to other parts of the AppRegistry
export default Header;
