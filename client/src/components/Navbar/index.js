<<<<<<< HEAD
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
                Add Service
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link text-white">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/providers/new" className="nav-link text-white">
                Create Provider
              </Link>
            </li>
          </ul>
        </div>
      </nav>
=======
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./style.css";
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
 } from 'reactstrap';

export default class NavbarComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="teal" light expand="md">
          <NavbarBrand href="/">Beautify</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/services/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/create">Post A Service</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/providers">Become A Provider</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
>>>>>>> 91a7de92e942f2c5a4af7621de49a9591adffeab
    );
  }
}

<<<<<<< HEAD
=======


// export default class NavbarComp extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg">
//             <Link to="/" className="navbar-brand text-white">BEAUTIFY</Link>
//             <div className="collapse navbar-collapse">
//             <ul className="navbar-nav mr-auto">
//                 <li className="navbar-item">
//                     <Link to="/" className="nav-link text-white">Services</Link>
//                 </li>
//                 <li className="navbar-item">
//                     <Link to="/create" className="nav-link text-white">Post A Service</Link>
//                 </li>
//                 {/* <li className="navbar-item">
//                     <Link to="/user" className="nav-link text-white">Create User</Link>
//                 </li> */}
//                 <li className="navbar-item">
//                     <Link to="/provider" className="nav-link text-white">Become A Provider</Link>
//                 </li>
//             </ul>
//             </div>
//             </nav>
//         );
//     }
// }






>>>>>>> 91a7de92e942f2c5a4af7621de49a9591adffeab
// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <Link className="navbar-brand" to="/">
//         Beautify
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === "/" || window.location.pathname === "/about"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/Main"
//               className={window.location.pathname === "/main" ? "nav-link active" : "nav-link"}
//             >
//               Main
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/Provider"
//               className={window.location.pathname === "/provider" ? "nav-link active" : "nav-link"}
//             >
//               Provider
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/Settings"
//               className={window.location.pathname === "/settings" ? "nav-link active" : "nav-link"}
//             >
//               Settings
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
