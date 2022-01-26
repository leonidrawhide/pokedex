import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import pokedexLogo from '../img/pokedex-logo.png';

export default function PokeNavBar() {
  return <div>
    <nav>
      <div className="nav-wrapper orange darken-4">
        <Link to="/" className="brand-logo logo-nav">
          <img src={pokedexLogo} alt="pokedex logo" />  
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Pokedex</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    </nav>
    <Outlet />
  </div>
  ;
}
