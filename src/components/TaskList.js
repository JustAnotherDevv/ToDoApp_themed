import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  addtask,
  deletetask,
  settext,
  switchcheckbox
} from '../redux/notesApp.js';
import styles from '../styles/style.js';
import themeStyles from '../styles/themeStyle.js';
import Task from './Task.js';
import MyText from './MyText.js';

const TaskList = ({ navigation }) => {
  const [text, setText] = useState('');

  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();
  const addNote = note => dispatch(addtask(note));
  const deleteNote = id => dispatch(deletetask(id));
  const switchCheckbox = id => dispatch(switchcheckbox(id));

  let themeStyle = themeStyles();

  const addTask = () => {
    if (text !== '') {
      addNote(text);
      setText('');
    } else Alert.alert("Note title can't be empty");
  };

  let deleteTask = index => {
    deleteNote(index);
  };

  let setCheckbox = index => {
    switchCheckbox(index);
  };

  return (
    <View style={themeStyle.container}>
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.taskInput}
          value={text}
          placeholder="Type note here"
          underlineColorAndroid="transparent"
          onChangeText={data => setText(data)}
        />
        <TouchableOpacity style={themeStyle.standardButton} onPress={addTask}>
          <MyText text="ADD" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.listStyler}
        data={tasks}
        renderItem={({ item, index }) => (
          <Task
            item={{
              title: item.title,
              done: item.done
            }}
            onPressDelete={() => deleteTask(index)}
            setDone={() => setCheckbox(index)}
            show={item => Alert.alert(tasks[index].title)}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
