import React from "react";

function Errors({ errors }) {
  return (
    <div>
      <div>
        {errors.map((error) => (
          <li>{error}</li>
        ))}
      </div>
    </div>
  );
}

export default Errors;
