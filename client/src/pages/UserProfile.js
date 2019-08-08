import React, { Component } from "react";
import axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";

export default class UserProfile extends Component {
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
            
          </Hero>
          <Container>
            
          </Container>
        </Wrapper>
      </div>
    );
  }
}
