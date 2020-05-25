import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const CategoryQuery = () => {
	return(
		<StaticQuery
      query={graphql`
        query {
          allStrapiCategory {
            edges {
              node {
                strapiId
                name
              }
            }
          }
        }
      `}
      render={data =>
        data.allStrapiCategory.edges.map((category, i) => {
          return (
            <li key={category.node.strapiId} className="uk-link-toggle">
              <Link to={`/category/${category.node.strapiId}`}>
                {category.node.name}
              </Link>
            </li>
          )
        })
      }
    />
	)
}

export default CategoryQuery