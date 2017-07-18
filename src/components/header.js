//import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';


//make a Component
const Header = (props) => { //need to props js object that needs property
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// new object with styling of component
const styles = {

  viewStyle: {
      backgroundColor: '#f8f8f8',
      justifyContent: 'center', // vertical
      alignItems: 'center', //horizontal
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .2,
      position: 'relative',
      paddingBottom: 15
  },

  textStyle: {
    fontSize: 20
  }
};
//make component available to other parts of the AppRegistry
export default Header;
