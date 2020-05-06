import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/Layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/Pages/About";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
    axios.get(url).then((res) => this.setState({ todos: res.data }));
  }

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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  addTodo = (title) => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    axios
      .post(url, {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    passingTodo={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
