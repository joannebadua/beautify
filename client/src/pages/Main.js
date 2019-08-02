import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SideNav from "../components/Sidenav";
// import API from "../utils/API";

/*/----------------------------------------
I'm trying to capture the value in the form ~jb
----------------------------------------/*/
//Setting component's initial state
  // state = {
  //   service: "",
  //   gender: "",
  //   time: "",
  //   duration: "",
  //   day: "",
  //   location: ""
  // };

// // Getting the value and name of the input which triggered the change
// let value = event.target.value;
// var service = event.target.service;

// if (service === "Make-Up") 
// this.setState({
//   [service]: value
// });

// handleFormSubmit = event => {
// //Preventing the default behavior of the form submit  (which is to refresh the page)
// event.preventDefault();
// if (this.state.service) {
//   alert
// }
// }

// render() 
//   return (
//     <div>
//       <p>
//         Hello {this.state.firstName} {this.state.lastName}
//       </p>
//         <form className="form">
//           <input 
//           value={this.state.service}
//           name="make-up"
//           onChange={this.handleInputChange}
//           type="text"
//           required
//           />
//   )


/*/----------------------------------------
We may have to rename function Main() bc parsing error in return ~jb
----------------------------------------/*/
function Main() {
  return (
    <div>
      <Hero backgroundImage="https://images.pexels.com/photos/1842623/pexels-photo-1842623.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
        <h1>Beautify</h1>
        <h2>Health and Wellness On Demand At Your Home</h2>
      </Hero>
      <SideNav>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Beautify!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
              turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
              tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
              volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
              mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
              tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
          </Col>
        </Row>
      </Container>
      </SideNav>
    </div>
  );
}

export default Main;
