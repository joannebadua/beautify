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
import Navbar from "../Navbar";

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

    // this.deleteService = this.deleteService.bind(this);

    this.state = {
      // services: []
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

  // return all fields for all services
  // componentDidMount() {
  //   axios
  //     .get("/api/services")
  //     .then(response => {
  //       this.setState({ services: response.data });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // deleteService(id) {
  //   axios.delete("/services/" + id).then(res => console.log(res.data));
  //   this.setState({
  //     services: this.state.services.filter(el => el._id !== id)
  //   });
  // }

  // serviceList() {
  // return this.state.services.map(currentservice => {
  //   return (
  //     <Service
  //       service={currentservice}
  //       deleteService={this.deleteService}
  //       key={currentservice._id}
  //     />
  //   );
  // });
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/1842623/pexels-photo-1842623.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
            <h1>Services</h1>
            <h2>Choose A Service Below</h2>
          </Hero>
          <main>
          <IconCard></IconCard>
            {/* <Sidenav loadProviders={this.loadProviders} /> */}
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
                  //  image={provider.image}
                />
              ))}
              {/* <Row>
              <h3>Logged Services</h3>

              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.serviceList()}</tbody>
              </table>
            </Row> */}
            </Container>
          </main>
        </Wrapper>
      </div>
    );
  }
}
