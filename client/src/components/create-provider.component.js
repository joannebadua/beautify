import React, { Component } from "react";
import axios from "axios";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Hero from "./Hero";
import Navbar from "../components/Navbar";

export default class CreateProvider extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeDays = this.onChangeDays.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      bio: "",
      days: "Monday"
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeBio(e) {
    this.setState({
      bio: e.target.value
    });
  }

  onChangeDays(e) {
    this.setState({
      days: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const provider = {
      name: this.state.name,
      bio: this.state.bio,
      days: this.state.days
    };
    console.log(provider);

    axios.post("/provider/add", provider).then(res => console.log(res.data));
    // eventually connect to database
    this.setState({
      name: "",
      bio: "",
      days: ""
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Beautify</h1>
            <h2>Create Provider</h2>
          </Hero>
          <Container>
            <h3>Create New Provider</h3>
            <hr />
            <br />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label><h5>Provider Name: </h5></label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>

              <div className="form-group">
              <label><h5>Bio: </h5></label>
              <textarea
                type="textarea"
                className="form-control"
                value={this.state.bio}
                onChange={this.onChangeBio}
              />
              </div>

              <div className="form-group">
                <label><h5>Working Days: </h5></label>
                <br />
                <select value={this.state.days} onChange={this.onChangeDays}>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="t">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
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
