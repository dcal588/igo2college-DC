import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Introheader.css";

class IntroHeader extends Component {

  render() {
    return (
<div>
  <div className="jumbotronHome jumbotron-fluid">
    <div className="container">
    <center>
    <h1 className="displayHome"><strong>IGO2COLLEGE</strong></h1>
    <p className="displayHome2">explore the campus of your dreams</p>
  </center>
</div>
  </div>

  <div className="jumbotronSearch jumbotron-fluid">
    <div className="container">
    <center>
    <p className="displaySearch">have a specific college or university in mind?</p>
    <p className="displaySearchButton">
      <Link className="btn btn-info btn-lg" to="/searchresultspage" role="button">search by school</Link>
    </p>
  </center>
</div>
  </div>

  <div className="jumbotronFinancialAid jumbotron-fluid">
    <div className="container">
    <center>
    <p className="displayFinancialAid">want to explore financial aid?</p>
    <p className="displayFinancialAidButton">
      <a className="btn btn-warning btn-lg disabled" href="#" role="button">search FAFSA info by state</a>
    </p>
  </center>
</div>
  </div>

</div>
)
}
}

export default IntroHeader
