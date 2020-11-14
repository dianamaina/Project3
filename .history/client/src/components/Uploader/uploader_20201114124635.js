import React, { Component } from "react";
import Firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCDNibyEFc1XabUkUrstYzcUAuVRuGTaR4",
    authDomain: "fair-ceiling-289815.firebaseapp.com",
    databaseURL: "https://fair-ceiling-289815.firebaseio.com",
    projectId: "fair-ceiling-289815",
    storageBucket: "fair-ceiling-289815.appspot.com",
    messagingSenderId: "122805515521",
    appId: "1:122805515521:web:dd334576de52ce2ddc5700",
    measurementId: "G-5QXEGE6GHP"
  };
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);
  Firebase.analytics();
class Uploader extends Component {
  state = {
    username: "",
    Document: "",
    isUploading: false,
    progress: 0,
    filenameURL: ""
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ Document: filename, progress: 100, isUploading: false });
    Firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ DocumentURL: url }));
  };

  render() {
    return (
      <div>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          <label>Document Type:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.DocumentURL && <img src={this.state.DocumentURL} />}
          <FileUploader
            accept="image/*"
            name="Document"
            randomizeFilename
            storageRef={Firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          <CustomUploadButton
          accept="image/*"
          storageRef={Firebase.storage().ref('images')}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4}}
        >
          Select your awesome avatar
        </CustomUploadButton>

        </form>
      </div>
    );
  }
}

export default Uploader;