import React, { Component } from "react";
import axios from "axios";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Hero from "./Hero";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };
    console.log(user);

    axios.post("/users/add", user).then(res => console.log(res.data));
    // eventually connect to database
    this.setState({
      username: ""
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/4614/woman-morning-bathrobe-bathroom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Beautify</h1>
            <h2>Create User</h2>
          </Hero>
          <Container>
            <br />
            <br />
            <h3>Create New User</h3>
            <br />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Create User"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}
