const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = days[new Date().getDay()];
document.getElementById("day").innerHTML = day;

const timer = setInterval(myTimer, 750);

//

function myTimer() {
  let date = new Date();
  let utcDate = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  document.getElementById("utcTime").innerHTML = utcDate;
}
