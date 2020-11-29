import React, { useState } from "react";
import Error from "./Errors";
import API from "../utils/API";
import Errors from "./Errors";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    API.postNewTask({ user: user }, "/sessions", "POST")
      .then((response) => {
        window.location.href = "/polls";
        window.alert(response.notice);
      })
      .catch((error) => {
        error.json().then(({ errors }) => {
          setErrors([errors]);
        });
      });
  };

  return (
    <div>
      <h2>Log In</h2>
      {errors && <Errors errors={errors} />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
            value={user.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
