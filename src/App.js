
import React , { Component } from "react";
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import Login from "./pages/Login";
import SearchResultsPage from "./pages/SearchResultsPage";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Introheader from "./components/Introheader";
import Details from "./components/Details";



const App = () =>
  <MuiThemeProvider>
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Start} />
        </Wrapper>
        <Wrapper>
          <Route exact path="/login" component={Login} />
        </Wrapper>
        <Wrapper>
          <Route exact path="/signup" component={SignUp}/>
        </Wrapper>
        <Wrapper>
          <Route exact path="/searchresultspage" component={SearchResultsPage} />
        </Wrapper>
        <Wrapper>
          <Route exact path="/details" component={Details} />
        </Wrapper>

      </div>
    </Router>
  </MuiThemeProvider>

export default App;
