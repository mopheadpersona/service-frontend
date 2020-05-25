import React from "react"  

import Layout from "../components/layout"  
import Slider from "../components/slider"
import Products from "../components/products"
import Content from "../components/content"

import "../assets/css/main.css"

const IndexPage = () => (  
  <Layout>
    <Slider />
    <Products />
    <Content />
  </Layout>
)

export default IndexPage