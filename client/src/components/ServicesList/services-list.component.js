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

// such a small component included it in same file
// const Service = props => (
//   <tr>
//     <td>{props.service.name}</td>
//     <td>{props.service.category}</td>
//     <td>{props.service.description}</td>
//     <td>{props.service.duration}</td>
//     <td>{props.service.price}</td>
//     <td>{props.service.date.substring(0, 10)}</td>
//     <td>
//       {/* <button onClick={foo} >Perform action</button> */}
//       {/* <Link to={"/edit/"+props.service._id}>edit</Link> | <a href="#" onClick={() => { props.deleteService(props.service._id) }}>delete</a> */}
//       <Link to={"/edit/" + props.service._id}>edit</Link> |{" "}
//       <button
//         onClick={() => {
//           props.deleteService(props.service._id);
//         }}
//       >
//         delete
//       </button>
//     </td>
//   </tr>
// );

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

// findService = (providerId, serviceId)=>{
//   return axios.get(`/api/services/${serviceId}`).then(res => {
//         const service = res.data;

//         this.setState(
//           {
//             service
//           },
//           console.log(res.data)
//         );
//       })
//       .catch(err => console.log(err));
// }

  render() {
    return (
      <div>

        <NavbarComp />
        <Wrapper>

          <Hero backgroundImage="https://images.pexels.com/photos/4614/woman-morning-bathrobe-bathroom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Services</h1>
            <h2>Choose A Service Below</h2>
          </Hero>

        <main>
  <IconCard loadProviders={this.loadProviders} />
            <Container>

             <br />
               <h2>Choose A Provider</h2>
               <hr />
              <br />
               {this.state.providers.map(provider => (
                 
                <ProviderCard

                  key={provider.id}
                  id={provider.id}
                  name={provider.name}
                  // service={service}

                  //img={provider.img}
                // findService = {this.findService}
              />))
              }
            
            
            </Container>
         </main>
        </Wrapper>
      </div>
    );
  }
}
