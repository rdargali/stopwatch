import React from "react";

function Button({ startTimer, status, stop, reset }) {
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
          <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>
            Stop
          </button>

          <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
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
