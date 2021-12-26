import React from 'react'
import '../styles/Navbar.css'
import  data  from "../data/data.json"
import {Link} from "react-router-dom"

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <a href="/">
                    <img id='logoImage' src={data.logo} alt="Not" />
                </a>
                </div>

                <a className="navLinks" href="/miPhones">Mi Phones
                </a>
                <a className="navLinks" href="/redmiPhones">Redmi Phones
                </a>
                <a className="navLinks" href="/tv">TV
                </a>
                <a className="navLinks" href="/laptops">Laptops
                </a>
                <a className="navLinks" href="/lifestyle">Lifestyle & fitness
                </a>
                <a className="navLinks" href="/home">Home
                </a>
                <a className="navLinks" href="/audio">Radio
                </a>
                <a className="navLinks" href="/accessories">Accessories
                </a>

                <div className='searchBox'>
                    <input type="text" name='search' placeholder='search products' /> {searchIcon}

                </div>



           
            
        </div>
    )
}

export default Navbar
