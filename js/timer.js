import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,

}) {

  let timerTimeOut
  let minutes = 25
  let seconds = 0

  function updateDisplay(newMinutes, seconds) {

    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function MoreTime() {

    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)

    minutes = minutes + 5
    updateDisplay(minutes, seconds)


  }

  function LessTime() {

    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)

    if (minutes >= 5) {
      minutes = minutes - 5

      updateDisplay(minutes, seconds)

    } else if (minutes <= 5) {
      minutes = 0
      updateDisplay(minutes, seconds)
    }
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        reset()
        updateDisplay()
        Sounds().timeEnd()
        return
      }


      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countDown()

    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    MoreTime,
    LessTime,
  }

}
