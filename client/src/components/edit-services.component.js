import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Hero from "./Hero";

export default class EditServices extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("/services/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    // choose from dropdwn of users/names in the array
    // name automatically set to first user in db
    axios.get("/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.name)
        });
      }
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const service = {
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    console.log(service);

    axios
      .post("/services/update/" + this.props.match.params.id, service)
      .then(res => console.log(res.data));
    // eventually connect to database

    window.location = "/";
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/1308746/pexels-photo-1308746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Beautify</h1>
            <h2>Edit Service</h2>
          </Hero>
          <Container>
            <br />
            <br />
            <h3>Edit Service</h3>
            <br />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name: </label>
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                >
                  {// for each user/provider its going to return this below
                  this.state.users.map(function(user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form=group">
                <label>Description: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>Duration (in minutes): </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Edit Service Log"
                  className="btn btn-primary"
                  defaultValue="Submit"
                />
              </div>
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}
