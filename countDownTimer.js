// Set the countdown target date
var countdownDate = new Date("December 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var timerInterval = setInterval(function () {
  // Get current time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countdownDate - now;

  // Calculate time parts
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in respective elements
  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is finished, display message
  if (distance < 0) {
    clearInterval(timerInterval);
    document.querySelector(".countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);
