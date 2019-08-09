import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Container from "../Container";
import Wrapper from "../Wrapper";
// import Row from "../Row";
import Hero from "../Hero";
// import Sidenav from "../Sidenav";
import ProviderCard from "../ProviderCard";
import IconCard from "../Icons";
// import Navbar from "../Navbar";
import NavbarComp from "../Navbar";
import Slider from "../Slider";
import AppContext from '../../appContext';

export default class ServicesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
       service: [],
       services: [],
      providers: []
    };
  }

  loadProviders = serviceId => {
    return axios
      .get(`/api/services/${serviceId}/providers`)
      .then(res => {
        const providers = res.data;

        this.setState(
          {
            providers
          },
          console.log(res.data)
        );
      })
      .catch(err => console.log(err));
  };


  findServicesForCategory = category => {
    debugger
    return axios
      .get(`/api/services/category/${category}`)
      .then(res => {
      
        this.setState({
          services: res.data
        });
      })
      .catch(err => console.log(err));
  };

 scrollElementIntoViewIfNeeded(domNode) {
    var containerDomNode = React.findDOMNode(this);
    // Determine if `domNode` fully fits inside `containerDomNode`.
    // If not, set the container's scrollTop appropriately.
  }

  render() {
    return (
      <div>

        <NavbarComp />
        <Slider />
        <Wrapper>
          
          {/* <Hero backgroundImage="https://images.pexels.com/photos/4614/woman-morning-bathrobe-bathroom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Services</h1>
            <h2>Choose A Service Below</h2>
          </Hero> */}

        <main>
  <IconCard findServicesForCategory={this.findServicesForCategory} />
            <Container>

             <br />
               <h1>Choose A Provider</h1>
               <hr />
              <br />
               {this.state.services.map(service => {
                 const provider = service.providers[0];
                return <ProviderCard

                  key={provider.id}
                  id={provider.id}
                  name={provider.name}
                 service={service}
    
               />})
              }
            
            </Container>
         
         </main>
        </Wrapper>
      </div>
    );
  }
}


ServicesList.contextType = AppContext;