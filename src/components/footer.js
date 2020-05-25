import React from "react"
import { Link } from "gatsby"
import CategoryQuery from "../queries/categoryQuery"

import Image from "./imageAnanas"

const Footer = ({ data }) => {
  return (
    <div className="uk-section uk-section-primary uk-padding-remove-bottom">
      <div className="uk-container">
        <div className="uk-margin-medium-bottom">
          <div className="uk-child-width-auto@m uk-flex-middle uk-grid" data-uk-grid>
            <div className="uk-first-column">
              <div className="uk-text-left@m uk-text-center">
                <Link to="/" className="uk-navbar-item uk-logo"><Image className="uk-margin-small-right"/></Link>
              </div>
            </div>
            <div className="uk-margin-auto">
              <ul className="uk-subnav uk-flex-center" data-uk-margin>
                <CategoryQuery />
                <li className="uk-link-toggle">
                  <Link to={`/contact`}>Контакт</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="uk-text-right@m uk-text-center">
                <div className="uk-child-width-auto uk-grid-small uk-flex-center uk-grid" data-uk-grid>
                  <div>
                    <a href="tel:+380996641000" className="uk-icon-link uk-icon" data-uk-icon="receiver" data-uk-tooltip="+38 (099) 66-410-00"></a>
                  </div>
                  <div>
                    <span className="uk-icon-link uk-icon" data-uk-icon="location" data-uk-tooltip="г.Запорожье, проспект Соборный (Ленина) 92 "></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer