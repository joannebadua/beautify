import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
import ServicesList from "./components/ServicesList/services-list.component";
import CreateProvider from "./components/CreateProvider/create-provider.component";
import CreateService from "./components/create-service.component";
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

