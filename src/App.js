import React from "react";
import AppHeader from "./components/AppHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import cold from "./themes/cold";
import warm from "./themes/warm";

const Main = styled.main`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  min-height: 300px;
  align-items: center;
`;

function App() {
  const [theme, setTheme] = React.useState(warm);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppHeader
          onSwitchColorButtonClick={() => {
            if (theme === warm) {
              setTheme(cold);
            } else {
              setTheme(warm);
            }
          }}
        />
        <Main>
          <Switch>
            <Route exact path="/">
              <Add />
            </Route>
            <Route path="/polls/:pollId/vote">
              <Vote />
            </Route>
            <Route path="/polls/:pollId">
              <Result />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}
export default App;
