import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/Layout/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out trash",
        completed: false,
      },
      {
        id: 2,
        title: "play minecraft",
        completed: false,
      },
      {
        id: 3,
        title: "learn React",
        completed: false,
      },
    ],
  };

  //toggles completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState(
      //spread operator and filter function
      { todos: [...this.state.todos.filter((todo) => todo.id !== id)] }
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos
          passingTodo={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
export default App;
