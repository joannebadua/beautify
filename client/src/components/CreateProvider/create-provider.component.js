import React, { Component } from "react";
import axios from "axios";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Hero from "../Hero";
import TimePicker from "rc-time-picker";
import NavbarComp from "../Navbar";
import UploadImage from "../UploadImage";
import "rc-time-picker/assets/index.css";
import CreateServices from  "../create-service.component.js"
import appContext from '../../appContext';

//var AWS from ('aws-sdk/dist/aws-sdk-react-native');


export default class CreateProvider extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onChangeStart_time = this.onChangeStart_time.bind(this);
    this.onChangeEnd_time = this.onChangeEnd_time.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      img: "",
      bio: "",
      start_time: "",
      end_time: "",
      isProvider: false
    };
  }

  onChangeBio(e) {
    this.setState({
      bio: e.target.value
    });
  }
  onChangeStart_time(value) {
      console.log(value);
    this.setState({
      start_time: value.toISOString().format()
    });
  
  }
  onChangeEnd_time(value) {
    this.setState({
      end_time: value
    });
  }

  //  formatSelectedDate() {
  //   return this.state.selectedDate ? this.state.selectedDate.toISOString().split("T")[0] + "": null;
  // }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    debugger;
    const provider = {
      name: this.state.name,
      bio: this.state.bio,
      start_time: "this.start_time",
      end_time: "this.end_time",
      isProvider: 1
    };
    console.log(provider);

    this.context.setIsProvider(true);
    axios.post("/api/providers", provider).then(res => {
      debugger;
      this.setState({ providerId: res.data.id });
    });

    
    this.setState({
      isProvider: true
     });
  }

 

  render() {
    return (
      <div>
        <NavbarComp />
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Beautify</h1>
            <h2>Create Provider</h2>
          </Hero>
          
          {this.state.isProvider == false ?

          <Container>
            <br />
            <br />
            <h3>Create New Provider</h3>
            <br />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Provider Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label>Bio: </label>
                <textarea
                  required
                  className="form-control"
                  value={this.state.bio}
                  onChange={this.onChangeBio}
                />
              </div>
              <div className="form-group">
                <label>Working hours: </label>
                <div className="hours">
                  <div className="start">
                    start time
                    <TimePicker
                      showSecond={false}
                     showMinute={false}
                      use12Hours={true}
                      onChange={this.onChangeStart_time}
                    />
                  </div>
                  <div className="start">
                    end time
                    <TimePicker
                      showSecond={false}
                     showMinute={false}
                      use12Hours={true}
                      onChange={this.onChangeEnd_time}
                      
                    />
                  </div>
                </div>
              </div>       
              <div>
              <UploadImage />
              </div> 
              <div className="form-group">
                <input
                  type="submit"
                  value="Create Provider"
                  className="btn btn-primary"
                />
              </div>
            </form>  
          </Container>

          :  

          <Container> 
              <h1> Provider has been created! </h1> 
              <CreateServices providerId={this.state.providerId}/>
          </Container>
          }
        </Wrapper>
      </div>
    );
  }
}

CreateProvider.contextType = appContext;