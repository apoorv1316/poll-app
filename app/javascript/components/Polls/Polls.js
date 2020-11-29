import React from "react";
import SinglePoll from "./SinglePoll";

function Polls(props) {
  let { polls } = props;
  console.log(polls);
  return (
    <div>
      <h1> ALL POLLS </h1>
      <span>
        {polls?.map((p) => {
          return (
            <>
              <SinglePoll key={p.id} poll={p} />
            </>
          );
        })}
      </span>
    </div>
  );
}

export default Polls;
