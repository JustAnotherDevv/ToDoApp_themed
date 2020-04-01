import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useSelector, useDispatch } from 'react-redux';
import { changetheme } from '../redux/notesApp.js';
import styles from '../styles/style.js';
import themeStyles from '../styles/themeStyle.js';
import Task from './Task.js';
import MyText from './MyText.js';
import MyButton from './MyButton.js';

const Settings = ({ navigation }) => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const changeTheme = theme => dispatch(changetheme(theme));

  let themeStyle = themeStyles();

  const isThemeSelected = themeButton => {
    if (themeButton === theme) {
      return 'check';
    }
  };

  return (
    <View style={themeStyle.container}>
      <MyText text="Settings" />
      <MyText text="Select theme:" />
      <MyButton
        text="black"
        iconName={isThemeSelected('black')}
        pressed={() => {
          changeTheme('black');
        }}
      />
      <MyButton
        text="white"
        iconName={isThemeSelected('white')}
        pressed={() => {
          changeTheme('white');
        }}
      />
    </View>
  );
};

export default Settings;
