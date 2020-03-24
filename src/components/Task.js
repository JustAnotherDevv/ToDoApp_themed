import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, FlatList, Alert, TouchableOpacity, NativeModules, Keyboard, AsyncStorage, Platform } from 'react-native';
import CheckBox from 'react-native-check-box'
import styles from '../styles/style.js';
export default class Task extends Component {
    constructor(props) {

        super(props)

        //this.promptMe = this.promptMe.bind(this)
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
                <TouchableOpacity
                style={styles.singleTaskText}
                onPress={this.props.show}>
                    <Text
                    style={styles.singleTaskText}
                    numberOfLines={1}>
                        {this.props.item.title}
                    </Text>
                </TouchableOpacity>
                    <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={this.props.setDone} 
        isChecked={this.props.item.done}
                />
            </View>
        )
    }

}