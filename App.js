import React from 'react';
import { View } from 'react-native';
import styles from './src/styles/style.js';
import TaskList from './src/components/TaskList.js';

export default function App() {
  return (
    <ErrorBoundary>
    <View style={styles.container}>
      <TaskList/>
    </View>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    logErrorToService(error, info.componentStack)
  }

  render () {
    return this.state.hasError
      ? <FallbackComponent />
      : this.props.children
  }
}

