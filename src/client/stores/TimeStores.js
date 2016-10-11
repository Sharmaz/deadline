import Reflux from 'reflux'
import $ from 'jquery'
import TimeActions from '../actions/TimeActions'

let TimeStores = Reflux.createStore({
  listenables: [TimeActions],
  init: function() {
    this.getTimeRemaining()
  },
  getTimeRemaining: function(endtime) {
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
})