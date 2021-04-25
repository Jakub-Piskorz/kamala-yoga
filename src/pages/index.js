import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Router, Redirect } from "@reach/router"
import parse from "html-react-parser"
import Layout from "../components/layout"

const Homepage = ({ isHomePage, children }) => {
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
    <Layout>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </Layout>
  )
}

export default Homepage
