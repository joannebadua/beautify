import React, { Component } from "react";
import axios from "axios";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Hero from "./Hero";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

export default class ProviderProfile extends Component {
  constructor(props) {
    super(props);


    this.state = {
      name: "",
      img: "",
      bio: "",
     
      services: []
    };
  }

  componentDidMount() {
    this.getProvidersInfo(this.props.id);
  }

//get id

getProvidersInfo(id ) {
  const providerUrl = `/api/providers/${id}`;
     axios.get(providerUrl).then(res => {
     this.setState({ 
       name: res.data.name,
        img: res.data.img, 
        bio: res.data.bio,
         start_time: res.data.start_time, 
         end_time: res.data.end_time
     });
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
            <h2>{this.state.name}</h2>
            <br />
            <h3>About </h3>
            <p> {this.state.bio} </p>
            <h3>Services</h3>
              {/* add from response */}

                 {/* add calendar */}
          </Container>
        </Wrapper>
      </div>
    );
  }
}
