import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center" data-uk-height-viewport>
    	<div className="uk-width-1-1">
    		<div className="uk-container">
    			<h1 className="uk-heading-2xlarge uk-margin-medium uk-text-center">404</h1>
    			<p className="uk-text-large">Page Not Found</p>
    		</div>
    	</div>
    </div>
  </Layout>
)

export default NotFoundPage
