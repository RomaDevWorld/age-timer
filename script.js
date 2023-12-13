const birth = 1168405200000; //Unix timestamp of the birthday (https://www.unixtimestamp.com/)
const snowFlakes = true;

setInterval(() => {
  const now = Date.now();

  const passed = (now - birth) / 1000 / 60 / 60 / 24 / 365;

  const timer = document.getElementById("timer");
  const subTimer = document.getElementById("subTimer");

  timer.innerHTML = Math.floor(passed);
  subTimer.innerHTML = "." + passed.toFixed(9).toString().split(".")[1];
}, 1); //Increase this number to reduce the refresh rate

if (snowFlakes) {
  for (let i = 0; i < 20; i++) {
    const container = document.getElementById("container");
    const snowFlake = document.createElement("div");
    snowFlake.className = "snowflake";
    const inner = document.createElement("div");
    inner.className = "inner";
    inner.innerText = "❄";
    snowFlake.appendChild(inner);
    container.appendChild(snowFlake.cloneNode(true));
  }
}
