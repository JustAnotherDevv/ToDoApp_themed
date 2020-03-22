import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, FlatList, Alert, TouchableOpacity, NativeModules, Keyboard, AsyncStorage, Platform } from 'react-native';
import CheckBox from 'react-native-check-box'
import styles from '../styles/style.js';
class Task extends Component {
    constructor(props) {

        super(props)

        this.promptMe = this.promptMe.bind(this)

        this.state = {
            title: ''
        }

    }

    componentDidMount() {
        this.setState({title: this.props.item.title})
    }

    promptMe() {
        Alert.alert(this.props.item.title)
    }

    render() {
        return (
            <View
            style={styles.singleTask}>
                <TouchableOpacity
                style={styles.deleteButton}
                onPress={this.props.onPressDelete}
                >
                    <Text>X</Text>
                </TouchableOpacity>
                <TextInput
                style={styles.singleTaskText}
                numberOfLines={1}>
                    {this.props.item.title}
                </TextInput>
                    <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={this.props.setDone} 
        isChecked={this.props.item.done}
    />
            </View>
        )
    }

}


module.exports = Task;