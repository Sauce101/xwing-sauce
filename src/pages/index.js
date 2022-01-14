import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Xwing from "../components/Xwing"
import Seo from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <Seo title="T-65B" />
      <header className="hero">
        <StaticImage
          src="../assets/images/hero02.jpg"
          alt="starfighter"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>X-wing Sauce</h1>
            <h2>T-65B</h2>
          </div>
        </div>
      </header>
      <Xwing />
    </Layout>
  )
}
