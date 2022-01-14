import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Xwing from "../components/Xwing"
import Seo from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <Seo title="T-65B" />
      <header className="hero" id="hero">
        <StaticImage
          src="../assets/images/hero.png"
          alt="starfighter"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>X-wing</h1>
          </div>
        </div>
      </header>
      <Xwing />
    </Layout>
  )
}
