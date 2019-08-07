import React, { Component } from "react";
import axios from "axios";
import $ from 'jquery';
import Container from "../Container";
import Wrapper from "../Wrapper";
import Hero from "../Hero";
import TimePicker from "rc-time-picker";
import NavbarComp from "../Navbar";
import "rc-time-picker/assets/index.css";


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
      selectedFile: null
    };
  }

  onChangeBio(e) {
    this.setState({
      bio: e.target.value
    });
  }
  onChangeStart_time(value) {
    this.setState({
      start_time: value
    });
  }
  onChangeEnd_time(value) {
    this.setState({
      end_time: value
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  //Selected File CHanged Handler 
    singleFileChangedHandler = ( event ) =>
    {
          this.setState({
      selectedFile: e.target.files[0]
    });
    };

    singleFileUploadHandler = ( ) => {
      const data= new FormData();

      // If file selected 
if ( this.state.selectedFile ) {
  data.append( 'profileImage',
  this.state.selectedFile,
  this.state.selectedFile.name );

  axios.post( '/api/profile/profile-img-upload', data, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en; q=0.8',
      'Content-Type': 'multipart/form-data; boundary=${data._boundary}',
    }
  })
  .then( ( response ) => {

    if ( 200 === response.status ) {
// If file size is larger than expected 
if( response.data.error ) {
  if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
    this.ocShowAlert( 'Max size: 2MB', 'red' );
  } else {
    console.log( response.data );

    // If not given file type

this.ocShowAlert( response.data.error, 
'red' );
  }
  } else {
// Successful
let fileName = response.data;
console.log( 'fileName', fileName );
this.ocShowAlert( 'File Uploaded', '#3089cf' );
  }
}
    }).catch ( ( error ) => {
// Should another error appear
this.ocShowAlert( error, 'red' );
    });
} else {
  // if file not selected, throw an error
this.ocShowAlert( 'Please upload file', 'red' );
}
  });
}
    }

  onSubmit(e) {
    e.preventDefault();
    debugger;
    const provider = {
      name: this.state.name,
      bio: this.state.bio,
      start_time: "this.start_time",
      end_time: "this.end_time"
    };
    console.log(provider);

    axios.post("/api/providers", provider).then(res => console.log(res.data));
    // eventually connect to database
    // this.setState({
    //   name: ""
    // });
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


{/* Alert box for pic upload */}

<div id="oc-alert-container"></div>

<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192.5)' }}>
<div className="card-header"> 
<h3 style={{ color: '#555',
marginLeft: '12px' }}>Single Image upload </h3>

<p className="text-muted" style={{ marginLeft: '12px' }}>>Upload Size: 250px x 250px ( Max 2MB ) </p>
</div>

<div className="card-body">
<p className="card-text"> Please upload an image for your profile</p>
<input type="file" onChange={this.singleFileChangedHandler}>Upload!</button>
</div>
</div>

{/* Submit button to create Provider */}

              <div className="form-group">
                <input
                  type="submit"
                  value="Create Provider"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

//export???
