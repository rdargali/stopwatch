import React, { useState, useReducer } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./App.css";

function App() {
  const precision = 10;
  const [intervalId, setIntervalId] = useState(null);
  const [status, setStatus] = useState(0);

  // returns current state and dispatch function,
  // pass in function that takes the current state and action from a dispatch, returns updated state
  const [time, dispatch] = useReducer((state, action) => {
    switch (action) {
      case '+':
        return state += precision;
      case 'reset':
        return 0;
      default:
        return state;
    }
  }, 0);

  // very roundabout way of doing this without a second 'run' function
  // incrementing the timer inside setInterval doesn't work because the 'time' variable that it knows is the one that existed when the interval was defined, so it won't be able to see if the time state is updated. useReducer gets passed the updated state every time the dispatch gets called though, so it actually works
  // also useReducer is sweet
  const startTimer = () => {
    setStatus(1);

    let intervalId = setInterval(() => {
      dispatch('+');
    }, precision);

    setIntervalId(intervalId);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setStatus(0);
    dispatch('reset');
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setStatus(2);
  };

  // just use start
  // const resumeTimer = () => {
  //   startTimer(); 
  // };

  // let updateMs = time.ms;
  // let updateS = time.s;
  // let updateM = time.m;
  // let updateH = time.h;


  // const run = () => {
  //   if (updateM === 60) {
  //     updateH++;
  //     updateM = 0;
  //   }
  //   if (updateS === 60) {
  //     updateM++;
  //     updateS = 0;
  //   }

  //   // also there are 1000 ms in a second...which makes sense why line 59 looked like it was working
  //   if (updateMs === 1000) {
  //     updateS++;
  //     updateMs = 0;
  //   }

  //   // you were running this function every 10 ms but only incrementing by 1 ms....it was bothering me
  //   updateMs += 10;
  //   // updateMs++;

  //   return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  // };


  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <Button
            startTimer={startTimer}
            stopTimer={stopTimer}
            resetTimer={resetTimer}
            // resumeTimer={startTimer}
            status={status}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
