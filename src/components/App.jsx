import React, { useEffect, useReducer } from "react";

import StartScreen from "./StartScreen";
import Main from "./Main";
import Questions from "./Questions";
import Loader from "./Loader";
import Result from "../Result";
import Progress from "./Progress";
import Error from "./Error";

const TIME_PER_QUESTION = 20;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  pickedOption: null,
  points: 0,
  timeLeft: null,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "start" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "ready",
        timeLeft: TIME_PER_QUESTION*state.questions.length,
      };
    case "selectAnswer":
      const curQuestion = state.questions.at(state.index);
      return {
        ...state,
        pickedOption: action.payload,
        points:
          action.payload === curQuestion.answer
            ? state.points + curQuestion.points
            : state.points,
      };

    case "next":
      return {
        ...state,
        index: state.index + action.payload,
        pickedOption: null,
      };
    case "tickTock":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
        status: state.timeLeft === 0 ? "finish" : state.status,
      };

    case "finish":
      return { ...state, status: "finish" };

    case "restart":
      return { ...initialState, status: "start", questions: state.questions };

    default:
      throw new Error("Action unknown!");
  }
};

const App = () => {
  const [
    { status, questions, index, pickedOption, points, timeLeft },
    dispatch,
  ] = useReducer(reducer, initialState);

  const totalQuestions = questions.length;
  const totalScore = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch(`https://quiz-api-kpw2.onrender.com/quizQuestions`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "start" && <StartScreen dispatch={dispatch} />}
        {status === "ready" && (
          <>
            <Progress
              index={index}
              totalQuestions={totalQuestions}
              pickedOption={pickedOption}
              points={points}
              totalScore={totalScore}
            />
            <Questions
              questions={questions.at(index)}
              dispatch={dispatch}
              pickedOption={pickedOption}
              index={index}
              totalQuestions={totalQuestions}
              timeLeft={timeLeft}
            />
          </>
        )}
        {status === "finish" && (
          <Result dispatch={dispatch} points={points} totalScore={totalScore} />
        )}
      </Main>
    </div>
  );
};

export default App;
