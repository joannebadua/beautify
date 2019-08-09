import React, { Component } from "react";
import axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";
import AppContext from '../appContext';
import CreateServices from  "../components/create-service.component.js"

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
    appts:[],
    booked:[],
    isCreated:false,
    isHidden: true  
    };
  }
 
 handleClick() {
    this.setState({ 
     isHidden: true,
      isCreated: true
    })
 }

   toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
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
                  <div><h2>Upcomming appointments</h2>
                      </div>
                      <div><h2>Booked services</h2>
                      </div>
                       <div><h2>My services</h2>
                      </div>
                      <div>
                      
                      {/* <button className="btn" onClick={this.toggleHidden.bind(this)}>Add a service </button> */}

                       {this.state.isHidden||this.state.isCreated  ?
                       
                      <button className="btn" onClick={this.toggleHidden.bind(this)}>Add a service </button>
                      : null}
                        {!this.state.isHidden &&  <CreateServices providerId={this.context.providerId} isCreated={this.state.isCreated} handleClick={this.handleClick}/>}
                      
                  </div>
                
          </Container>
        </Wrapper>
      </div>
    );
  }
}

UserProfile.contextType = AppContext;