import React, { useEffect } from "react"
import AOS from "aos"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Router, Redirect } from "@reach/router"
import parse from "html-react-parser"
import Menu from "./menu"

const Layout = ({ isHomePage, children }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  useEffect(() => {
    AOS && AOS.refresh()
  })
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="header">
        <a className="skip-link screen-reader-text" href="/">
          Yoga Kamala
        </a>
        <Menu />
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
