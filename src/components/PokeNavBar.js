import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import pokedexLogo from '../img/pokedex-logo.png';

export default function PokeNavBar() {
  return <div>
    <nav>
      <div className="nav-wrapper orange darken-4">
        <a href="/" className="brand-logo logo-nav">
          <img src={pokedexLogo} alt="pokedex logo" />  
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Pokedex</a></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    </nav>
    <Outlet />
  </div>
  ;
}
