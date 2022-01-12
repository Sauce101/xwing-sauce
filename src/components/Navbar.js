// import { Link, navigate } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <h1>X-Wing Sauce</h1>
      <div className="links">
        <a href="#cannons">Cannons</a>
        <a href="#schematics">Schematics</a>
        <a href="#engines">Engines</a>
        <a href="#pilots">Pilots</a>
        <a href="#astro">Astro</a>
        <a href="#sensors">Sensors</a>
        <a href="#attack">Attack</a>
      </div>
    </nav>
  )
}

export default Navbar
