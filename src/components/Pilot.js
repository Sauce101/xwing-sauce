import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Pilot = () => {
  return (
    <div className="flex-container">
      <StaticImage
        src="../assets/images/Biggs_reprise.png"
        alt="Luke Garvin and Biggs"
        className="flex-item-left rounded"
        placeholder="blurred"
      />
      <article className="flex-item-right">
        <h2>Pilots</h2>
        <p>
          The single pilot sat in an armored cockpit in the center of the
          fuselage protected by a transparisteel canopy. The canopy allowed for
          a wider view compared to that provided by a TIE fighter's, and was
          also designed to automatically polarize to protect the pilot from
          harmful light. Explosive charges were set to blast the canopy clear in
          the event the Guidenhauser ejector seat had to be used. Adjustable for
          use by most species, the pressurized cockpit had enough life support
          for up to one week, and featured an inertial compensator to protect
          the pilot from high-g accelerations. The cockpit had flight controls
          similar to those of the T-16 skyhopper, an airspeeder also produced by
          Incom Corporation, along with a targeting computer with holographic
          imaging system.
        </p>
      </article>
    </div>
  )
}

export default Pilot
