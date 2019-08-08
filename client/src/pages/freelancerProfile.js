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
      selectedTime: null,
      selectedSlot: "",
      providerId: this.props.match.params.id,
      userId: 1,
      selectedServiceId: this.props.match.params.service,
      serviceDuration:""
    };
  }

  onSelectTime(time) {
    debugger;
    this.setState({ selectedTime: time });
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


  bookAppointment = () => {

   
   const appt = {
      start_time: this.state.selectedDate.toISOString().split("T")[0]+" " + this.state.selectedTime,
      end_time: this.state.selectedDate.toISOString().split("T")[0]+" "+ this.state.selectedTime,
      providerId: this.state.providerId,
      userId: this.state.userId,
      serviceId: this.state.selectedServiceId
    };
   
    axios.post('/api/appointments', appt).then(res => console.log(res.data));
  };

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

  displayServiceName() {
    debugger;
    const service = this.state.services.find(service => service.id + "" === this.state.selectedServiceId);
    return service == null ? null : service.name;
  }
  
  formatSelectedDate() {
    debugger;
    return this.state.selectedDate ? this.state.selectedDate + "": null;
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
               return <a className="btn" onClick={this.onSelectTime.bind(this, slotStart)}>{slotStart}</a>;

               })
             }

            <div className="apptInfo">
            <h2> booking with {this.state.name} </h2>
            <p>{this.displayServiceName()}</p>
            <p>{this.formatSelectedDate()} </p>
            <p>{this.state.selectedTime}</p>
         

            <button className="btn" onClick={this.bookAppointment}>confirm</button>
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
