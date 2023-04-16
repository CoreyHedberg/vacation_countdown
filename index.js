// TODO: Clean up countdown code

function countdownToBirthday() {
  // Get today's date and time
  const NOW = new Date().getTime()
  // Set the date we're counting down to
  const VACATION_DATE = new Date("May 27, 2023 08:15:00").getTime()
  // Find the distance between now and the count down date
  const TIME_LEFT = VACATION_DATE - NOW
  // Addressing what to do when the countdown reaches 0
  if (TIME_LEFT < 0) {
    countdownToBirthdayCompleted()
  }
  // Time calculations for days, hours, minutes and seconds
  const DAYS = Math.floor(TIME_LEFT / (1000 * 60 * 60 * 24))
  const HOURS = Math.floor(
    (TIME_LEFT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const MINUTES = Math.floor((TIME_LEFT % (1000 * 60 * 60)) / (1000 * 60))
  const SECONDS = Math.floor((TIME_LEFT % (1000 * 60)) / 1000)
  // Grab the HTML elements and insert the values
  document.getElementById("days").innerHTML = DAYS
  document.getElementById("hours").innerHTML = HOURS
  document.getElementById("minutes").innerHTML = MINUTES
  document.getElementById("seconds").innerHTML = SECONDS
}

function countdownToBirthdayCompleted() {
  clearInterval(countdownToBirthday)
  document.getElementById("birthday-countdown").style.display = "none"
  return
}
// Initialize the function
countdownToBirthday()
// Set the count down function to run every 1 second
setInterval(countdownToBirthday, 1000)
