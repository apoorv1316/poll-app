import React from "react";
import API from "../utils/API";

function AuthHeader(props) {
  const handleLogOut = () => {
    API.postNewTask("", "/logout", "DELETE").then((response) => {
      window.alert("Logged out");
      window.location.href = "/";
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Poll App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
            <button onClick={handleLogOut}>Log Out</button>
            <a className="nav-item nav-link" href="#">
              {props.current_user}
            </a>
            <a className="nav-item nav-link" href="/polls/new">
              Create Poll
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AuthHeader;
