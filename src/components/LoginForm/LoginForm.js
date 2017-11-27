import React from "react";
import "./LoginForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const LoginForm = props =>
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

export default LoginForm;
