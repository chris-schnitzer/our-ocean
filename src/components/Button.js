import { NavLink } from 'react-router-dom';

export default function Button() {
	return(
		<>
			<NavLink className="button" to="take-action">Take Action</NavLink>
		</>
	);
}