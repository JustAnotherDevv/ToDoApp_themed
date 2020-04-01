import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import themeStyles from '../styles/themeStyle.js';

const MyText = props => {
  let themeStyle = themeStyles();
  if (typeof props.iconName !== 'string') {
    return (
      <Text numberOfLines={1} style={themeStyle.text}>
        {props.text}
      </Text>
    );
  } else {
    return (
      <Icon
        name={props.iconName}
        size={30}
        color="#aaa"
        style={themeStyle.text}
      />
    );
  }
};
export default MyText;
