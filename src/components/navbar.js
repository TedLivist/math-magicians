/* eslint-disable arrow-body-style */

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <ul className="menu-items">
        {links.map((link) => {
          return (
            <li key={link.id} className={link.id === 3 ? '' : 'link-border'}>
              <NavLink to={link.path} className="link-margin">{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
