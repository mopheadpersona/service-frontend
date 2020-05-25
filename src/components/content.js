import React from "react"
import { StaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

const Content = () => {
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-small">
        <StaticQuery
          query={graphql`
            query {
              strapiHome {
                content
              }
            }
          `}
          render={data => <ReactMarkdown source={data.strapiHome.content}/>}
        />
      </div>
    </div>
  )
}

export default Content