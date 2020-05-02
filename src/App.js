import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "take out trash",
        completed: true
      },
      {
        id: 2,
        title: "play minecraft",
        completed: true
      },
      {
        id: 3,
        title: "learn React",
        completed: false
      }
    ]
  }

  render(){

  return (
      <div className="App">
        <Todos passingTodo = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
