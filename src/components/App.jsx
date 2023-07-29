import React, { useEffect, useReducer } from "react";

import StartScreen from "./StartScreen";
import Main from "./Main";
import Questions from "./Questions";
import Loader from "./Loader";

import Progress from "./Progress";
import Error from "./Error";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  pickedOption: null,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "start" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "ready" };
      case "selectAnswer":
        return { ...state, pickedOption: action.payload };
  

    case "next":
      return { ...state, index: state.index + action.payload , pickedOption: null};

  
    default:
      throw new Error("Action unknown!");
  }
};

const App = () => {
  const [{ status, questions, index, pickedOption }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const totalQuestions = questions.length;

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
            <Progress index={index} totalQuestions={totalQuestions} />
            <Questions
              questions={questions.at(index)}
              dispatch={dispatch}
              pickedOption={pickedOption}
            />
          </>
        )}
      </Main>
    </div>
  );
};

export default App;
