import React from "react"  
import { Link } from "gatsby"

const Card = ({ article }) => {  
  return (
    <Link to={`/article/${article.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            height="100"
            width="200"
          />
        </div>
        <div className="uk-card-body">
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card