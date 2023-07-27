import React, { useReducer } from "react";
import blobImgTop from "../assets/blob-5.svg";
import blobImgBtm from "../assets/blob-6.svg";
import StartScreen from "./StartScreen";
import Main from "./Main";
import Questions from "./Questions";

const initialState = {
  questions: [],
  status: "start",
};

const reducer = function (state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "active" };
      break;

    default:
      throw new Error("Action unknown!");
  }
};

const App = () => {
  const [{ status }, dispatch] = useReducer(reducer, initialState);

  return (
    <Main>
      <img src={blobImgTop} alt="bg-img" className="top-img" />
      <img src={blobImgBtm} alt="bg-img" className="btm-img" />
      {status === "start" && <StartScreen dispatch={dispatch} />}
      {status === "active" && <Questions />}
    </Main>
  );
};

export default App;
