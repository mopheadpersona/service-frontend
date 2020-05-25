import React from "react"  
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`  
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content {
        name
        price
      }
      image {
        publicURL
      }
    }
  }
`

const Article = ({ data }) => {  
  const article = data.strapiArticle
  const priceList = data.strapiArticle.content
  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{article.title}</h1>
          <div className="uk-child-width-expand@s" data-uk-grid>
            <div >
              <div className="uk-position-relative uk-position-center">
                <img 
                  src={article.image.publicURL} 
                  alt={article.image.publicURL}
                  height="200"
                  width="300"
                />
                
              </div>
            </div>
            <div className="uk-margin-large-top">
              {priceList.map((service, index) => {
                return (
                  <div className="uk-grid-small uk-margin-small-right uk-margin-top" data-uk-grid>
                    <div className="uk-width-expand" data-uk-leader="media: @m">{service.name}</div>
                    <div>{service.price}₴</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article