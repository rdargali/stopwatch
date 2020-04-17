import React from "react";

function Button({ startTimer, status, stopTimer, resetTimer, resumeTimer }) {
  return (
    <div>
      {status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={startTimer}
        >
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
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
      ) : (
        ""
      )}

      {status === 2 ? (
        <div>
          <button
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={resumeTimer}
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
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
