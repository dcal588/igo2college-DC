import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Introheader from "../components/Introheader";
import SearchResults from "../components/SearchResults";

const Start = (props) => [

<div id="container">
  <Introheader {...props}/>
  <SearchResults/>
  
</div>
]

export default Start;
