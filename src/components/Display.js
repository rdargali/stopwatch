import React from "react";

function Display({ time }) {
  let ms = time % 1000;
  let seconds = Math.trunc(time / (1000));
  let minutes = Math.trunc(time / (1000 * 60));
  let hours = Math.trunc(time / (1000 * 60 * 60));

  const conditionalH = () => {
    if (hours === 0) {
      return null;
    } else {
      return <span>{hours >= 10 ? hours : "0" + hours} </span>;
    }
  };
  
  return (
    <div>
      {conditionalH()} &nbsp;
      <span>{minutes >= 10 ? minutes : "0" + minutes}</span>&nbsp;&nbsp;
      <span>{seconds >= 10 ? seconds : "0" + seconds}</span>&nbsp;&nbsp;
      <span>{ms >= 100 ? ms : ms >= 10 ? "0" + ms : "00" + ms}</span>&nbsp;&nbsp;
    </div>
  );
}

export default Display;
