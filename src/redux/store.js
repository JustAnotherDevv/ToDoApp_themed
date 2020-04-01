import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import todoApp from './notesApp.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, todoApp);

const store = createStore(pReducer);
export const persistor = persistStore(store);

export default store;
