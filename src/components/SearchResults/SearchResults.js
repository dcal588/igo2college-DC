import React from "react";
import "./SearchResults.css";
import Container from "../Container";
const SearchResults = props =>
<div class="container">
	<div class="row">
    <div class="col-md-8">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">School Information</h3>
        </div>
        <div class="panel-body">
        </div>
      </div>
    </div>
    <div class="col-md-4">
			<div class="panel panel-default">
  			<div class="panel-heading">
    			<h3 class="panel-title">Yelp Reviews</h3>
  			</div>
  			<div class="panel-body">
        	<div class="row">
          	<div class="col-xs-12">
            	<div class="row">
              	<div class="col-xs-4"></div>
              	<div class="col-xs-4"></div>
              	<div class="col-xs-4"></div>
            	</div>
          	</div>
        	</div>
  			</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Zillow Information</h3>
        </div>
        <div class="panel-body">
        </div>
      </div>
    </div>
  </div>
</div>

export default SearchResults;
