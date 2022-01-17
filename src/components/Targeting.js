import React from "react"
import Tarcomp from "../assets/video/targeting.mp4"
import Posterboy from "../assets/images/tc480.png"
import styled from "styled-components"

const Targeting = () => {
  return (
    <Wrapper>
      <Contains>
        <video
          controls
          poster={Posterboy}
          disablePictureInPicture
          controlsList="nodownload"
        >
          <source src={Tarcomp} type="video/mp4" />
          <track kind="captions" srcLang="en" />
        </video>
      </Contains>
      <div>
        <p className="sot">
          {/* <blockquote>
            <small>
              "
              <i>
                Luke, you switched off your targeting computer! What's wrong?
              </i>
              "<br />"<i>Nothing. I'm all right.</i>"
            </small>
          </blockquote> */}
          <b>STAY ON TARGET</b>
        </p>
        <h2>Targeting Computer</h2>
        <p>
          A targeting computer, sometimes called target computer, targeting
          synchronizer, or a fire-control system, was a device used aboard
          starfighters to aid pilots in targeting their weapons. A target was
          considered vulnerable when it was aligned with the electronic
          crosshairs of a targeting computer's gun-sights. During the Galactic
          Civil War, the targeting computers used by the Alliance to Restore the
          Republic indicated the distance in meters.
        </p>
      </div>
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
`

export default Targeting
