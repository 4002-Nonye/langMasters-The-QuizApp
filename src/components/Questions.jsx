import React from "react";
import Option from "./Option";
import Timer from "./Timer";

import Next from "./Next";

const Questions = ({
  questions,
  dispatch,
  pickedOption,
  index,
  totalQuestions,
  timeLeft
}) => {
 
  return (
    <>
      <div className="questions-container">
        <h2>{questions.question}</h2>

        <Option
          options={questions.options}
          pickedOption={pickedOption}
          dispatch={dispatch}
          question={questions}
        />
      </div>

      <div className="btn-ui">
        <Timer className="btn-quiz" timeLeft={timeLeft} dispatch={dispatch}/>

        {pickedOption !== null && (
          <Next
            dispatch={dispatch}
            index={index}
            totalQuestions={totalQuestions}
          />
        )}
      </div>
    </>
  );
};

export default Questions;
