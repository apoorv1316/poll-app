import React, { useState } from "react";
import API from "../../utils/API";
import Errors from "../Errors";

function NewPoll() {
  const [poll, setPoll] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [errors, setErrors] = useState([]);
  const handleChange = (event) => {
    setPoll((poll) => ({ ...poll, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.postNewTask({ poll: poll }, "/polls", "POST")
      .then((response) => {
        window.alert(response.notice);
        window.location.href = "/polls";
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
          <label>Question</label>
          <input
            type="text"
            className="form-control"
            name="question"
            onChange={handleChange}
            value={poll.question}
          />
        </div>
        <div className="form-group">
          <label>Option 1</label>
          <input
            type="text"
            className="form-control"
            name="option1"
            onChange={handleChange}
            value={poll.option1}
          />
        </div>
        <div className="form-group">
          <label>Option 2</label>
          <input
            type="text"
            className="form-control"
            name="option2"
            onChange={handleChange}
            value={poll.option2}
          />
        </div>
        <div className="form-group">
          <label>Option 3</label>
          <input
            type="text"
            className="form-control"
            name="option3"
            onChange={handleChange}
            value={poll.option3}
          />
        </div>
        <div className="form-group">
          <label>Option 4</label>
          <input
            type="text"
            className="form-control"
            name="option4"
            onChange={handleChange}
            value={poll.option4}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Poll
        </button>
      </form>
    </div>
  );
}

export default NewPoll;
