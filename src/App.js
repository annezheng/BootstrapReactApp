import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import Navbar from './Components/Navbar';
import uuid from 'uuid';
import $ from 'jquery';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data})
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getProjects(){
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    })
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div >
            <Route exact path="/" render={() => (
              <Projects projects={this.state.projects} onDeleteProjects={this.handleDeleteProjects.bind(this)}/>
            )}/>
            <Route path="/addproject" render={() => (
              <AddProject onAddProject={this.handleAddProject.bind(this)}
                onAddTodo={this.handleAddTodo.bind(this)}/>
            )}/>
            <Route path="/todos" render={()=> (
              <Todos todos={this.state.todos} onDeleteTodos={this.handleDeleteTodos.bind(this)}/>
            )}/>
          </div>
        </div>
      </Router>
    )
  }

  handleAddProject(item){
    let updateProjects = this.state.projects;
    updateProjects.unshift(item);
    this.setState({projects: updateProjects});
  }

  handleAddTodo(item){
    let updateTodos = this.state.todos;
    updateTodos.unshift(item);
    this.setState({todos: updateTodos});
  }

  handleDeleteProjects(id){
    let projects = this.state.projects;
    let index = projects.findIndex(p => p.id === id)
    projects.splice(index, 1);
    this.setState({projects: projects});

  }

  handleDeleteTodos(id){
    let todoItems = this.state.todos.filter(p => p.id !== id);
    this.setState({todos: todoItems});
  }
}

export default App;
