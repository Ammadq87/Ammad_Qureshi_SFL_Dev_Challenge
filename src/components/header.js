import * as React from "react"
import Navbar from "./navbar"

const Header = ({ links }) => (
  
  // Moved all header information to navbar component
  <header>
    <Navbar links={links}/>
  </header>
)

export default Header
