import React from "react";
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from "./components/MyAwesomeReactComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Introheader from "./components/Introheader";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () =>
  <MuiThemeProvider>
    <Router>
      <div>
        <Navbar />
        <Introheader />
        <Wrapper>
          <Route exact path="/" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>;
    <MyAwesomeReactComponent />
  </MuiThemeProvider>

export default App;
