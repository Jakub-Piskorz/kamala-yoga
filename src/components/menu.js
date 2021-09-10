import { Link, useStaticQuery, graphql } from "gatsby"
const Menu = props => {
  const {
    wpMenu: {
      menuItems: {
        nodes: { ..._menuItems },
      },
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
    }
  `)
  let menuItems = []
  Object.keys(_menuItems).map((item, index) => {
    menuItems.push(_menuItems[index])
    // replacing Wordpress URLs with Gatsby URLs
    menuItems[index].url = menuItems[index].url.replace(
      "https://yoga.jakubpiskorz.dev",
      ""
    )
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
