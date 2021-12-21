import React from 'react'
import '../styles/Navbar.css'
import {logo} from "../data/data.json"

import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <Link to="/dsd">
                    <img id='logoImage' src={logo} alt="Not" />
                </Link>
                
                <Link className="navLinks" to="/miphones">Mi Phones
                </Link>
                <Link className="navLinks" to="/tv">TV
                </Link>
                <Link className="navLinks" to="/laptops">Laptops
                </Link>
                <Link className="navLinks" to="/miphones">Mi Phones
                </Link>
                <Link className="navLinks" to="/miphones">Mi Phones
                </Link>
                <Link className="navLinks" to="/miphones">Mi Phones
                </Link>
                <Link className="navLinks" to="/miphones">Mi Phones
                </Link>



            </div>
            
        </div>
    )
}

export default Navbar
