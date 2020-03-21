import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    wholeList: {
        width: '90%',
        marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight,
        marginBottom: '15%',
        backgroundColor: '#111',
        flex: 1,
        justifyContent: 'flex-start'
    },
    addTaskContainer: {
        flexDirection: 'row',
        width: '100%',
        //backgroundColor: '#222',
        borderBottomColor: '#3F602B',
        borderBottomWidth: 2,     
    },
    taskInput: {
        height: 40,
        backgroundColor: '#111',
        flex: 7,
        margin: 10,
    },
    addButton: {
        width: 70,
        height: 40,
        backgroundColor: '#3F602B',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#111',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleTask: {
        flexDirection: 'row'
    },
    singleTaskText: {
        width: '90%',
        height: 30,
        backgroundColor: '#222',
        marginTop: '2%',
        marginLeft: '1%',
        overflow: 'hidden'
    },
    deleteButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });