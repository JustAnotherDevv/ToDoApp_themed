import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, FlatList, Alert, TouchableOpacity, NativeModules, Keyboard, AsyncStorage, Platform } from 'react-native';
import styles from '../styles/style.js';
import Task from './Task.js';

class TaskList extends Component {
    constructor(props) {

        super(props)

        this.array = [{
            title: 'sample note'
        }
        ]

        this.state = {
            tasks: [],
            text: ''
        }
    }
	
    componentDidMount() {
    
        this.setState({ tasks: [...this.array] })
    
    }

    addTask = () => {

            this.array.push({title : this.state.text});
        
            this.setState({ tasks: [...this.array] })

    }

    render() {
        return (
            <View style={styles.wholeList}>
                <View style={styles.addTaskContainer}>
                    <TextInput style={styles.taskInput}
                        placeholder="Enter Value Here"
                        onChangeText={data => this.setState({ text: data })}
                    />
                    <TouchableOpacity
                    style={styles.addButton}
                    onPress={this.addTask}>
                        <Text>ADD</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.tasks}
                    //keyExtractor={(index) => index.toString()}
                    //<Task item_text={item.text} />
                    //<Text> {item.title} </Text>
                    renderItem={({ item, index }) => <Task item_title={item.title} /> }
                />
            </View>
        )
    }

}


module.exports = TaskList;