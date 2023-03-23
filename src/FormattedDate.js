import React from "react";

export default function FormattedDate(props) {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10 && hour < 10) {
    return day[props.date.getDay()] + " 0" + hour + ":0" + minutes;
  } else if (minutes < 10) {
    return day[props.date.getDay()] + " " + hour + ":0" + minutes;
  } else if (hour < 10) {
    return day[props.date.getDay()] + " 0" + hour + ":" + minutes;
  } else {
    return day[props.date.getDay()] + " " + hour + ":" + minutes;
  }
}
