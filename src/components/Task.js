import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, FlatList, Alert, TouchableOpacity, NativeModules, Keyboard, AsyncStorage, Platform } from 'react-native';
import styles from '../styles/style.js';
class Task extends Component {

    render() {
        return (
            <View style={styles.singleTask}>
                <Text style={styles.singleTaskText}>
                    {this.props.item_title}
                </Text>
                <TouchableOpacity style={styles.deleteButton}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


module.exports = Task;