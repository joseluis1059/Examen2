import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Weather from "./components/weather";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch,Link} from "react-router-dom";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Link to ="/" >Home</Link> <br></br>
    <Link to="/weather/March/20">Weather for March 20</Link><br></br>
    <Link to="/weather/March/21">Weather for March 21</Link><br></br>
    <Link to="/weather/March/22">Weather for March 22</Link><br></br>
    <Link to="/weather/March/23">Weather for March 23</Link><br></br>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/weather/:mes/:dia" component={Weather}/>
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;