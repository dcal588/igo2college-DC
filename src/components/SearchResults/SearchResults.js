import React, { Component } from 'react';
import './SearchResults.css';
import { Link } from 'react-router-dom';

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // results: []
      schoolName: '',
      city: '',
      state: '',
      url: '',
      tuitionIn: '',
      debt: '',

    }
  }

   fetchSchool = (event) => {
    event.preventDefault();

    const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
    const fields = `_fields=id,school.name,school.city,school.state,school.accreditor,school.school_url,2015.cost.tuition.in_state,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state,school.carnegie_size_setting&school.name=${this.state.schoolName}`;
    const requestUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;

     fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results[0]['school.name'])
      //console.log(data.results)
      this.setState({
        results: data.results

        // schoolName: data.results[0]['school.name'],
        // city: data.results[0]['school.city'],
        // state: data.results[0]['school.state'],
        // accreditor: data.results[0]['school.accreditor'],
        // url: data.results[0]['school.school_url'],
        // tuition: data.results[0]['2015.cost.tuition.in_state'],
        // debt: data.results[0]['2015.aid.median_debt.completers.overall']

    })

    //console.log(this.state.schoolName);
  });
};

   setSchool = (event) => {
    event.preventDefault();
    this.setState({
      schoolName: event.target.value,
       // debt: event.target.value,
       // tuition: event.target.value
    });

    document.getElementById("my-form").reset();
  };


  render() {
      let display;
      if ( this.state.results ) {
        display = (
          <div id='schoolList'>
            {this.state.results.map(function(result, index) {
              console.log(result);
              return <div key = { index }>
                <Link to={{pathname: "/details/"+result['id']}}><strong>School: </strong> {result['school.name']}</Link>
                <p>Location: {result['school.city']}, {result['school.state']} </p>
                <a href={'http://' + result['school.school_url']}>School Website: {result['school.school_url']} </a>

              </div>
            })}

          </div>
        )
      }
      return (
        <div>
          <div className="jumbotronSRP jumbotron-fluid">
            <div className="container">
            <center>
              <p className="displaySRP">search for a school</p>
            </center>
        <form method="GET" id="my-form">
          <input  type="text" className="form-control" id="enter_text" onBlur={ this.setSchool }/>
            <center><button onClick={ this.fetchSchool } type="submit" className="btnSRP btn-warning btn-lg" id="text-enter-button button submit">Submit</button></center>
        </form>
        { display }
      </div>
    </div>
    </div>
    );
  }
}


export default SearchResults;
