import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.passingTodo.map((todo) => (
            <TodoItem key= {todo.id} todo = {todo} />
        ));
    }
}

Todos.propTypes = {
    passingTodo : PropTypes.array.isRequired
}

export default Todos;