import React from "react";
import "./SignUpForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SignUpForm = props =>
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

export default SignUpForm;
