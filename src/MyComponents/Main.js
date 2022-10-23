import React from 'react'
import Batterystate from './Batterystate'
import './style.css'

export default function Main(props) {
  return (
    <div>
      <div className="battery">
        <Batterystate />
      </div>
      <div className="down">
        <div className="left">
          <div className="list">PACKET COUNT &nbsp;&nbsp;&nbsp;&nbsp; :<div className="maintext"> {props.maindata.pc}</div></div>
          <div className="list">NO OF SATELLITES : <div className="maintext"> {props.maindata.ns}</div></div>
          <div className="list">ANYTHING ELSE &nbsp;&nbsp;&nbsp; :<div className="maintext"> {props.maindata.as}</div></div>
        </div>
        <div className="right">
          <div className="list1">STATUS</div>
        </div>
      </div>
    </div>
  )
}
