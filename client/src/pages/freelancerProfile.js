import React, { Component } from "react";
import axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import ServiceCard from "../components/ServiceCard";

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
    this.getProvidersInfo(this.props.match.params.id);
  //  this.getAllServices(this.props.match.params.id);
  }


// getAllServices=(id)=>{
//     var  url = `/api/providers/${id}/services`
// axios.get(url).then(res => {
//     const result= res[0];
//      this.setState({ 
//        name: result.name,
//         img: result.img, 
//         bio: result.bio,
//         description:result.description
        
//      });
//      });
// }


getProvidersInfo = (id)=> {
  const providerUrl = `/api/providers/${id}`;
debugger;
     axios.get(providerUrl).then(res => {
   //  console.log(res.data)
     this.setState({ 
       name: res.data[0].name,
        img: res.data[0].img, 
        bio: res.data[0].bio,
        services: res.data[0].services
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

{this.state.services.map(service => { 
    return <ServiceCard name = {service.name} description = {service.description} duration = {service.duration} price = {service.price}
                 
 />
})}
              {/* add from response */}

                 {/* add calendar */}
          </Container>
        </Wrapper>
      </div>
    );
  }
}
