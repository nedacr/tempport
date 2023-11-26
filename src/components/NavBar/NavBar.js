import React, { useState } from 'react'
import './NavBar.css';
import logo from '../../assets/placehold.jpg';
import contactImg from '../../assets/contact.png';
import { Link } from  'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
          <img src={logo} alt="Logo" className='logo' />
          <div className="desktopMenu"> 
            <Link to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" activeClassName="active">Homeeee</Link>
            <Link to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" activeClassName="active">About</Link>
            <Link to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" activeClassName="active">Portfolio</Link>
            <Link to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" activeClassName="active">Clients</Link>
          </div> 
          <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
          }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
            <img src={menu} alt="Menue" className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
          <div className="navMenu" style={{display: showMenu? 'flex':'none'}}> 
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={() =>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Contact</Link>
          </div> 
        </nav>
    )
}

export default Navbar;