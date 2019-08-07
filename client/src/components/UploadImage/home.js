import React, { Component } from "react";
import axios from "axios";

class Home extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {
            selectedFile: null
        }
    }

singleFileChangedHandler = ( event ) =>
{
    this.setState({
        selectedFile: event.target.files[0]
    });
};

singleFileUploadHandler = ( ) => {
    const data = new FormData();

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

    
}
}