import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import Jumbotron from './Jumbotron';

class Todos extends Component {
  render() {
    let todoItems = this.props.todos.map(p => {
      return <TodoItem todo={p} key={p.title} onDelete={this.handleDelete.bind(this)}/>
    });

    return (
      <div>
        <Jumbotron title='Todos'/>
        <div className="container">
          <div className="card border-danger">
            <div className="card-header">
              <h3>My Todos</h3>
            </div>
            <div className="card-body">
              {todoItems}
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleDelete(id){
    this.props.onDeleteTodos(id)
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  onDeleteTodos: PropTypes.func
}


export default Todos;
