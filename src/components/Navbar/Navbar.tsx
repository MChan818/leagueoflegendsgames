import * as React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.jpg'

import './Navbar.css'

const Navbar = () =>{

    return(
        <nav className='navbar-container'>
            <ul>
                <li>
                    <Link to={'/'}>
                        <img src={logo} alt="Home_logo" className='navbar-logo'/>
                    </Link>
                </li>
                <li>
                    <Link to={'/lol/roulette'}>
                        LoL Roulette
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;