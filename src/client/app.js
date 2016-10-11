import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()
import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBarComponent from './components/AppBar'
import CardTime from './components/Card'
import $ from 'jquery'

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

let deadline = '2017-04-13 12:00:00'
initializeClock('clockwork', deadline)


function loadDeadlines(ctx, next) {
  request.get('/api/deadline')
  .end( (err, res) => {
    if (err) return console.log(err)

    ctx.deadlines = res.body
    next()

})
}