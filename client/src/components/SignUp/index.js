import React, { Component } from "react";
import "./style.css";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirm: ""
    }

    handleInputChange = event => {
        const {
            name,
            value
        } = event.target;
        
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password && this.state.passwordConfirm) {
            if (this.state.password === this.state.passwordConfirm) {
                fetch("/auth/signup", {
                    method: "POST",
                    credentials: "include",
                    mode: "cors",
                    body: JSON.stringify({
                        password: this.state.password,
                        email: this.state.email
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                })  
                    .then(response => {
                        console.log("REACT RESPONSE", response);
                        window.location.href = "/";
                    })
                    .catch(err => console.log(err));
                
                this.setState({
                    email: "",
                    passowrd: "",
                    passwordConfirm: ""
                });
            } else {
                console.log("ERROR: Passwords must match!")
            }
        } else {
            console.log("ERROR: Field not completed")
        }
    };

    render() {

        return (
           <div>
              <form className = "signup">
                 <input className = "email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="email"
                    type="text"
                 />
                 <input className = "password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                 />
                 <input className = "confirm"
                    value={this.state.passwordConfirm}
                    onChange={this.handleInputChange}
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    type="password"
                 />
                 <button onClick={this.handleFormSubmit} className = "button">
                    Sign Up
                 </button>
              </form>
           </div>
        );
     }
}

export default SignUp;
