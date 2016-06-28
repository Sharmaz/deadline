import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBarComponent from './components/AppBar'
import CardTime from './components/Card'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
    <AppBarComponent />
    <CardTime />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('container')
);

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date())
  let seconds = Math.floor((t / 1000) % 60)
  let minutes = Math.floor((t / 1000 / 60) % 60)
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  let days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id)
  let daysSpan = clock.querySelector('.days')
  let hoursSpan = clock.querySelector('.hours')
  let minutesSpan = clock.querySelector('.minutes')
  let secondsSpan = clock.querySelector('.seconds')

  function updateClock() {
    let t = getTimeRemaining(endtime)

    daysSpan.innerHTML = t.days
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  let timeinterval = setInterval(updateClock, 1000)
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000)
initializeClock('clockwork', deadline)