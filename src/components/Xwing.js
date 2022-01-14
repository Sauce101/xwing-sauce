import React from "react"
import Astro from "./Astro"
import Cannons from "./Cannons"
import Engines from "./Engines"
import Pilot from "./Pilot"
import Schematics from "./Schematics"
import Sensors from "./Sensors"
import Sfoils from "./Sfoils"

const Xwing = () => {
  return (
    <div>
      <Cannons />
      <Schematics />
      <Engines />
      <Pilot />
      <Astro />
      <Sensors />
      <Sfoils />
    </div>
  )
}

export default Xwing
