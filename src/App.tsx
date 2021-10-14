import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import History from "./Pages/History/History";
import Bim from "./Pages/BIM2021/Bim";
import Home from "./Pages/Home/Home";
import Regulations from "./Pages/Regulations/Regulation";
import ApplyNow from "./Pages/ApplyNow/Applynow";

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Bim" component={Bim}></Route>
        <Route path="/Regulations" component={Regulations}></Route>
        <Route path="/History" component={History}></Route>
        <Route path="/Applynow" component={ApplyNow}></Route>
      </Switch>
    </Router>
  );
}

export default App;
