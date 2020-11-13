import React, { Component } from "react";
import Firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDKWI1f4J_81Au_UX4Cp9MPrrYOsOAir_s",
  authDomain: "blanket-001.firebaseapp.com",
  databaseURL: "https://blanket-001.firebaseio.com",
  projectId: "blanket-001",
  storageBucket: "blanket-001.appspot.com",
  messagingSenderId: "1095318653360",
  appId: "1:1095318653360:web:588b51b77fa473cc18ee75",
  measurementId: "G-48T95X5ZGW"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();
class ProfilePage extends Component {
  state = {
    Document: "",
    isUploading: false,
    progress: 0,
    filenameURL: ""
  };
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
        </form>
      </div>
    );
  }
}

export default ProfilePage;