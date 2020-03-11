import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/pages/Add";
import Vote from "./components/pages/Vote";
import Diy from "./components/pages/Diy";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Add />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
          <Route path="/diy">
            <Diy />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
export default App;
