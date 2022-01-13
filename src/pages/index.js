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
            <h1>X-Wing Sauce</h1>
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
