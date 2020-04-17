import React, { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [time, setTime] = useState({
    ms: 0,
    s: 55,
    m: 59,
    h: 0,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const startTimer = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const resetTimer = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const stopTimer = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const resumeTimer = () => {
    startTimer();
  };

  let updateMs = time.ms;
  let updateS = time.s;
  let updateM = time.m;
  let updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;

    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <Button
            startTimer={startTimer}
            stopTimer={stopTimer}
            resetTimer={resetTimer}
            resumeTimer={resumeTimer}
            status={status}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
