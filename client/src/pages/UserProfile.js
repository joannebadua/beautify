import React, { Component } from "react";
import axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";
import AppContext from '../appContext';
import CreateServices from  "../components/create-service.component.js"
import { Link } from 'react-router-dom';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
    appts:[],
    booked:[],
    services:[],
    isCreated:false,
    isHidden: true
    };
  }
 
 handleClick() {
    this.setState({ 
    isHidden: false,
    isCreated: true
    })
 }

   toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  //    loadServices= ()=> {
  //   return axios
  //     .get(`/api/providers/1/services`)
  //     .then(res => {
  //       const services = res.data;

  //       this.setState(
  //         {
  //           services
  //         },
  //         console.log(res.data)
  //       );
  //     })
  //     .catch(err => console.log(err));
  // };



  render() {
    debugger;
    return (
      <div>
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/4614/woman-morning-bathrobe-bathroom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Beautify</h1>
            
          </Hero>
          <Container>
                  {/* <div><h2>Upcomming appointments</h2>
                      </div>
                      <div><h2>Booked services</h2>
                      </div>
                       <div><h2>My services</h2>
                      </div> */}
                      {/* <div>
                    
                       {this.state.isHidden||this.state.isCreated  ?
                       
                      <button className="btn" onClick={this.toggleHidden.bind(this)}>Add a service </button>
                      : null}
                        {!this.state.isHidden &&  <CreateServices providerId={this.context.providerId} isCreated={this.state.isCreated} handleClick={this.handleClick}/>}
                      
                  </div> */}
                  {this.state.isCreated ?<div><h2>created!
           
                        </h2> <br/> <br/></div> : null}
                  {!this.state.isHidden ?
                  <div>
                      <button className="btn" >Add another service </button>
                      <Link to="/services" className="btn" >Back to main </Link>
                  </div>
                      : 
                 <CreateServices providerId={this.context.providerId} isHidden={this.state.isHidden} handleClick={this.handleClick}/>
              }
          </Container>
        </Wrapper>
      </div>
    );
  }
}

UserProfile.contextType = AppContext;