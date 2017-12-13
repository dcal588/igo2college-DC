import React, { Component } from 'react';
import './SearchResults.css';

export class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      city: '',
      state: '',
      url: '',
      tuition: '',
      debt: ''
    }
  }

   fetchSchool = (event) => {
    event.preventDefault();


    const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
    const fields = `_fields=id,school.name,school.city,school.state,school.accreditor,school.school_url,2015.cost.tuition.in_state,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state&school.name=${this.state.schoolName}`;
    const requestUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;

     fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results[0]['school.name'])
      this.setState({
        results: data.results
    })
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
      if ( this.state.results) {
        display = (
          <div >
          {this.state.results.map(function(result, index){
                                console.log(result);
                    return <li key={ index }>
            <a href=' /Details/'>School: { result['school.name'] } </a>
            <p>Location: { result['school.city'] } , { result['school.state'] }  </p>
            <p>Accreditor: { result['school.accreditor'] } </p>
            <p>Debt: { result['2015.aid.median_debt.completers.overall'] } </p>
            <p>Tuition: { result['2015.cost.tuition.in_state'] } </p>
            <p>School URL: { result['school.school_url'] } </p>
 </li>;
                  })}
          </div>
        )
      }else {
        display = (
          <h2> There are no schools matching your search</h2>
        )
      }
      return (
        <div>
        <form  method="GET" id="my-form">
          <input  type="text" className="form-control" id="enter_text" onBlur={ this.setSchool }/>
            <button onClick={ this.fetchSchool } type="submit" className="btn btn-primary" id="text-enter-button button submit">Submit</button>
        </form>
        { display }
      </div>
    );
  }
}


export default SearchResults;