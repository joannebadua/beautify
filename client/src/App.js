import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
import ServicesList from "./components/ServicesList/services-list.component";
import CreateProvider from "./components/CreateProvider/create-provider.component";
import CreateService from "./components/create-service.component";
//import CreateUser from "./components/create-user.component";
import EditService from "./components/edit-services.component";
import ProviderProfile from "./pages/freelancerProfile";
import UserProfile from "./pages/UserProfile";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import axios from "axios";

import AnimatedBG from "./components/Animated-bg";
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    axios.get("/auth/user")
      .then(res => {
        console.log("AUTH/USER: ", res)
        this.setState({
          isLoggedIn: res.data.loggedIn
        })
      });
  }

  logout = () => {
    axios.get("/auth/logout")
      .then(res => window.location.href = "/")
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <LogIn />
          <SignUp />
        </div>
      );
    } else {
      return (
        <Router>

          <Route path="/" exact component={() => <AnimatedBG logout={this.logout} />} />
          <Route path="/services" component={ServicesList} />
          <Route path="/edit/:id" component={EditService} />
          <Route path="/providers/new" component={CreateProvider} />
          <Route path="/providers/id/:id/service/:service" component={ProviderProfile} />

          {/* <Route path="/provider/:id/edit" component={EditeProfile} /> */}
          <Route path="/user/profile" component={UserProfile} />
          {/* <Route path="/user" component={CreateUser} /> */}
        </Router>
      );
    }
  }

}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// // import Provider from "./pages/Provider";
// // import About from "./pages/About";
// import Main from "./pages/Main";
// // import Settings from "./pages/Settings";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={Main} />
//           {/* <Route exact path="/about" component={About} /> */}
//           {/* <Route exact path="/provider" component={Provider} /> */}
//           {/* <Route exact path="/provider/:id" component={Profile} /> */}
//           {/* <Route exact path="/settings" component={Settings} /> */}
//           {/* <Route exact path="/Main" compontent={Main} /> */}
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// // JOEY'S INITIAL APP.JS ROUTES ...WE WILL DISCUSS IN CLASS

// // import React, { Component } from 'react';
// // // import './App.css';
// // import { BrowserRouter as Router, Link } from 'react-router-dom';
// // import Route from 'react-router-dom/Route';

// // const User = ({match}) => {
// //   return ( <h1> Welcome User {match.params.username} </h1>)
// // }

// // class App extends Component {
// // render () {
// //   return (
// //     <Router>
// //       <div className="App">

// //       <ul>
// //         <li>
// //           <Link to="/">Home</Link>
// //           </li>
// //           <li>
// //           <Link to="/about">About</Link>
// //           </li>
// //       </ul>
// //       <Route path="/" exact strict render={
// //         () => {
// //           return ( <h1>Welcome to Beautify</h1>);
// //         }
// //       }/>
// //       <Route path="/about" exact strict render={
// //         () => {
// //           return ( <h1>About Beautify</h1>);
// //         }
// //       }/>
// //       <Route path="/user/:username" exact strict component ={User} />
// //     </div>
// //     </Router>
// //   );
// // }
// // }

// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Switch
// // } from "react-router-dom";
// // import Freelancers from "./pages/Freelancers";

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Nav />
// //         <Switch>
// //           <Route exact path="/" component={Freelancers} />
// //           <Route exact path="/freelancers" component={Freelancers} />
// //           <Route exact path="/freelancers/:id" component={Detail} />
// //           <Route component={NoMatch} />
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
