import React from 'react'

export default class Clock extends React.Component{
  render() {
    return <div id="clockwork" className="countdown"> 
    <div>
      <span className="days"></span>
      <div className="smalltext">Days</div>
    </div>
    <div>
      <span className="hours"></span>
      <div className="smalltext">Hours</div>
    </div>
    <div>
      <span className="minutes"></span>
      <div className="smalltext">Minutes</div>
    </div>
    <div>
      <span className="seconds"></span>
      <div className="smalltext">Seconds</div>
    </div>
    </div>
  }
}
