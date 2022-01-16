import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Sfoils = () => {
  return (
    <div className="contact-page">
      <article>
        <h2>Attack Position</h2>
        <p>
          S-foils in attack position provided the X-wing with additional
          stabilizer surfaces during air travel. While listed with a maximum
          atmospheric speed of 1,050 kph, the X-wing could otherwise fly at
          supersonic speeds. Indeed, with the engines at maximum thrust an
          X-wing could travel so fast it would glow hot from atmospheric
          friction. Doing so put tremendous strain on the starfighter and the
          pilot themselves however: after just several minutes of maneuvering at
          these velocities, gradual system failures began and even the cannons
          themselves were at risk of melting from the heat. When traveling high
          in a planet's upper atmosphere, an X-wing could achieve speeds fast
          enough to cause the pilot's head to swim and their vision to glitter.
        </p>
      </article>
      <StaticImage
        src="../assets/images/xwing-back01.jpg"
        alt="S foils"
        className="rounded"
        placeholder="blurred"
      />
    </div>
  )
}

export default Sfoils
