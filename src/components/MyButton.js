import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import themeStyles from '../styles/themeStyle.js';
import MyText from './MyText.js';

const MyButton = props => {
  let themeStyle = themeStyles();

  if (typeof props.iconName !== 'string') {
    return (
      <TouchableOpacity
        style={themeStyle.standardButton}
        onPress={props.pressed}
      >
        <MyText text={props.text} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={themeStyle.standardButton}
        onPress={props.pressed}
      >
        <Icon
          name={props.iconName}
          size={30}
          color="#aaa"
          style={themeStyle.text}
        />
      </TouchableOpacity>
    );
  }
};

export default MyButton;
