import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>X-Wing Sauce</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com/get-started/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
