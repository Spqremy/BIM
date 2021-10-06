import "./App.css";
import Navigation from "./Navigation-component/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
        </Route>
        <Route path="/Bim">
          <Navigation />
        </Route>
        <Route path="/Teams">
          <Navigation />
        </Route>
        <Route path="/Regulations">
          <Navigation />
        </Route>
        <Route path="/History">
          <Navigation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
