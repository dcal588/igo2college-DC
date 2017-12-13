import React, { Component } from 'react';
import "./Details.css";

class Details extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
<p>{this.props.apple}</p>
      </div>
)}
}


export default Details;
