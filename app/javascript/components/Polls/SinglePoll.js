import React, { useState } from "react";
import API from "../../utils/API";

function SinglePoll(props) {
  const { poll } = props;
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  var url = `http://localhost:3000/polls/${poll.id}/votes`;
  const handleClick = async (event) => {
    var optionVal = await event.target.className.split(" ")[1];
    setError("");
    API.postNewTask({ option: optionVal }, url, "POST")
      .then(async (vote) => {
        await setData(vote)
      })
      .catch((error) => {
        error.json().then(({ error }) => {
          setError(error)
        })
      })

  };

  if (data != null)
    var {
      vote_data: { votes },
    } = data;

  return (
    <div>
      <h1>Poll No:{poll.id}</h1>
      <h1>{poll.question}</h1>
      <ul>
        <li>
          <button onClick={handleClick} className="vote-btn option1">
            {poll.option1}
          </button>
        </li>
        <li>
          <button onClick={handleClick} className="vote-btn option2">
            {poll.option2}
          </button>
        </li>
        <li>
          <button onClick={handleClick} className="vote-btn option3">
            {poll.option3}
          </button>
        </li>
        <li>
          <button onClick={handleClick} className="vote-btn option4">
            {poll.option4}
          </button>
        </li>
      </ul>
      {votes ? (
        <ul>
          <li>
            {`${votes.option1} votes `}
          </li>
          <li>
            {`${votes.option2} votes `}
          </li>
          <li>
            {`${votes.option3} votes `}
          </li>
          <li>
            {`${votes.option4} votes `}
          </li>
        </ul>
      ) : <h3>{error}</h3>}
    </div>
  );
}

export default SinglePoll;