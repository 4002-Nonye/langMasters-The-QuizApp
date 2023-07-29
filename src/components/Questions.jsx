import React from "react";
import Option from "./Option";

import Next from "./Next";

const Questions = ({ questions, dispatch, pickedOption }) => {
  console.log(questions);
  return (
    <>
      <div className="questions-container">
        <h2>{questions.question}</h2>

        <Option
          options={questions.options}
          pickedOption={pickedOption}
          dispatch={dispatch}
        />
      </div>

      <div className="btn-ui">
      <p className="btn-next">5:00</p>
        {pickedOption !== null && <Next dispatch={dispatch} />}

      
      </div>
    </>
  );
};

export default Questions;
