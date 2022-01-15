import React from "react"
import Tarcomp from "../assets/video/targeting.mp4"

const Targeting = () => {
  return (
    <div className="flex-container" id="engines">
      <article className="flex-item-left">
        <h2>Targeting Computer</h2>
        <p>
          "Luke, you switched off your targeting computer! What's wrong?"
          <br />
          "Nothing. I'm all right."
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
      <video controls className="flex-item-right target">
        <source src={Tarcomp} type="video/mp4" />
        <track kind="captions" srcLang="en" />
      </video>
    </div>
  )
}

export default Targeting
