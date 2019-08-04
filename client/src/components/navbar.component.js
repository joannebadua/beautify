import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <Link to="/" className="navbar-brand text-white">
          BEAUTIFY
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link text-white">
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link text-white">
                Create Services Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link text-white">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/provider/new" className="nav-link text-white">
                Create Provider
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/edit/:id" className="nav-link text-white">
                Edit Service
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
