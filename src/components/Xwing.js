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
    <div className="page">
      <Cannons />
      <Schematics />
      <Engines />
      <Pilot />
      <Astro />
      <Sensors />
      {/* <Targeting /> */}
      <Sfoils />
    </div>
  )
}

export default Xwing
