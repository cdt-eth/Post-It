import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Posts from "./pages/Posts";

const App = (): ReactElement => {
  return (
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
  );
};

export default App;
