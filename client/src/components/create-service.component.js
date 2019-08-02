import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateServices extends Component {

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
            services: []
        }
    }

    // choose from dropdwn of users/names in the array
        // username automatically set to first user in db

    // componentDidMount() {
    //     axios.get('http://localhost:5000/users/')
    //         .then(response => {
    //             if (response.data.length > 0) {
    //                 this.setState({
    //                     users: response.data.map(user => user.username),
    //                     username: response.data[0].username
    //                 })
    //             }
    //         })
    // }

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

        const service =  {
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
                <h3>Create New Service</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
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
                    </div>
                    <div className="form=group">
                        <label>Category: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onChangeCategory}
                            />
                    </div>
                    <div className="form=group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                    </div>
                    <div className="form-group">
                        <label>Price $$: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Service Log" className="btn btn-primary" defaultValue="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
