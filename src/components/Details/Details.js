import React, { Component } from 'react';
import "./Details.css";
import { Link } from 'react-router-dom';


class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city:'',
      state: '',
      schoolName: '',
      url: '',
      accreditor: '',
      tuition: '',
      tuitionOut: '',
      debt: '',
      admissions: '',
      type: '',
      satReading: '',
      act: ''
    }
    this.callSchool = this.callSchool.bind(this);
    this.passData = this.passData.bind(this);

  }

  passData(data) {
    this.setState({
      city: data.results[0]['school.city'],
      state: data.results[0]['school.state'],
      schoolName:  data.results[0]['school.name'],
      url: data.results[0]['school.school_url'],
      accreditor: data.results[0]['school.accreditor'],
      tuition: data.results[0]['2015.cost.tuition.in_state'],
      tuitionOut: data.results[0]['2015.cost.tuition.out_of_state'],
      debt: data.results[0]['2015.aid.median_debt.completers.overall'],
      admissions: data.results[0]['2015.admissions.admission_rate.overall'],
      type: data.results[0]['school.carnegie_size_setting'],
      satReading: data.results[0]['2015.admissions.sat_scores.midpoint.critical_reading'],
      satWriting: data.results[0]['2015.admissions.sat_scores.midpoint.writing'],
      satMath: data.results[0]['2015.admissions.sat_scores.midpoint.math'],
      act: data.results[0]['2015.admissions.act_scores.midpoint.cumulative']

   });
  }

  callSchool() {
    const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
    const fields = `_fields=id,school.name,school.city,school.state,school.accreditor,school.school_url,2015.cost.tuition.in_state,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state,2015.cost.tuition.out_of_state,2015.admissions.admission_rate.overall,school.carnegie_size_setting,2015.admissions.sat_scores.midpoint.critical_reading,2015.admissions.sat_scores.midpoint.writing,2015.admissions.sat_scores.midpoint.math,2015.admissions.act_scores.midpoint.cumulative&id=${this.props.match.params.schoolid}`;
    const requestUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;

     fetch(requestUrl).then((res) => res.json()).then((data) =>  this.passData(data));

  }



  componentDidMount() {
    this.callSchool();

  }

  render() {
    let type;
    if (this.state.type === 18) {
      type = 'Exclusively graduate/professional'
    }else if (this.state.type === 17) {
      type = 'Four-year, large, highly residential'
    }else if (this.state.type === 16) {
      type = 'Four-year, large, primarily residential'
    }else if (this.state.type === 15) {
      type = 'Four-year, large, primarily nonresidential'
    }else if (this.state.type === 14) {
      type = 'Four-year, medium, highly residential'
    }else if (this.state.type  === 13) {
      type = 'Four-year, medium, primarily residential'
    }else if (this.state.type ===12) {
      type = 'Four-year, medium, primarily nonresidential'
    }else if (this.state.type === 11) {
      type = 'Four-year, small, highly residential'
    }else if (this.state.type === 10) {
      type = 'Four-year, small, primarily residential'
    }else if (this.state.type === 9) {
      type = 'Four-year, small, primarily nonresidential'
    }else if (this.state.type === 8) {
      type = 'Four-year, very small, highly residential'
    }else if (this.state.type === 7) {
      type = 'Four-year, very small, primarily residential'
    }else if (this.state.type === 6) {
      type = 'Four-year, very small, primarily nonresidential'
    }else if (this.state.type === 5) {
      type = 'Two-year, very large'
    }else if (this.state.type === 4) {
      type = 'Two-year, large'
    }else if (this.state.type === 3) {
      type = 'Two-year, medium'
    }else if (this.state.type === 2) {
      type = 'Two-year, small'
    }else  {type = 'Two-year, very small'}

     //console.log(this.props.match.params);
    return (
      <div className = "container">
        <h1><strong>{this.state.schoolName}</strong></h1>
        <p>LOCATION: <strong>{this.state.city}, {this.state.state}</strong></p>
        <p>WEBSITE: <a>{this.state.url}</a> </p>
        <p>TYPE: <strong>{type}</strong></p>
        <p>ACCREDITOR: <strong>{this.state.accreditor}</strong></p>
        <p>IN-STATE TUITION: <strong>${ this.state.tuition.toLocaleString() }</strong></p>
        <p>OUT-OF-STATE TUITION: <strong>${ this.state.tuitionOut.toLocaleString() }</strong></p>
        <p> DEBT: <strong>${ this.state.debt.toLocaleString()}</strong></p>
        <p>ADMISSION RATE: <strong> {Math.round(this.state.admissions*100)}%</strong></p>
        <h3>AVERAGE TEST SCORES FOR STUDENTS ACCEPTED AND ENROLLED</h3>
        <p> SAT READING: <strong>{this.state.satReading}</strong></p>
        <p> SAT WRITING: <strong>{this.state.satWriting}</strong></p>
        <p> SAT MATH: <strong>{this.state.satMath}</strong></p>
        <p> ACT COMPOSITE: <strong>{this.state.act}</strong></p>
      </div>
)}
}


export default Details;
