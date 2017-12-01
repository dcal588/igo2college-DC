import React from "react";
import { Link } from "react-router-dom";
import "./Introheader.css";

const Introheader = props =>
  <div class="introheader">
    <div class="introbox">
    <div class="row">
        <div class="col-xs-offset-3 col-xs-6 text-center enter_section">
          <h2 class="textwhite">ENTER A COLLEGE OR UNIVERSITY NAME</h2>
        <form action="/SearchResultsPage" method="GET" id="my-form">
          <input  type="text" className="form-control" id="enter_text"      onBlur={ () => this.setSchool }/>
            <button 
              onClick={ ()=>this.fetchSchool } 
              type="submit" className="btn btn-primary" 
              id="text-enter-button button submit"
              >Submit</button>
        </form>
        </div>
    </div>
    </div>
  </div>

export default Introheader;
