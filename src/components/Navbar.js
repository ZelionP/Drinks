import React from "react"
import { Link } from "react-router-dom"


const Navbar = () =>{
    return (
        <nav className="navbar">
            <nav className="nav-center">
                <Link to="/">
                <h1 className="logo"> j<span>Coders</span> Drinks</h1>
                </Link>
                <ul className="nav-links">
                    <li>
                    <Link to="/" >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" >
                        About
                        </Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}
export default Navbar