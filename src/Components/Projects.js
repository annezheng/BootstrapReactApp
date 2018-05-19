import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import Jumbotron from './Jumbotron';

class Projects extends Component {
  render() {
    let projectItems = this.props.projects.map(p => {
      return <ProjectItem project={p} key={p.title} onDelete={this.handleDelete.bind(this)}/>
    });

    return (
      <div>
        <Jumbotron title='Projects'/>
        <div className="container">
          <div className="card border-success">
            <div className="card-header text-success">
              <h3>My Projects</h3>
            </div>
            <div className="card-body">
              {projectItems}
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleDelete(id){
    this.props.onDeleteProjects(id)
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDeleteProjects: PropTypes.func
}


export default Projects;
