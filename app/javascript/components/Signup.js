import React, { useState } from "react";
import Errors from "./Errors";
import API from "../utils/API";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    API.postNewTask({ user: user }, "/users", "POST")
      .then((response) => {
        window.location.href = "/login";
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
      {errors && <Errors errors={errors} />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
            value={user.name}
          />
        </div>
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

export default Signup;
