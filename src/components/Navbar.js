import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Button from './Button';

import './Navbar.css';
import logo from '../images/logo.svg';

export default function Navbar() {	
	const [open, setOpen] = useState(false);

	return(
		<>	
			<NavLink to="/" onClick={() => setOpen(false)}><img className="logo" src={logo} alt="Our Ocean logo"/></NavLink>
			<div onClick={() => setOpen(!open)} className="menu">
				<div className={open ? "top top-rotate" : "top"}>
				</div>
				<div className={open ? "center center-delete" : "center"}>
				</div>
				<div className={open ? "bottom bottom-rotate" : "bottom"}>
				</div>
			</div>

			<nav className={open ? "nav-links-active" : "nav-links"}>
				<ul>
					<li className="list" onClick={() => setOpen(false)}><NavLink to="/">Home</NavLink></li>
					<li className="list" onClick={() => setOpen(false)}><NavLink to="more-info">More Info</NavLink></li>
					<li className="list" onClick={() => setOpen(false)}><NavLink to="news">News</NavLink></li>
					<li className="list last" onClick={() => setOpen(false)}><NavLink to="events">Events</NavLink></li>
					<li className="button" onClick={() => setOpen(false)}><NavLink  to="take-action">Take Action</NavLink></li>
				</ul>
			</nav>
		</>
	);
}