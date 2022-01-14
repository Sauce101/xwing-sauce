import React from "react"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
