import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Router, Redirect } from "@reach/router"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="header">
        <a className="skip-link screen-reader-text" href="/">
          Yoga Kamala
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
      {children}
      <footer>
        Created by{" "}
        <a href="http://jakubpiskorz.dev" target="_blank">
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
