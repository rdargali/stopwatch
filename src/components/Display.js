import React from "react";

function Display({ time }) {
  const conditionalH = () => {
    if (time.h === 0) {
      return "";
    } else {
      return <span>{time.h >= 0 ? time.h : "0" + time.h}</span>;
    }
  };
  return (
    <div>
      {conditionalH()} &nbsp;:&nbsp;
      <span>{time.m >= 0 ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
      <span>{time.s >= 0 ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
      <span>{time.ms >= 0 ? time.ms : "0" + time.ms}</span>&nbsp;
    </div>
  );
}

export default Display;
