import React from "react"  
import { Link } from "gatsby"
import CategoryQuery from "../queries/categoryQuery"
import Image from "./image"

const Nav = () => (  
  <div>
    <div className="uk-position-relative">
      <nav className="uk-navbar-container uk-box-shadow-medium" data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;" data-uk-navbar="dropbar: true">
        <div className="uk-navbar-left">
          <Link to="/" className="uk-navbar-item uk-logo uk-item"><Image className="uk-margin-small-right"/><h1>iRepair</h1></Link>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-visible@m">
            <CategoryQuery />
            <li className="uk-link-toggle">
              <Link to={`/contact`}>Контакт</Link>
            </li>
          </ul>
          <a className="uk-navbar-toggle uk-hidden@m" data-uk-navbar-toggle-icon href="#"></a>
          <div className="uk-navbar-dropdown uk-hidden@m" data-uk-drop="boundary: !nav; pos: bottom-justify;">
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

export default Nav