import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Astro = () => {
  return (
    <Wrapper>
      <h2>astromech droids</h2>
      <p>
        The X-wing was equipped with a long-range hyperdrive system consisting
        of four GBk-585 hyperdrive motivators. An astromech droid served as the
        X-wing's navigation system, plugging into a socket near the engines
        above and behind the cockpit. The droid assisted with calculations and
        could hold up to 10 hyperspace coordinates, as well as make repairs to
        the craft. It could readjust power levels between different systems
        multiple times per second to assist the pilot in a fight. The droid was
        capable of assuming full control of the X-wing if necessary too, with or
        without a pilot. In an emergency a separator charge would launch the
        droid clear of the craft.
      </p>
      <Contains>
        <StaticImage
          src="../assets/images/Astro_droids.png"
          alt="Astro droids"
          className="rounded"
          placeholder="blurred"
        />
      </Contains>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  padding: 3rem;
`
const Contains = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export default Astro
