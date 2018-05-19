import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import Jumbotron from './Jumbotron';
import { Redirect } from 'react-router';

class AddProject extends Component {
  static defaultProps = {
    categories: ["Web Design","Mobile Development","Web Development"]
  };

  state = {
    navigateProjects: false,
    navigateTodos: false
  };

  render() {
    const { navigateProjects, navigateTodos } = this.state;
    if (navigateProjects) {
      return <Redirect to="/" push={true} />
    } else if (navigateTodos) {
      return <Redirect to="/todos" push={true} />
    };

    let categoryOptions = this.props.categories.map(c=>{
      return <option key={c} value={c}>{c}</option>
    });
    return (
      <div>
        <Jumbotron title='Add'/>
        <div className="container">
          <div className="card border-primary mb-3">
            <div className="card-header text-primary">
              <h3>Add Project</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmitProject.bind(this)}>
                <div className="form-group row" >
                  <label className="col-sm-2 col-form-label">Title</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Enter new project title" ref="title" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Category</label>
                  <div className="col-sm-10">
                    <select ref="category" className="custom-select">
                      {categoryOptions}
                    </select>
                  </div>
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
                <input type="button" className="btn btn-success ml-2" value="View Projects"
                  onClick={() => this.setState({ navigateProjects: true })}/>
              </form>
            </div>
          </div>

          <div className="card border-warning">
            <div className="card-header text-warning">
              <h3>Add Todo</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmitTodo.bind(this)}>
                <div className="form-group row" >
                  <label className="col-sm-2 col-form-label">Todo Task</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="Enter new task" ref="task" required />
                  </div>
                </div>
                <input type="submit" className="btn btn-warning" value="Submit" />
                <input type="button" className="btn btn-success ml-2" value="View Todos"
                  onClick={() => this.setState({ navigateTodos: true })}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  handleSubmitProject(e){
    e.preventDefault();
    let p ={};
    p.id = uuid.v4();
    p.title = this.refs.title.value;
    p.category = this.refs.category.value;
    this.props.onAddProject(p);
  }

  handleSubmitTodo(e){
    e.preventDefault();
    let p ={};
    p.id = uuid.v4();
    p.title = this.refs.task.value;
    this.props.onAddTodo(p);
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  onAdd: PropTypes.func
}

export default AddProject;
