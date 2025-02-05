function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  document.getElementById("time").innerText = time;
}
let interval = setInterval(showTime, 1000);
