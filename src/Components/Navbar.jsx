import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">React & Bootstrap 4</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact activeStyle={{color: 'green'}}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addproject" activeStyle={{color: 'green'}}>Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todos" activeStyle={{color: 'green'}}>Todos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
