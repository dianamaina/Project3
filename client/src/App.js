import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Documents from "./pages/Documents";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import Uploader from "./components/Uploader/uploader";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <SearchForm></SearchForm>
        <Uploader></Uploader>
        <Switch>
          <Route exact path={["/", "/documents"]}>
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
