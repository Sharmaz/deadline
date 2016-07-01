import React from 'react'

export default class Clock extends React.Component{
  render() {
    return <div id="clockwork" className="countdown"> 
    <div>
      <span className="days"></span>
      <div className="smalltext">Días</div>
    </div>
    <div>
      <span className="hours"></span>
      <div className="smalltext">Horas</div>
    </div>
    <div>
      <span className="minutes"></span>
      <div className="smalltext">Minutos</div>
    </div>
    <div>
      <span className="seconds"></span>
      <div className="smalltext">Segundos</div>
    </div>
    </div>
  }
}
