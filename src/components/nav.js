import React, { useState } from "react"
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import CategoryQuery from "../queries/categoryQuery"
import Image from "./image"


const Nav = () => {
  const [articleTitle, setArticleTitle] = useState(null)

  const data = useStaticQuery(graphql`
    query DeviceQuery {
      allStrapiArticle {
        edges {
          node {
            title
            strapiId
          }
        }
      }
    }
  `)

  const articles = data.allStrapiArticle.edges.map((edge, index) => edge.node)
  // [{title, id}, {title, id}]
  let id = 1
  articles.filter((pair, i) => articleTitle == pair.title ? id = pair.strapiId : "not good")

  return (
    <div>
      <div className="uk-position-relative">
        <nav className="uk-navbar-container uk-box-shadow-medium" data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;" data-uk-navbar="dropbar: true">
          <div className="uk-navbar-left">
            <Link to="/" className="uk-navbar-item uk-logo uk-item"><Image className="uk-margin-small-right"/><h1>iRepair</h1></Link>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-visible@m">
              <div>
                <a className="uk-navbar-toggle" data-uk-search-icon href="#"></a>
                <div className="uk-drop" data-uk-drop="mode: click; pos: left-center; offset: 0">
                  <form 
                    className="uk-search uk-search-navbar uk-width-1-1"
                    onSubmit={event => {
                      event.preventDefault() 
                      navigate(`/article/${id}`)
                    }}
                    value={articleTitle}
                    onChange={e => setArticleTitle(e.target.value)}
                  >
                    <input className="uk-search-input" type="search" placeholder="Search..." autoFocus/>
                  </form>
                </div>
              </div>
              <CategoryQuery />
              <li className="uk-link-toggle">
                <Link to={`/contact`}>Контакт</Link>
              </li>
              <li>
                <a href="tel:+380996641000" className="uk-icon-link uk-icon" data-uk-icon="icon: receiver"></a>
              </li>
            </ul>
            <a href="tel:+380996641000" className="uk-icon-link uk-icon uk-hidden@m" data-uk-icon="icon: receiver"></a>
            <a className="uk-navbar-toggle uk-hidden@m" data-uk-navbar-toggle-icon href="#"></a>
            <div className="uk-navbar-dropdown uk-hidden@m" data-uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
              <ul className="uk-nav uk-navbar-dropdown-nav uk-list uk-list-divider">
                <CategoryQuery />
                <li className="uk-link-toggle">
                  <Link to={`/contact`}>Контакт</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav