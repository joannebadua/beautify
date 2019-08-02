import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProvider extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: ''
        }
    }
    
    
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const provider =  {
            name: this.state.name,
        }
        console.log(provider);

        axios.post('http://localhost:5000/providers/add', provider)
            .then(res => console.log(res.data));
        // eventually connect to database
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Provider</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Provider Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Provider" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
