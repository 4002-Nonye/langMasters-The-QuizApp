import React from "react";
import Button from "./Button";

const Next = ({ dispatch, index, totalQuestions }) => {
 
  return (
    <div>
      {index === totalQuestions - 1 && (
        <Button
          className="btn-quiz"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </Button>
      )}

      {index < totalQuestions - 1 && (
        <Button
          className="btn-quiz"
          onClick={() => dispatch({ type: "next", payload: 1 })}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Next;
