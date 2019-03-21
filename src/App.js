import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import Home from "./components/Home";
import Weather from "./components/weather";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch,Link} from "react-router-dom";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Link to ="/" >Home</Link> <br></br>
    <Link to="/weather/March">Aqui</Link>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/weather/:nombre" component={Weather}/>
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