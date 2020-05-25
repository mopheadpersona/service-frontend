import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Product = () => {
	return (
		<StaticQuery
        query={graphql`
          query {
            strapiHome {
              products {
                divice_image {
                  publicURL
                }
                divice_title
                divice_id
              }
            }
          }
        `}
        render={data => 
          data.strapiHome.products.map((divice, index) => {
            return (
              <Link to={`/category/${divice.divice_id}`} className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                  <div className="uk-card-media-top">
                    <img
                      src={divice.divice_image.publicURL}
                      alt={divice.divice_image.publicURL}
                      height="100"
                      width="200"
                    />
                  </div>
                  <div className="uk-card-body">
                    <p id="title" className="uk-text-large">
                      {divice.divice_title}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      />
	)
}

export default Product 