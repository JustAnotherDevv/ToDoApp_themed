import React, { Component, useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from '../styles/style.js';
import themeStyles from '../styles/themeStyle.js';
import MyText from './MyText.js';
const Task = props => {
  const [texthere, setTexthere] = useState('');

  useEffect(() => {
    setTexthere(props.item.title);
  }, []);

  let themeStyle = themeStyles();

  return (
    <View style={styles.singleTask}>
      <CheckBox
        style={styles.deleteButton}
        onClick={props.setDone}
        isChecked={props.item.done}
        checkBoxColor={themeStyle.text.color}
      />
      <TouchableOpacity style={styles.singleTaskText} onPress={props.show}>
        <MyText text={props.item.title} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={props.onPressDelete}
      >
        <MyText iconName="delete" />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
