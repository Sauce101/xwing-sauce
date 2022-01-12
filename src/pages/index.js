import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Xwing from "../components/Xwing"

export default function Home() {
  return (
    <Layout>
      <header className="hero">
        <StaticImage
          src="../assets/images/newxwing.jpg"
          alt="starfighter"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>x-wing sauce</h1>
            {/* <h4>no fluff, just recipes</h4> */}
          </div>
        </div>
      </header>
      <Xwing />
    </Layout>
  )
}

// export default function Home() {
//   return (
//     <Layout>
//       <Xwing />
//     </Layout>
//   )
// }
