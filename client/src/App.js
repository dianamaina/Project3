import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Documents from "./pages/Documents";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import ImageUploader from "react-images-upload";

const App = props => {
  // const [pictures, setPictures] = useState([]);

  // const onDrop = picture => {
  //   setPictures([...pictures, picture]);
  // };
  // return (
  //   <ImageUploader
  //     {...props}
  //     withIcon={true}
  //     onChange={onDrop}
  //     imgExtension={[".jpg", ".gif", ".png", ".gif"]}
  //     maxFileSize={5242880}
  //   />


  // export default App;
  // import ImgUploader from "./components/ImgUploader";



  function App() {
    return (
      <Router>
        <div>
          <Nav />
          <SearchForm></SearchForm>
          <Switch>
            <Route exact path={["/", "/documents"]}>
              const [pictures, setPictures] = useState([]);

const onDrop = picture => {
                setPictures([...pictures, picture]);
};
return (
  <ImgUploader
                {...props}
                withIcon={true}
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />

              <Documents />
            </Route>
            <Route exact path="/documents/:id">
              <Detail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  export default App;
