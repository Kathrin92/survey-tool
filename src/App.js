import React from "react";
import AppHeader from "./components/AppHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import styled from "@emotion/styled";

const Main = styled.main`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  min-height: 300px;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <AppHeader />
      <Main>
        <Switch>
          <Route exact path="/">
            <Add />
          </Route>
          <Route path="/polls/:pollId/vote">
            <Vote />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}
export default App;
