import React from "react";
import Button from "./Button";

const StartScreen = ({ dispatch }) => {
  return (
    <div className="start-screen">
      <h1>Lang Masters</h1>
      <p className="description">
        Test your knowledge on React and javaScript 👩🏻‍💻
      </p>
      <Button className="start" onClick={() => dispatch({ type: "start" })}>
        Start Quiz
      </Button>
    </div>
  );
};

export default StartScreen;
