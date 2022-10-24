import React from 'react'
import './style.css'

export default function LatLong(props) {
  return (
    <>
    <div className="container">
    <div>LATITUDE : {props.coords.lat}</div>
    <div>LONGITUDE : {props.coords.lng}</div>
    </div>
    </>
  )
}
