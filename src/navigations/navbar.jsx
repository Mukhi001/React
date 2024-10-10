import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { NavLink } from "react-router-dom"
import { MdMargin } from "react-icons/md"

export const NaviBar=()=>{
  const home=useNavigate()
  const handler=()=>{
    home("/")

  }

  const about=useNavigate()
  const handler1=()=>{
    about("/about")

  }

    return (
        <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">

        <ul className="navbar-nav">
          {/* <NavLink or Link to="/" style={{textDecoration:"none",marginRight:"10px"}}>
            Main
          </NavLink>
          <NavLink or Link to="/about" style={{textDecoration:"none",marginRight:"10px"}}>
           About
          </NavLink>
          <NavLink or Link to="/*" style={{textDecoration:"none"}}>
          notfound
          </NavLink> */}


          <a onClick={handler}>
          home
          </a>
          <a onClick={handler1}>
          about
          </a>
        </ul>
     
    </div>
  </nav>
</>

    )
}