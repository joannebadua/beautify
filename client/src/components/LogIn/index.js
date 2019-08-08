import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Hero from "../Hero";


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
         <Hero backgroundImage="https://images.pexels.com/photos/91147/pexels-photo-91147.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" height = "350px">
         <h1>Login</h1>
         </Hero>
           <div className = "background">
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
           </div>
        );
     }
}

export default LogIn;
