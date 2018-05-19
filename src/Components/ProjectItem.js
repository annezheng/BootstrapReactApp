import React, { Component } from 'react';
import PropTypes from 'prop-types';

const iconStyle = {
  fontSize: '1.5em',
  color: '#28a745',
  position: 'absolute',
  right: 10
};

class ProjectItem extends Component {
  render() {
    return (
      <li className="list-group-item" >
        {this.props.project.title} - {this.props.project.category}
          <a href={null}>
            <i style={iconStyle} className="fas fa-trash-alt fa-sm "
              onClick={this.handleDeleteItem.bind(this, this.props.project.id)}>
            </i>
          </a>
      </li>
    );
  }

  handleDeleteItem(id){
    this.props.onDelete(id)
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
