import "./style.css";
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Sidenav extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      category: '',
      description: '',
      duration: 0,
      price: 0,
      date: new Date(),
      service: "",
      gender: "",
      time: "",
      day: "",
      location: "",
      services: []
    }
  }


  componentDidMount() {
    this.setState({
      services: ['test service'],
      name: 'test name'
    })
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const service = {
      name: this.state.name,
      category: this.state.category,
      description: this.state.description,
      duration: this.state.duration,
      price: this.state.price,
      date: this.state.date
    }
    console.log(service);

    axios.post('http://localhost:5000/services/add', service)
      .then(res => console.log(res.data));
    // eventually connect to database

    window.location = '/';
  }

  render() {
    return (
      <div>

        {/* function SideNav() {
    return (
      <div> */}
        <aside style={{ background: 'rgb(204, 214, 193, 0.3)' }}>

          <div className="container p-5">
            <h2>Search For Service</h2>
            <br />
            <form onSubmit={this.onSubmit}>

              {/* <div className="form-group">
                  <label>Name: </label>
                  <select ref="userInput"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}>
                          {
                              // for each user/provider its going to return this below
                              this.state.services.map(function(service) {
                                  return <option
                                  key={service}
                                  value={service}>{service}
                                  </option>;
                              })
                          }
                  </select>
              </div> */}
              {/* <div className="form=group">
                  <label>Category: </label>
                  <input type="text"
                      required
                      className="form-control"
                      value={this.state.category}
                      onChange={this.onChangeCategory}
                      />
              </div> */}
              <div className="block-form-search">
                <label htmlFor="service"><h5>Category:</h5></label>
                <div className="form-group">
                  <select id="category" name="category" className="form-control">
                    <option disabled selected>Type</option>
                    <option value="make-up">Make-Up</option>
                    <option value="hair-barber">Hair/Barber</option>
                    <option value="yoga">Yoga Instructor</option>
                    <option value="massage">Massage</option>
                    <option value="fitness">Fitness Trainer</option>
                    <option value="nutritionist">Nutritionist</option>
                    <option value="fashion">Fashion Stylist</option>
                  </select>
                </div>
                <br />
                <div className="form=group">
                  <label><h5>Description: </h5></label>
                  <input type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label><h5>Duration (minutes): </h5></label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label><h5>Price $$: </h5></label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label><h5>Date:</h5></label>
                  <div>
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
                <br />


                {/* <div className="form-group">
              <label htmlFor="autofill">Autofill</label>
              <input autoComplete="on" className="form-control autocomplete" type="text" id="autofill" />
            </div> */}
                <br />
                {/* <div className="checkbox">
              <div id="sexes">
              <label htmlFor="location"><h5>Gender</h5></label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" id="sexes" name="sexes" defaultValue={1} />Male
                </label>
                <br />
                <label className="checkbox-inline">
                  <input type="checkbox" id="sexes" name="sexes" defaultValue={2} />Female
                </label>
              </div>
            </div> */}

                {/* <div className="form-group">
              <br />
              <label htmlFor="time"><h5>Time</h5></label>
              <select id="time" name="time" className="form-control">
                <option disabled selected>Time</option>
                <option value={1}>Early Morning</option>
                <option value={2}>Late Morning</option>
                <option value={3}>Afternoon</option>
                <option value={4}>Evening</option>
                <option value={4}>Night</option>
              </select>
            </div>
            <br /> */}

                {/* <div className="form-group">
            <label htmlFor="length"><h5>Amount of Time</h5></label>
              <select id="length" name="length" className="form-control">
                <option disabled selected>Amount of Time</option>
                <option value={1}>30 Minutes</option>
                <option value={2}>1 Hour</option>
                <option value={3}>1 Hour 30 Minutes</option>
                <option value={4}>2 Hours</option>
                <option value={5}>2+ Hours</option>
              </select>
            </div>
            <br /> */}

                <div className="form-group">
                  <label htmlFor="location"><h5>Location</h5></label>
                  <input type="text" className="form-control" id="location" placeholder="Enter your location" />
                </div>
                <input className="btn" type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
        </aside>
      </div>
    );
  }

}
// export default Sidenav;