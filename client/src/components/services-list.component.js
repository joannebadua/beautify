import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from "./Container";
import Wrapper from "./Wrapper";
import Row from "./Row";
import Hero from "./Hero";
import Sidenav from "./Sidenav";

// such a small component included it in same file
const Service = props => (
    <tr>
        <td>{props.service.name}</td>
        <td>{props.service.category}</td>
        <td>{props.service.description}</td>
        <td>{props.service.duration}</td>
        <td>{props.service.price}</td>
        <td>{props.service.date.substring(0, 10)}</td>
        <td>
            {/* <button onClick={foo} >Perform action</button> */}
            {/* <Link to={"/edit/"+props.service._id}>edit</Link> | <a href="#" onClick={() => { props.deleteService(props.service._id) }}>delete</a> */}
            <Link to={"/edit/" + props.service._id}>edit</Link> | <button onClick={() => { props.deleteService(props.service._id) }}>delete</button>
        </td>
    </tr>
)
export default class ServicesList extends Component {
    constructor(props) {
        super(props);

        this.deleteService = this.deleteService.bind(this);

        this.state = {
            services: []
        };
    }

    // return all fields for all services
    componentDidMount() {
        axios.get('http://localhost:5000/services/')
            .then(response => {
                this.setState({ services: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteService(id) {
        axios.delete('http://localhost:5000/services/' + id)
            .then(res => console.log(res.data));
        this.setState({
            services: this.state.services.filter(el => el._id !== id)
        })
    }

    serviceList() {
        return this.state.services.map(currentservice => {
            return <Service service={currentservice} deleteService={this.deleteService} key={currentservice._id} />;
        })
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Hero backgroundImage="https://images.pexels.com/photos/1842623/pexels-photo-1842623.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
                        <h1>Beautify</h1>
                        <h2>Health and Wellness On Demand At Your Home</h2>
                    </Hero>
                    <Sidenav>
                    <br />
                    </Sidenav>
                    <Container>
                        <Row>
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
                                <tbody>
                                    {this.serviceList()}
                                </tbody>
                            </table>
                            </Row>
                            </Container>
                            </Wrapper>
                            
            </div>
                        )
                    }
                }
