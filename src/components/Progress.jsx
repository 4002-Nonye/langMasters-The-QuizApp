import React from "react";

const Progress = ({ index, totalQuestions, pickedOption,points,totalScore }) => {
  
  return (
    <header className="progress">
      <progress max={totalQuestions} value={index + (pickedOption !== null)} />

      <p>
        Question <strong>{index + 1}</strong>/{totalQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalScore}
      </p>
    </header>
  );
};

export default Progress;
