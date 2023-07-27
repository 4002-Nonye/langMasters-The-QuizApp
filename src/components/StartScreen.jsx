import React from "react";
import Button from "./Button";


const StartScreen = ({ dispatch }) => {
  return (
    <>
    
      <div className="container">
        <h1 className="title">lang Masters</h1>
        <p className="description">
          Test your knowledge on React, javaScript and Python 👩🏻‍💻
        </p>
        <Button className="start" onClick={() => dispatch({ type: "start" })}>
          Start Quiz
        </Button>
      </div>
    </>
  );
};

export default StartScreen;
