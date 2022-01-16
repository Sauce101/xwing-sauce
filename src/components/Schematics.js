import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Schematics = () => {
  return (
    <div className="flex-container">
      <StaticImage
        src="../assets/images/T-65b_blueprints.png"
        alt="schematics"
        placeholder="blurred"
        className="flex-item-left"
      />
      <article className="flex-item-right">
        <h2>Schematics</h2>
        <p>
          The T-65B X-wing starfighter was manufactured by Incom Corporation. It
          was designed to excel in all aspects of starfighter combat, being
          highly maneuverable and heavily shielded, with a small profile that
          made it harder to hit. Unlike other starfighters the X-wing could
          excel in atmospheric flight. This included outmaneuvering the TIE
          fighter, which was otherwise faster and more maneuverable than the
          X-wing in space.
        </p>
        <p>
          It had two pairs of wing-like strike foils, or S-foils, mounted at the
          rear of the craft on opposite sides. Normally, the foils on each side
          locked in place flush against each other; during combat, however, the
          foils were folded out. This gave the craft its distinctive "X"-like
          appearance when viewed from the front or rear. The S-foils were
          controlled by an S-foil servo actuator located in the back of the
          starfighter. With the S-foils open in attack position, the craft had a
          greater spread of fire as opposed to whilst shut.
        </p>
      </article>
    </div>
  )
}

export default Schematics
