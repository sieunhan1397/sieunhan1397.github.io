var count = new Date("May 13, 2020 13:00:00").getTime();
const daysView = document.querySelector("#days");
const hoursView = document.querySelector("#hours");
const minutesView = document.querySelector("#minutes");
const secondsView = document.querySelector("#seconds");
const displayAnimation = document.querySelector(".flex-container");
displayAnimation.style.display = "none";
var x = setInterval(() => {
  var now = new Date().getTime();
  var d = count - now;
  if (d <= 0) {
    clearInterval(x);
    document.querySelector(".count").style.display = "none";
    document.querySelector("h2").style.display = "none";
    document.querySelector("h1").textContent = "Phi Vân";
    document.querySelector(".flex-container").style.display = "flex";
    document.getElementById("my_audio").muted = false;
    document.getElementById("my_audio").play();
  } else {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let days = Math.floor(d / day),
      hours = Math.floor((d % day) / hour),
      minutes = Math.floor((d % hour) / minute),
      seconds = Math.floor((d % minute) / second);
    daysView.textContent = days;
    hoursView.textContent = hours;
    minutesView.textContent = minutes;
    secondsView.textContent = seconds;
  }
}, 1000);