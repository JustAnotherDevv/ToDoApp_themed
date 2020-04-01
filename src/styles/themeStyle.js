import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

import { useSelector, useDispatch } from 'react-redux';
import { changetheme } from '../redux/notesApp.js';

export const Colors = {
  dark: '#111',
  light: '#fff',
  darkText: '#000',
  lightText: '#aaa',
  darkButton: '#333',
  lightButton: '#222'
};

const containerBase = {
  marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
  flex: 1,
  alignItems: 'center'
};

const textBase = {
  alignSelf: 'center'
};

const buttonBase = {
  minWidth: 70,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#111',
  margin: 10,
  padding: 5,
  height: 35
};

const blackStylesheet = StyleSheet.create({
  container: {
    ...containerBase,
    backgroundColor: Colors.dark
  },
  text: {
    ...textBase,
    color: Colors.lightText
  },
  standardButton: {
    ...buttonBase,
    backgroundColor: Colors.lightButton
  }
});

const whiteStylesheet = StyleSheet.create({
  container: {
    ...containerBase,
    backgroundColor: Colors.light
  },
  text: {
    ...textBase,
    color: Colors.darkText
  },
  standardButton: {
    ...buttonBase,
    backgroundColor: Colors.darkButton
  }
});

export default function themeStyles() {
  const theme = useSelector(state => state);

  if (theme.theme === 'black') return blackStylesheet;
  else if (theme.theme === 'white') return whiteStylesheet;
}
