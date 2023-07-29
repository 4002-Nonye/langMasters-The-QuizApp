import React from "react";
import Button from "./Button";

const Next = ({dispatch}) => {
  return (
    <div>
      <Button
        className="btn-next"
        onClick={() => dispatch({ type: "next", payload: 1 })}
      >
        Next
      </Button>
    </div>
  );
};

export default Next;
