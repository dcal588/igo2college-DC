import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
<body>

<div id="container">
</div>
<div class="remodal">
      <div class="modal-body">
        <div class = "remodal" data-remodal-id="mymodal" id = "loginModal">
          <form action="myModal" method="GET">
          <div class="form-group">
            <label for="userName">User Name:</label>
            <input type="text" class="form-control" name = 'userName' value = '' id="userName"/>
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd"/>
          </div>
        </form>
          <div class="checkbox">
            <label><input type="checkbox"/> Remember me</label>
          </div>
          <a class="remodal-confirm" id = "submit" href="#mymodal">Submit</a>
          <a class="remodal-cancel" href="#">Cancel</a>
      </div>
    </div>
  </div>

  <div class="remodal">
        <div class="modal-body">
          <div class = "remodal" data-remodal-id="regmodal" id = "registerModal">
            <form action="myModal" method="POST">
              <div class="form-group">
                <label for="firstName">First name:</label>
                <input type="text" class="form-control" name = 'firstName' value = '' id="firstName"/>
              </div>
              <div class="form-group">
                <label for="lastName">Last name:</label>
                <input type="text" class="form-control" name = 'lastName' value = '' id="lastName"/>
              </div>
            <div class="form-group">
              <label for="userName">Please choose a username:</label>
              <input type="text" class="form-control" name = 'userName' value = '' id="userName"/>
            </div>
            <div class="form-group">
              <label for="pwd">Please choose a password:</label>
              <input type="password" class="form-control" id="pwd"/>
            </div>
          </form>
            <a class="remodal-confirm" id = "submit" href="#regmodal">Submit</a>
            <a class="remodal-cancel" href="#">Cancel</a>
        </div>
      </div>
    </div>

</body>

export default About;
