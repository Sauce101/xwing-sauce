import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Cannons = () => {
  return (
    <Wrapper>
      <Contains>
        <StaticImage
          src="../assets/images/KX9laserCannon.png"
          alt="laser cannon"
          placeholder="blurred"
          className="rounded"
        />
      </Contains>
      <h2>cannons</h2>
      <p>
        The craft was armed with four Taim &amp; Bak KX9 laser cannons, placed
        at the tip of each wing. The laser cannons could be fired singly, in
        alternating pairs or all at once. By default the convergence or "zero"
        point where the lasers would intersect was set 500 meters in front of
        the X-wing. Two Krupx MG7 proton torpedo launchers were located in
        grooves near the middle of the underside of the fuselage on either side
        of the T-65B. A deflector shield generator located in the rear of the
        X-wing created a protective field which Chempat "Defender" deflector
        shield projector. This included shield projectors along the leading
        edges of the S-foils which, when in attack position, helped to expand
        the protective field. A Bertriak "Screamer" sensor jammer provided
        additional defense by scrambling the sensors of enemy starfighters and
        homing warheads. The X-wing could also use its laser cannons to shoot
        down enemy missiles.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  text-align: justify;
  padding: 3rem;
`
const Contains = styled.div`
  display: flex;
  justify-content: center;
`

export default Cannons
