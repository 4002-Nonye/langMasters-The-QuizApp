import React from "react";
import Button from "./Button";

const Option = ({ options, pickedOption, dispatch }) => {
  const hasAnswer = pickedOption !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <Button
          className={`btn btn-option ${index === pickedOption ? "answer" : ""}`}
          key={index}
          disable={hasAnswer}
          onClick={() => dispatch({ type: "selectAnswer", payload: index })}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default Option;
