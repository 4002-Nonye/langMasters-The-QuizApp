import React from "react";

const Progress = ({index,totalQuestions}) => {
  return (
    <header className="progress">
      <progress max={15} value={1} />

      <p>
        Question <strong>{index+1}</strong>/{totalQuestions}
      </p>
      <p>
        <strong>{3}</strong>/{10}
      </p>
    </header>
  );
};

export default Progress;
