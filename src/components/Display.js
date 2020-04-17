import React from "react";

function Display({ time }) {
  return (
    <div>
      <span>{time.h >= 0 ? time.h : "0" + time.h}</span>&nbsp;:&nbsp;
      <span>{time.m >= 0 ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
      <span>{time.s >= 0 ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
      <span>{time.ms >= 0 ? time.ms : "0" + time.ms}</span>&nbsp;
    </div>
  );
}

export default Display;
