const birth = 0; //Unix timestamp of the birthday (https://www.unixtimestamp.com/)
const snowFlakes = true;

setInterval(() => {
  const now = new Date().getTime();
  const diff = now - birth * 1000; // Convert unix timestamp to milliseconds
  const [int, decimal] = (diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(9).split(".");

  timer.innerHTML = int;
  subTimer.innerHTML = "." + decimal;
}, 1); //Increase this number to reduce the refresh rate

if (snowFlakes) {
  for (let i = 0; i < 12; i++) {
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
