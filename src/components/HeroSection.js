import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const HeroSection = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/parkedx.jpg"
        alt="starfighter"
        placeholder="blurred"
        layout="fullWidth"
        className="heros"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
`

export default HeroSection
