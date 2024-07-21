import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
import logo from '../../Assets/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import { AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showNav = () => {
    setActive(true);
  };

  const removeNavbar = () => {
    setActive(false);
  };

  return (
    <section className="navBarSection">
      <header className="header">
        <div className="logoDiv">
          <a href="#" className="logo" style={{fontSize:"25px"}}>
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className={`navBar ${active ? 'activeNavbar' : ''}`}>
          <ul className="navLists" style={{margin:"10px",gap:"15px"}}>
            <li className="navItem" style={{fontSize:"25px"}}>
            <Link to="/" className="navLink"><AiOutlineHome/>Home</Link>
            </li>
            <li className="navItem" style={{fontSize:"25px"}}>
            <Link to="/skills" className="navLink"><AiOutlineUser/>Skills</Link>
            </li>
            <li className="navItem" style={{fontSize:"25px"}}>
              <Link to="/projects" className="navLink"><AiOutlineFundProjectionScreen/>Projects</Link>
            </li>
            <li className="navItem" style={{fontSize:"25px"}}>
              <a href="#" className="navLink"><AiOutlineContacts/>Contact</a>
            </li>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
