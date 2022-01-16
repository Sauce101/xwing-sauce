import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"

const Engines = () => {
  return (
    <div className="contact-page">
      <article>
        <h2>Engines</h2>
        <p>
          Four 4L4 fusial thrust engines were attached to the wings of the
          T-65B, next to the fuselage. Some X-wings were fitted with 4j.4 fusial
          thrust engines, which were virtually identical to the 4L4 models.
          These provided the X-wing with incredible maneuverability thanks to
          three factors: the use of differential thrust between the four engines
          to adjust trajectory; a high-mass electromagnetic gryoscope fitted to
          each engine for swinging through tight curves; and the ability to fire
          retro-thrust forward through the turbine nozzles. Infrared suppressors
          were used to conceal the hot exhaust.
        </p>
        <p>
          The X-wing itself was powered by a Novaldex 04-Z cryogenic power
          generator located in the center of the ship. Cryogenic capacitors
          located in the S-foils stored additional power for the engines. Power
          couplings allowed for energy to be distributed and balanced between
          the various systems.
        </p>
      </article>
      <StaticImage
        src="../assets/images/xwing-engine4L4.jpg"
        alt="Engine cross section"
        className="rounded"
        placeholder="blurred"
      />
    </div>
  )
}

export default Engines
