import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand text-white">BEAUTIFY</Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link text-white">Services</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link text-white">Add Service</Link>
                </li>
                {/* <li className="navbar-item">
                    <Link to="/user" className="nav-link text-white">Create User</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/provider" className="nav-link text-white">Create Provider</Link>
                </li> */}
            </ul>
            </div>
            </nav>
        );
    }
}






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
