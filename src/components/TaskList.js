import React, {Component} from 'react'
import { StyleSheet, View, Image, TextInput, Text, Button, FlatList, Alert, TouchableOpacity, NativeModules, Keyboard, AsyncStorage, Platform } from 'react-native'
import CheckBox from 'react-native-check-box'
import styles from '../styles/style.js'
import Task from './Task.js'

export default class TaskList extends Component {
    constructor(props) {

        super(props)

        this.array = [{
            title: 'sample note', done: false
        },
        {
            title: 'another note', done: true
        },
        {
            title: 'I am just a test', done: true
        },
        {
            title: 'me too', done: false
        }]

        this.state = {
            tasks: [],
            text: '',
            filterType: 'all',
            sortType: 'date'
        }
    }
	
    componentDidMount() {
        this.setState({ tasks: [...this.array] })
    }

    addTask = () => {
        if(this.state.text !== '') {
            this.array.push({title : this.state.text, done: false})
            this.passFilterSortTasks(this.state.filterType, this.state.sortType)
            //this.setState({ tasks: [...this.array] })
            this.setState({text: ''})
        }else
        Alert.alert('Note title can\'t be empty')
    }

    deleteTask = index => {
                this.array = this.state.tasks
                this.array.splice(index, 1)
                this.setState({tasks: this.array})
    }

    switchCheckbox = index => {
        let tempArr = this.state.tasks
        tempArr[index].done = !tempArr[index].done
        return this.passFilterSortTasks(this.state.filterType, this.state.sortType)
        //this.setState({tasks: this.array})
    }

    changeFilterType = () => {
        const oldType = this.state.filterType
        const newType = (oldType === 'all') ? 'unfinished' :  (oldType === 'unfinished') ? 'finished' : 'all'
        this.setState({filterType: newType})
        this.passFilterSortTasks(newType, this.state.sortType)
    }

    changeSortType = () => {
        const newType = (this.state.sortType === 'date') ? 'unfinished' :  (this.state.sortType === 'unfinished') ? 'finished' : 'date'
        this.setState({sortType: newType})
        this.passFilterSortTasks(this.state.filterType, newType)
    }

    passFilterSortTasks = (filterType, sortType) => {
        let filteredList = this.array, len = filteredList.length

        if(sortType === 'unfinished') {
            filteredList = this.filterIt(sortType, filteredList).concat(this.filterIt('finished', filteredList))
        }else if(sortType === 'finished') {
            filteredList = this.filterIt(sortType, filteredList).concat(this.filterIt('unfinished', filteredList))
        }else filteredList = this.array

        filteredList = this.filterIt(filterType, filteredList)

        this.setState({tasks: filteredList})
        }

    filterIt = (filterType, filteredList) => {
        if(filterType === 'unfinished') {
            filteredList = filteredList.filter(x => (x.done === false) ? x : false )
        }else if(filterType === 'finished') {
            filteredList = filteredList.filter(x => (x.done === true) ? x : false)
        }else filteredList = filteredList
            //this.setState({tasks: filteredList})
            return filteredList
    }

    render() {
        return (
            <View style={styles.wholeList}>
                <View style={styles.addTaskContainer}>  
                    <TextInput style={styles.taskInput}
                        value={this.state.text}
                        placeholder='Type note here'
                        onChangeText={data => this.setState({ text: data })}
                    />
                    <TouchableOpacity
                    style={styles.addButton}
                    onPress={this.addTask}>
                        <Text style={styles.standardEventText}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.addTaskContainer}>
                    <Text style={styles.standardEventText}>Filter: </Text>
                    <TouchableOpacity 
                    style={styles.addButton}
                    onPress={this.changeFilterType}>
                        <Text numberOfLines={1} style={styles.standardEventText}>{this.state.filterType}</Text>
                    </TouchableOpacity>
                    <Text style={styles.standardEventText}>Sort by: </Text>
                    <TouchableOpacity 
                    style={styles.addButton}
                    onPress={this.changeSortType}>
                        <Text numberOfLines={1} style={styles.standardEventText}>{this.state.sortType}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.tasks}
                    //keyExtractor={(index) => index.toString()}
                    renderItem={({ item, index }) => <Task item={{
                        title: item.title,
                        done: item.done,
                        index: index
                    }} onPressDelete={() =>this.deleteTask(index)}
                    setDone={() =>this.switchCheckbox(index)}
                    show={(item) => Alert.alert(this.state.tasks[index].title)} />}
                />
            </View>
        )
    }

}