import React from "react"  
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"  
import ArticlesComponent from "../components/articles"

import "../assets/css/main.css"

const Devices = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default Devices