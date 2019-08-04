import React, { Component } from "react";
import axios from "axios";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Hero from "./Hero";

export default class CreateProvider extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const provider = {
      name: this.state.name
    };
    console.log(provider);

    axios.post("/providers/add", provider).then(res => console.log(res.data));
    // eventually connect to database
    this.setState({
      name: ""
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Beautify</h1>
            <h2>Create Provider</h2>
          </Hero>
          <Container>
            <br />
            <br />
            <h3>Create New Provider</h3>
            <br />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Provider Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Create Provider"
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
