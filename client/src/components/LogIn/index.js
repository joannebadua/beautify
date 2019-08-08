import React, { Component } from "react";
import axios from "axios";
import "./style.css";


class LogIn extends Component {

    state = {
        email: "",
        password: ""
     };

     handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
           [name]: value
        });
     };

     handleFormSubmit = event => {
        event.preventDefault();
  
        fetch("/auth/login", {
           method: "POST",
           credentials: "include",
           mode: "cors",
           body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
           }),
           headers: new Headers({
              "Content-Type": "application/json"
           })
        })
           .then(response => {
              console.log("LOGIN RESPONSE: ", response);
              window.location.href = "/";
           })
           .catch(err => {
              console.log(err);
           });
  
        this.setState({
           email: "",
           password: ""
        });
     };


     render() {
        return (
           <div>
              <form className = "login">
                    <input
                       value={this.state.email}
                       name="email"
                       onChange={this.handleInputChange}
                       type="text"
                       placeholder="Username"
                    />
                    <input
                       value={this.state.password}
                       name="password"
                       onChange={this.handleInputChange}
                       type="password"
                       placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}>
                       Log In
                    </button>
              </form>
           </div>
        );
     }
}

export default LogIn;
