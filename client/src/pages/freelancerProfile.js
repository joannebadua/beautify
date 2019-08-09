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
const moment = require("moment");

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
      serviceDuration: 30,
      showConfirm: true
    };
  }

  onSelectTime(time) {
    this.setState({ selectedTime: time });
  }

  onSelectDate = selectedDate => {
     this.setState({ selectedDate });
     this.getSlotsForDay(selectedDate);
     this.setState({ showConfirm: true});
  }

  getSlotsForMonth() {
    const monthSlotsUrl = `/api/providers/${this.state.providerId}/slots/month/2019-08?serviceId=${this.state.selectedServiceId}`;
    axios.get(monthSlotsUrl).then(res => {
      const monthSlots = res.data.map(slot => new Date(slot));
      this.setState({monthSlots});
    });    
  }

  getSlotsForDay(day) {
     const dayStr = moment(day).format("YYYY-MM-DD");
     const daySlotsUrl = `/api/providers/${this.state.providerId}/slots/day/${dayStr}?serviceId=${this.state.selectedServiceId}`;

     axios.get(daySlotsUrl).then(res => {
       this.setState({ daySlots: res.data});
    }
    );    
  }


  bookAppointment = () => {

  const service = this.state.services.find(service => service.id + "" === this.state.selectedServiceId);
   const startTime = this.state.selectedDate.toISOString().split("T")[0]+" " + this.state.selectedTime;
   const endTime = moment(startTime).add(service.duration, 'minute').format();

   const appt = {
      start_time: moment(startTime).format(),
      end_time: endTime,
      providerId: this.state.providerId,
      userId: this.state.userId,
      serviceId: this.state.selectedServiceId
    };
   console.log(appt)
    axios.post('/api/appointments', appt).then(res => console.log(res.data));
  this.setState({
    showConfirm: false,
     selectedDate: null,
      selectedTime: null,
      selectedSlot: "",
  });
  };

  componentDidMount() {
    this.getProvidersInfo(this.props.match.params.id);
    this.getSlotsForMonth("2019-08");   
  
  }



getProvidersInfo = (id)=> {
  const providerUrl = `/api/providers/${id}`;
     axios.get(providerUrl).then(res => {

     this.setState({ 
       name: res.data[0].name,
        img: res.data[0].img, 
        bio: res.data[0].bio,
        services: res.data[0].services
     });

     });
  }

  displayServiceName() {
    const service = this.state.services.find(service => service.id + "" === this.state.selectedServiceId);
    return service == null ? null : service.name;
  }
 displayServicePrice() {
    const service = this.state.services.find(service => service.id + "" === this.state.selectedServiceId);
    return service == null ? null : service.price;
  }
 displayServiceDuration() {
    const service = this.state.services.find(service => service.id + "" === this.state.selectedServiceId);
    return this.setState({
      serviceDuration: service == null ? '' : service.duration
    }) 
  }

  formatSelectedDate() {
    return this.state.selectedDate ? this.state.selectedDate.toISOString().split("T")[0] + "": null;
  }
  render() {  
    return (
      <div>
        <Wrapper>
          <Hero backgroundImage="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>Beautify</h1>
          
          </Hero>
          <div className="freelancer-content">
          <Container>
           <a href="/services" className="btn" >Back to search </a>
                
              
            <br />
            <br />
            <h1>Provider: {this.state.name}</h1>
            <hr />
            <h3>About: </h3>
            <p> {this.state.bio} </p>
            <h3>Choose a Date: </h3>
          
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
               return <a className="btn" onClick={this.onSelectTime.bind(this, slotStart)}>{slotStart}</a>;

               })
             }

            <div className="apptInfo">
              <br />
            <h2>{this.displayServiceName()} with {this.state.name} </h2>

            <p><strong>Day: </strong>{this.state.selectedDate == null ? '' : moment(this.formatSelectedDate(), 'YYYY-MM-DD').format('dddd MMMM Do')} </p>
            <p><strong>Time: </strong>{this.state.selectedTime}</p>
            <p><strong>Price: </strong>{this.displayServicePrice()}$</p>
 
{this.state.showConfirm ?
            <button className="btn"  onClick={this.bookAppointment}>Confirm</button> :  <div> <p>Booked!</p> <a href="/services" className="btn" >Back to search?</a> </div>
}
            </div>
            <br /> 
            <br />
            <br />

            <h1> All Services</h1>
            <hr />
            {this.state.services.map(service => { 
              const url =` /providers/id/${this.state.providerId}/service/${service.id} `;
                return <div><ServiceCard key = {service.name} name = {service.name} description = {service.description} duration = {service.duration} price = {service.price}                 
            />
            <a href={url} className="btn" > Book! </a>
            <br />
            <hr />
            <br />
</div>
            })} 
            
          </Container>
          </div>
        </Wrapper>
      </div>
    );
  }
}
