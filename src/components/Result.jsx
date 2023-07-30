import React from "react";
import Button from "./Button";

const Result = ({ dispatch, points, totalScore }) => {
  const percentage = Math.floor((points / totalScore) * 100);
  return (
    <>
      <div className="result">
        <h3>You have come to end of this quiz</h3>
        <p className="score">
          You had {points} out of {totalScore} points ({percentage}%)
        </p>
      </div>

      <div className="res">
        {" "}
        <Button
          className="btn-quiz restart"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart quiz
        </Button>
      </div>
    </>
  );
};

export default Result;
