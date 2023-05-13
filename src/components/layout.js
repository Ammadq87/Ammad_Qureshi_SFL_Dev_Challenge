/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /**
  * Not fully needed, is optional to send Links to navbar since
  * it contains a defualt list of links to display. Client can send
  * new links that would update the navbar 
   */
  const links = [
    {text: data.site.siteMetadata?.title + ' (Home)' || 'Title', url: ''},
    {text: 'Page-2', url: 'page-2/'},
    {text: 'TypeScript', url: 'using-typescript/'}
  ] 

  return (
    <>
      {/* links prop is optional */}
      <Header links={links}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
