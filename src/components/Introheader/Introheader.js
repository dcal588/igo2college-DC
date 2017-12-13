import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Introheader.css";
// import { SearchResults } from "./SearchResults.js";
// import { fetchSchool, setSchool } from './SearchResults';

class Introheader extends Component {



render() {
  return (
  <div className="introheader">
    <div className="introbox">
    <div className="row">
        <div className="col-xs-offset-3 col-xs-6 text-center enter_section">
          <form action="/SearchResultsPage" method="GET" id="my-form">
              <button type="submit" className="btn btn-primary" id="text-enter-button button submit">Click here to search for a college</button>
          </form>
        </div>
    </div>
    </div>
  </div>
  )
 }
}

export default Introheader;
