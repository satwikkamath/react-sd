import React from 'react';
import { useBattery } from "react-use";

export default function Batterystate() {
  const bat = useBattery();
  let batteryPercent = Math.round(bat.level * 100);

  return (
    <div>Battery : {batteryPercent}%</div>
  )
}
