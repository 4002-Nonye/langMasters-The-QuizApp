import React, { useEffect } from "react";

const Timer = ({ timeLeft, className, dispatch }) => {
  const mins = Math.floor(timeLeft / 60);
  const secs = Math.floor(timeLeft % 60);

  useEffect(() => {
    const timerID = setInterval(() => {
      dispatch({ type: "tickTock" });
    }, 1000);

    return () => clearInterval(timerID);
  }, [timeLeft]);
  return (
    <p className={className}>
      {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
    </p>
  );
};

export default Timer;
