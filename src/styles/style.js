import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  addTaskContainer: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#222',
    borderBottomWidth: 2,
    justifyContent: 'space-around'
  },
  taskInput: {
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#222',
    flex: 7,
    margin: 5,
    paddingLeft: 8
  },
  listStyler: {
    width: '100%'
  },
  singleTask: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  singleTaskText: {
    flex: 10,
    flexDirection: 'row'
  },
  deleteButton: {
    flex: 1,
    paddingHorizontal: 10
  }
});
