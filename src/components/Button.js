import React from "react";

function Button({ startTimer, status, stopTimer, resetTimer }) {
  
  function returnButtonsForStatus (status) {
    switch (status) {
      case 0:
        return (
          <div>
            <button
              className="stopwatch-btn stopwatch-btn-gre"
              onClick={startTimer}
            >
              Start
            </button>
          </div>
        );
      case 1:
        return (
          <div>
            <button
              className="stopwatch-btn stopwatch-btn-red"
              onClick={stopTimer}
            >
              Stop
            </button>

            <button
              className="stopwatch-btn stopwatch-btn-yel"
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <button
              className="stopwatch-btn stopwatch-btn-gre"
              onClick={startTimer}
            >
              Resume
            </button>

            <button
              className="stopwatch-btn stopwatch-btn-yel"
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
      );
    default:
      return null;
    }
  }
  
  return (
    returnButtonsForStatus(status)
  )
}

export default Button;
