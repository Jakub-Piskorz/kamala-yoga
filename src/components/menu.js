import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react";
const Menu = props => {
  const {
    wpMenu: {
      menuItems: {
        nodes: { ..._menuItems },
      },
    },
    wp: {
      allSettings: { generalSettingsUrl: wpURL },
    },
  } = useStaticQuery(graphql`
    query {
      wpMenu(slug: { eq: "main-menu" }) {
        menuItems {
          nodes {
            url
            label
            databaseId
          }
        }
      }
      wp {
        allSettings {
          generalSettingsUrl
        }
      }
    }
  `)
  let menuItems = []
  Object.keys(_menuItems).map((item, index) => {
    menuItems.push(_menuItems[index])
    // replacing Wordpress URLs with Gatsby URLs
    menuItems[index].url = menuItems[index].url.replace(wpURL, "")
  })
  return (
    <div className="main-menu">
      <ul>
        {menuItems.map(menuItem => (
          <li key={menuItem.databaseId}>
            <Link to={menuItem.url}>{menuItem.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
