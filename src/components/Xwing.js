import React from "react"
import Astro from "./Astro"
import Cannons from "./Cannons"
import Engines from "./Engines"
import Pilot from "./Pilot"
import Schematics from "./Schematics"
import Sensors from "./Sensors"
import Sfoils from "./Sfoils"
import Targeting from "./Targeting"

const Xwing = () => {
  return (
    <div>
      <Cannons />
      <Schematics />
      <Engines />
      <Pilot />
      <Targeting />
      <Astro />
      <Sensors />
      <Sfoils />
    </div>
  )
}

export default Xwing
