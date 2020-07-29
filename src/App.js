import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent";
import HeaderComponent from "./Components/HeaderComponent";
import WelcomeComponent from "./Components/WelcomeComponent";
import UserRegistration from "./Components/UserRegistration";
import LoanDetailsComponent from "./Components/LoanDetailsComponent";
import PersonalDetailsComponents from "./Components/PersonalDetailsComponent";
import LogoutComponent from "./Components/LogoutComponent";
// import ErrorComponent from "./Components/ErrorComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HeaderComponent} />
        <Route path="/" exact component={LoginComponent} />
        <Route path="/welcome/" exact component={WelcomeComponent} />
        <Route path="/register" component={UserRegistration} />
        <Route path="/welcome/loan" component={LoanDetailsComponent} />
        <Route path="/welcome/personal" component={PersonalDetailsComponents} />
        <Route path="/logout" component={LogoutComponent} />
        {/* <Route path="" exact component={ErrorComponent} /> */}
      </Router>
    </div>
  );
}

export default App;
