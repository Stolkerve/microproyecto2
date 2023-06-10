import React from 'react'
import "./navbar.css"
import logo from "../assets/cinex2.webp"

const Navbar = () => {
  return (
    <nav>
        <img className='nav-logo' alt='Logo' src={logo}/>
        <div style={{gap: "1rem", display: "flex"}}>
            <button>Registrarse</button>
            <button>Ingresar</button>
        </div>
    </nav>
  )
}

export default Navbar