import React, { Component } from 'react';
import "./Details.css";

class Details extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      city:'',
      state: '',
      schoonName: ''
    }
    this.callSchool = this.callSchool.bind(this);
    this.passData = this.passData.bind(this);
    
  }

  passData(data) {
    this.setState({ 
      city: data.results[0]['school.city'],
      state: data.results[0]['school.state'],
      schoolName:  data.results[0]['school.name']
    });
  }

  callSchool() {
    const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
    const fields = `_fields=id,school.name,school.city,school.state,school.accreditor,school.school_url,2015.cost.tuition.in_state,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state&id=${this.props.match.params.schoolid}`;
    const requestUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;
    
     fetch(requestUrl).then((res) => res.json()).then((data) =>  this.passData(data));
     
  }
      
  

  componentDidMount() {
    this.callSchool();
    
  }

  render() {
     //console.log(this.props.match.params);
    return (
      <div>
        <p>{this.state.city}</p>
        <p>{this.state.state}</p>
        <p>{this.state.schoolName}</p>


      </div>
)}
}


export default Details;
