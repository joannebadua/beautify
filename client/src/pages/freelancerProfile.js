import React, { Component } from "react";
import axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import ServiceCard from "../components/ServiceCard";
import DatePicker from "react-datepicker";
import "./freelancerProfile.css";
//import "react-datepicker/dist/react-datepicker.css";

export default class ProviderProfile extends Component {
  constructor(props) {
    super(props);


    this.state = {
      name: "",
      img: "",
      bio: "",
      services: [],
      monthSlots: [],
      daySlots: [],
      selectedDate: null,
      selectedSlot: "",
      providerId: "",
      userId: "",
      selectedServiceId:""
    };
  }

  onSelectDate = selectedDate => {
     this.setState({ selectedDate });
     this.getSlotsForDay(selectedDate);
  }

  getSlotsForMonth() {
    const monthSlotsUrl = `/api/providers/1/slots/month/2019-08?serviceId=1`;
    axios.get(monthSlotsUrl).then(res => {
      const monthSlots = res.data.map(slot => new Date(slot));
      this.setState({monthSlots});
    });    
  }

  getSlotsForDay(day) {
     const daySlotsUrl = `/api/providers/1/slots/day/2019-08-04?serviceId=1`;

     axios.get(daySlotsUrl).then(res => {
       this.setState({ daySlots: res.data});
       console.log(res.data)
    }
    );    
  }

  onConfirm() {
    debugger;
    const appt = {
      start_time: "",
      end_time: "",
      providerId: "",
      userId: "",
      serviceId:""
    };
  }

  bookAppointment(slot){

    const appt ={
    start_time: this.start_time,
    end_time: this.start_time+ this
    }
    axios.post('/api/appointments', appt).then(res => console.log(res.data));
  }

  componentDidMount() {
    this.getProvidersInfo(this.props.match.params.id);
    this.getSlotsForMonth("2019-08");   
  
  }



getProvidersInfo = (id)=> {
  const providerUrl = `/api/providers/${id}`;
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
          
          </Hero>
          <Container>
            <br />
            <br />
            <h2>{this.state.name}</h2>
            <br />
            <h3>About </h3>
            <p> {this.state.bio} </p>
            <h3>Choose a date </h3>
          
            <DatePicker inline
                selected={this.state.selectedDate}
                onChange={this.onSelectDate}
                isOpen={true}
                includeDates={this.state.monthSlots}
                forceShowMonthNavigation={true}
            />

             {
               this.state.daySlots.map(slot => {
                 var slotStart = slot.substr(11,5);
                 console.log(slotStart);
               return <button className="btn" onClick={this.bookAppointment}>{slotStart}</button>;

               })
             }

            <div className="appInfo">
            <h2> booking with {this.state.name} </h2>
            <p>{this.state.selectedDate} </p>
         

            <a className="btn" >confirm</a>
            </div> 


            <h3> All Services</h3>
            {this.state.services.map(service => { 
                return <ServiceCard key = {service.name} name = {service.name} description = {service.description} duration = {service.duration} price = {service.price}                 
            />
            })} 
            
          </Container>
        </Wrapper>
      </div>
    );
  }
}
