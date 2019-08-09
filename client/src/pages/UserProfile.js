import React, { Component } from "react";
import axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

  
    axios.get("/api/providers/:id/appointments").then(res => console.log(res.data));
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
