import React, { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
    wpPage: { content: content },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
      wpPage(title: { eq: "Homepage" }) {
        content
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="header">
        <a className="skip-link screen-reader-text" href="/">
          Kamala Yoga
        </a>
        <div className="main-menu">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
          </ul>
        </div>
      </header>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <footer>
        Created by{" "}
        <a href="http://jakubpiskorz.pl" target="_blank">
          Jakub Piskorz
        </a>
        , powered by{" "}
        <a href="https://wordpress.org" target="_blank">
          Wordpress
        </a>{" "}
        and{" "}
        <a href="https://www.gatsbyjs.com" target="_blank">
          Gatsby
        </a>
        .
      </footer>
    </div>
  )
}

export default Layout
