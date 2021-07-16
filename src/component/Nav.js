import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const navstyle = {
        color: "white", 
        textDecoration: 'none'
    }
    return (
        <nav>
           <h3>logo</h3> 
           <ul className= 'nav-links'>
               <Link to="/" style={navstyle}><li>Home</li> </Link>
               <Link to="/about" style={navstyle}><li>About</li></Link>
               <Link to="/shop" style={navstyle}><li>Shop</li></Link>
           </ul>
        </nav>
    )
}

export default Nav
