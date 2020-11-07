import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Documents from "./pages/Documents";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
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
