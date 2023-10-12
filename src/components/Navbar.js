import { NavLink } from 'react-router-dom';

export default function Navbar() {	
	return(
		<>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="more-info">More Info</NavLink></li>
				<li><NavLink to="news">News</NavLink></li>
				<li><NavLink to="events">Events</NavLink></li>
				<li><NavLink to="take-action">Take Action</NavLink></li>
			</ul>
		</>
	);
}