import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, FlatList, Alert, TouchableOpacity, NativeModules, Keyboard, AsyncStorage, Platform } from 'react-native';
import styles from '../styles/style.js';
class Task extends Component {
    constructor(props) {

        super(props)

        this.deleteTask = this.deleteTask.bind(this)

        this.state = {
            item_title: ''
        }

    }

    componentDidMount() {
    
        //this.deleteTask(this.props.item_title)
        this.setState({item_title: this.props.item_title})
    
    }

    deleteTask() {

        Alert.alert(this.props.item_title)

    }

    render() {
        //let item = {this.props.item_title}
        return (
            <View style={styles.singleTask}>
                <TextInput
                style={styles.singleTaskText}
                numberOfLines={1}>
                    {this.props.item_title}
                </TextInput>
                <TouchableOpacity
                style={styles.deleteButton}
                onPress={this.deleteTask}
                >
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


module.exports = Task;