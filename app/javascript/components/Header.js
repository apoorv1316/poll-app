import React from "react";
import API from "../utils/API";
import AuthHeader from "./AuthHeader";
import NonAuthHeader from "./NonAuthHeader";

function Header(props) {
  let { current_user } = props;
  return (
    <>
      {props.current_user ? (
        <AuthHeader current_user={current_user.name} />
      ) : (
        <NonAuthHeader />
      )}
    </>
  );
}

export default Header;
