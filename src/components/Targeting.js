import React from "react"
import Tarcomp from "../assets/video/targeting.mp4"
import Posterboy from "../assets/images/poster25.png"

const Targeting = () => {
  return (
    <div className="flex-container">
      <article className="flex-item-right">
        <h2>Targeting Computer</h2>
        <p>
          <dl>
            <dd>
              <span title="Source: Star Wars: Episode IV A New Hope">
                <small>
                  "
                  <i>
                    Luke, you switched off your targeting computer! What's
                    wrong?
                  </i>
                  "<br />"<i>Nothing. I'm all right.</i>"
                </small>
              </span>
            </dd>
          </dl>
        </p>
        <p>
          A targeting computer, sometimes called target computer, targeting
          synchronizer, or a fire-control system, was a device used aboard
          starfighters to aid pilots in targeting their weapons. A target was
          considered vulnerable when it was aligned with the electronic
          crosshairs of a targeting computer's gun-sights. During the Galactic
          Civil War, the targeting computers used by the Alliance to Restore the
          Republic indicated the distance in meters.
        </p>
      </article>
      <video
        className="flex-item-left target"
        controls
        poster={Posterboy}
        disablePictureInPicture
        controlsList="nodownload"
      >
        <source src={Tarcomp} type="video/mp4" />
        <track kind="captions" srcLang="en" />
      </video>
    </div>
  )
}

export default Targeting
