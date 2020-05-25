import React from "react"  
import PropTypes from "prop-types"

import Seo from "./seo"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {  
  return (
    <>
      <Seo />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout  