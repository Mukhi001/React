import { Link } from "react-router-dom"
import "./navbar.css"
import { NavLink } from "react-router-dom"
import { MdMargin } from "react-icons/md"

export const NaviBar=()=>{

    return (
        <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">

        <ul className="navbar-nav">
          <NavLink to="/" style={{textDecoration:"none",marginRight:"10px"}}>
            Main
          </NavLink>
          <NavLink to="/about" style={{textDecoration:"none"}}>
           About
          </NavLink>
        </ul>
     
    </div>
  </nav>
</>

    )
}