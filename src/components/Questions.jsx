import React from "react";
import Option from "./Option";

const Questions = ({ questions }) => {
  console.log(questions);
  return (
    <div className="questions-container">
    {
      questions.map((ques)=><h2>{ques.question}

      <ul>
        {ques.options.map((opt)=><li>{opt}</li>)}
      </ul>
      
      
      </h2>)
    }
    </div>
  );
};

export default Questions;
