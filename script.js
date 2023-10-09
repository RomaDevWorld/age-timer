const birth = 0; //Unix timestamp of the birthday (https://www.unixtimestamp.com/)

setInterval(() => {
  const now = Date.now();

  const passed = (now - birth) / 1000 / 60 / 60 / 24 / 365;

  const timer = document.getElementById("timer");
  const subTimer = document.getElementById("subTimer");

  timer.innerHTML = Math.floor(passed);
  subTimer.innerHTML = "." + passed.toFixed(9).toString().split(".")[1];
}, 1); //Increase this number to reduce the refresh rate
