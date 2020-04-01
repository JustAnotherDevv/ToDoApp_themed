import React, { useState, useEffect } from 'react';
import { View, Platform, Keyboard } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import store from './src/redux/store.js';
import styles from './src/styles/style.js';
import themeStyles from './src/styles/themeStyle.js';
import TaskList from './src/components/TaskList.js';
import Settings from './src/components/Settings.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </StoreProvider>
  );
}

function MyTabs() {
  const [visible, setVisible] = useState(true);
  let themeStyle = themeStyles();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: themeStyle.text.color,
        activeBackgroundColor: themeStyle.container.backgroundColor,
        inactiveBackgroundColor: themeStyle.container.backgroundColor,
        safeAreaInsets: 'never',
        showLabel: false,
        keyboardHidesTabBar: true
      }}
    >
      <Tab.Screen
        style={themeStyle.container}
        name="Tasks"
        component={TaskList}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

/*
const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Tasks" component={TaskList} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
*/
