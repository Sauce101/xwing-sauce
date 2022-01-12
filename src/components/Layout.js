import React from "react"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/star.css"
// import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  )
}

export default Layout
