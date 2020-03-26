import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  Button,
  FlatList,
  Alert,
  TouchableOpacity,
  NativeModules,
  Keyboard,
  AsyncStorage,
  Platform
} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from '../styles/style.js';
import Task from './Task.js';

const TaskList = () => {
  let tasksArr = [
    {
      title: 'sample note',
      done: false
    },
    {
      title: 'another note',
      done: true
    },
    {
      title: 'I am just a test',
      done: true
    },
    {
      title: 'me too',
      done: false
    }
  ];

  const [tasks, setTasks] = useState();
  const [text, setText] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortType, setSortType] = useState('date');

  useEffect(() => {
    //Alert.alert('rerendered');
    setTasks([...tasksArr]);
  }, []);

  const addTask = () => {
    if (text !== '') {
      let tempArr = tasks;
      tempArr.push({ title: text, done: false });
      // passFilterSortTasks(filterType, sortType);
      setTasks(tempArr);
      setText('');
    } else Alert.alert("Note title can't be empty");
  };

  let deleteTask = index => {
    //bug where if tasks are sorted by finished or unfinished and 1 is deleted, standard order in saved array is changed and after attempt to sort by date array is still sorted by previous configuration when task was removed
    let tempArr = [...tasks];
    tempArr.splice(index, 1);
    setTasks(tempArr);
    //return passFilterSortTasks(filterType, sortType);
  };

  let switchCheckbox = index => {
    let tempArr = [...tasks];
    tempArr[index].done = !tempArr[index].done;
    setTasks(tempArr);
    return passFilterSortTasks(filterType, sortType);
  };

  const changeFilterType = () => {
    const newType =
      filterType === 'all'
        ? 'unfinished'
        : filterType === 'unfinished'
        ? 'finished'
        : 'all';
    setFilterType(newType);
    passFilterSortTasks(newType, sortType);
  };

  const changeSortType = () => {
    const newType =
      sortType === 'date'
        ? 'unfinished'
        : sortType === 'unfinished'
        ? 'finished'
        : 'date';
    setSortType(newType);
    passFilterSortTasks(filterType, newType);
  };

  const passFilterSortTasks = (filterType, sortType) => {
    let filteredList = [...tasks],
      len = filteredList.length;

    if (sortType === 'unfinished') {
      filteredList = filterIt(sortType, filteredList).concat(
        filterIt('finished', filteredList)
      );
    } else if (sortType === 'finished') {
      filteredList = filterIt(sortType, filteredList).concat(
        filterIt('unfinished', filteredList)
      );
    } else filteredList = [...tasks];

    filteredList = filterIt(filterType, filteredList);

    setTasks(filteredList);
  };

  const filterIt = (filterType, filteredList) => {
    if (filterType === 'unfinished') {
      return filteredList.filter(x => !x.done);
    } else if (filterType === 'finished')
      return filteredList.filter(x => x.done);
    return filteredList;
  };

  return (
    <View style={styles.wholeList}>
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.taskInput}
          value={text}
          placeholder="Type note here"
          onChangeText={data => setText(data)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.standardEventText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addTaskContainer}>
        <Text style={styles.standardEventText}>Filter: </Text>
        <TouchableOpacity style={styles.addButton} onPress={changeFilterType}>
          <Text numberOfLines={1} style={styles.standardEventText}>
            {filterType}
          </Text>
        </TouchableOpacity>
        <Text style={styles.standardEventText}>Sort by: </Text>
        <TouchableOpacity style={styles.addButton} onPress={changeSortType}>
          <Text numberOfLines={1} style={styles.standardEventText}>
            {sortType}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        //keyExtractor={(index) => index.toString()}
        renderItem={({ item, index }) => (
          <Task
            item={{
              title: item.title,
              done: item.done,
              index: index
            }}
            onPressDelete={() => deleteTask(index)}
            setDone={() => switchCheckbox(index)}
            show={item => Alert.alert(tasks[index].title)}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
