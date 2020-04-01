import { combineReducers } from 'redux';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_TEXT = 'SET_TEXT';
export const SWITCH_CHECKBOX = 'SWITCH_CHECKBOX';
const CHANGE_THEME = 'CHANGE_THEME';

const initialState = [];

let appTheme = 'black';

export function addtask(note) {
  return {
    type: ADD_NOTE,
    title: note
  };
}

export function deletetask(id) {
  return {
    type: DELETE_NOTE,
    payload: id
  };
}

export function switchcheckbox(id) {
  return {
    type: SWITCH_CHECKBOX,
    payload: id
  };
}

export const changetheme = newtheme => {
  return {
    type: CHANGE_THEME,
    theme: newtheme
  };
};

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          title: action.title,
          done: false
        }
      ];

    case DELETE_NOTE:
      let newArray = [...state];
      newArray.splice(action.payload, 1);
      return newArray;

    case SWITCH_CHECKBOX:
      let switchArray = [...state];
      switchArray[action.payload].done = !switchArray[action.payload].done;
      return switchArray;

    default:
      return state;
  }
}

export function themeSwitcher(state = appTheme, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return action.theme;

    default:
      return state;
  }
}

const todoApp = combineReducers({
  tasks: notesReducer,
  theme: themeSwitcher
});

export default todoApp;
