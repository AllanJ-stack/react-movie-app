import React from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import {Link} from 'react-router-dom'


export default function Header() {
    
    return (
        <header>
                <div className="logo">
                    <h1><Link to="/movies">MovieMax</Link></h1>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/actionmovies">Action Movies</Link></li>
                    <li><Link to="/comedymovies">Comedy</Link></li>
                    <li><Link to="/dramamovies">Drama</Link></li>
                <li>
                    <img src={Close} alt="" width="30" className="menu"/>
                </li>
                </ul>
                <div className="menu">
                    <img src={Menu} alt="" width="30"/>
                </div>
      </header>
     
    )
}

