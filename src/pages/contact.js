import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`  
  query {
    strapiContact {
      open_hours {
        day
        open_hour
        close_hour
      }
      contact_content
    }
  }
`

const Contact = ({ data }) => {
  const workHours = data.strapiContact.open_hours
  const content = data.strapiContact.contact_content
  return (
    <Layout>
        <div className="uk-cover-container uk-height-medium">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.907239727908!2d35.1690373155765!3d47.82201507919951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5e07c65e351f%3A0xdeca3ace265dcc4c!2z0L_RgNC-0YHQv9C10LrRgiDQodC-0LHQvtGA0L3QuNC5LCA5Miwg0JfQsNC_0L7RgNGW0LbQttGPLCDQl9Cw0L_QvtGA0ZbQt9GM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sua!4v1473857855188" 
            frameborder="0" 
            width="100%"
            height="100%"
            allowfullscreen
            //data-uk-height-viewport
          ></iframe>
        </div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-child-width-expand@s" data-uk-grid>
            <div>
              <div className="uk-card">
                <h4 className="uk-text-center">Время работы</h4>
                <table className="uk-table uk-table-divider">
                  <thead>
                    <tr>
                      <th>День</th>
                      <th>Открыто</th>
                      <th>Закрыто</th>
                    </tr>
                  </thead>
                    {workHours.map((data, index) => {
                      return(
                        <tbody>
                          <tr>
                            <td>{data.day}</td>
                            <td>{data.open_hour}</td>
                            <td>{data.close_hour}</td>
                          </tr>
                        </tbody>
                      )
                    })}
                </table>
              </div>
            </div>
            <div>
              <div className="uk-inline">
                <ReactMarkdown source={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>  
  )
}

export default Contact