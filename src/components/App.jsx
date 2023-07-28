import React, { useEffect, useReducer } from "react";
import blobImgTop from "../assets/blob-5.svg";
import blobImgBtm from "../assets/blob-6.svg";
import StartScreen from "./StartScreen";
import Main from "./Main";
import Questions from "./Questions";
import Loader from "./Loader";
import Img from "./Img";

import Error from "./Error";

const initialState = {
  questions: [],
  status: "loading",
  index: 2,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "start" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "ready" };

    default:
      throw new Error("Action unknown!");
  }
};

const App = () => {
  const [{ status, questions, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetch(`https://quiz-api-kpw2.onrender.com/quizQuestions`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Img src={blobImgTop} className="top-img" />
      <Img src={blobImgBtm} className="btm-img" />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "start" && <StartScreen dispatch={dispatch} />}
        {status === "ready" && <Questions questions={questions} />}
      </Main>
    </div>
  );
};

export default App;
