import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Posts from "./pages/Posts";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Lato",
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 700,
  },
});

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
