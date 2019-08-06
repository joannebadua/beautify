import React, { Component } from "react";

class LogIn extends Component {

    state = {
        username: "",
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
              username: this.state.username,
              password: this.state.password
           }),
           headers: new Headers({
              "Content-Type": "application/json"
           })
        })
           .then(response => {
              console.log(response);
              window.location.href = "/";
           })
           .catch(err => {
              console.log(err);
           });
  
        this.setState({
           username: "",
           password: ""
        });
     };


     render() {
        return (
           <div>
              <form>
                    <input
                       value={this.state.username}
                       name="username"
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
