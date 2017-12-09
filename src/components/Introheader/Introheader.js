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
          <h2 className="textwhite">ENTER A COLLEGE OR UNIVERSITY NAME</h2>
          <form action="/SearchResultsPage" method="GET" id="my-form">
            <input  type="text" className="form-control" id="enter_text" onBlur={ this.setSchool }/>
              <button onClick={ this.fetchSchool } type="submit" className="btn btn-primary" id="text-enter-button button submit">Submit</button>
          </form>
        </div>
    </div>
    </div>
  </div>
  )
 }
}

export default Introheader;
