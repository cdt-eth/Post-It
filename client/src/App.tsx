import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create/Create";
import Posts from "./pages/Posts/Posts";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout/Layout";

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
        <Layout>
          <Switch>
            <Route exact path="/Post-It">
              <Posts />
            </Route>
            <Route path="/Post-It/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
