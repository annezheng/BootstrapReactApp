import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
        <div className="input-group mb-3">
          <span className="form-control">{this.props.todo.title}</span>
          <div className="input-group-append">
           <button className="btn btn-outline-danger" type="button"
             onClick={this.handleDeleteItem.bind(this, this.props.todo.id)}>X</button>
          </div>
        </div>
    );
  }

  handleDeleteItem(id){
    this.props.onDelete(id)
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func
}

export default TodoItem;
