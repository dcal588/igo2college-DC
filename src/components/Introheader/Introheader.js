import React from "react";
import { Link } from "react-router-dom";
import "./Introheader.css";
import RaisedButton from 'material-ui/RaisedButton';

const Introheader = props =>
  <div class="introheader">
    <div class="introbox">
    <div class="row">
        <div class="col-xs-offset-3 col-xs-6 text-center enter_section">
          <h2 class="textwhite">ENTER A COLLEGE OR UNIVERSITY NAME</h2>
          <form action="/school" method="GET" id = "myform">
            <input type="text" class="form-control" id="schoolsearch"/>
            <button type="button" class="btn btn-primary">SUBMIT</button>
          </form>
        </div>
    </div>
    </div>
  </div>

export default Introheader;
