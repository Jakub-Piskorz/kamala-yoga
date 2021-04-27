/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import profilePic from "../../content/profilepic.jpg"
import Img from "gatsby-image"

const Bio = () => {
  const { author, file } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
      }
      file(relativePath: { eq: "profilepic.jpg" }) {
        childImageSharp {
          fixed(width: 80, height: 80, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio">
      <Img
        fixed={file.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />
      <p style={{textAlign: "left"}}>
        Written by {author.firstName}.<br/>
        {` `}
        {author?.description || null}
        {` `}
        You can follow me on{" "}
        <a href={`https://www.instagram.com/yogakamala2020/`}>
          Instagram
        </a> or <a href={`https://www.tiktok.com/@yogakamala22`}>TikTok</a>)
      </p>
    </div>
  )
}

export default Bio
