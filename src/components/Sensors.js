import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Sensors = () => {
  return (
    <Wrapper>
      <h2 id="sensors">Sensors</h2>
      <p>
        The T-65B's sensor systems were located inside the X-wing's nose cone.
        The sensor system, a Carbanti transceiver package, was made up of a
        Fabritech ANs-5d "lock track" full-spectrum transceiver, a Melihat
        "Multi Imager" dedicated energy receptor, and a Tana Ire Electro-photo
        receptor. These fed information directly to the targeting computer,
        which could track up to 1,000 sublight objects and acquire 20 targets.
        Additionally, a Fabritech K-blakan mini sensor scanned directly behind
        the X-wing to detect sensor sweeps and craft approaching from the rear.
      </p>
      <StaticImage
        src="../assets/images/T-65b.jpg"
        alt="components"
        placeholder="blurred"
      />
      <p>
        Under the X-wing was a cargo compartment, a repulsorlift, and three
        reinforced landing legs to protect the craft from rough landings and
        take-offs. Painted stripes on the rear of the S-foils identified each
        craft.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: justify;
  padding: 3rem;
`

export default Sensors
