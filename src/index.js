import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [
      'Fazer café',
      'Estuda o GoNative',
    ],
  };

  addTodo = () => {
    this.setState({ todos: ['Estudar Javascript!'] });
  }

  render() {
    return (
    <View style={styles.container}>
        { this.state.todos.map( todo => <Todo title={todo} />)}
        <Button title="Adicionar Todo" onPress={this.addTodo}/>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },    
});
