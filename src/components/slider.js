import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Slider = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="autoplay: true; pause-on-hover: true; autoplay-interval: 4000; ratio: 7:3">
      <ul className="uk-slideshow-items">
        <StaticQuery
          query={graphql`
            query {
              strapiHome {
                slider {
                  slide_image {
                    publicURL
                  }
                  slide_title
                  slide_text
                }
              }
            }
          `}
          render={data => 
            data.strapiHome.slider.map((slide, index) => {
              return (
                <li>
                  <img 
                    src={slide.slide_image.publicURL} 
                    alt={slide.slide_image.publicURL} 
                    data-uk-cover
                  />
                  <div className="uk-position-center uk-position-small uk-text-center uk-light">
                    <h2 className="uk-margin-remove">{slide.slide_title}</h2>
                    <p className="uk-margin-remove">{slide.slide_text}</p>
                  </div>
                </li>
              )
            })
          }
        />
      </ul>
      <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
      <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
    </div>
  )
}

export default Slider