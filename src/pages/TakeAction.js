import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TakeAction() {
	
	useEffect(() => {
		document.title = "Our Ocean | Take Action";
	});
	
	return(
		<div className="take-action-container">
			<ul>
				<li><Link to="https://www.sas.org.uk/donate/" target="_blank">Donate</Link></li>
				<li><Link to="/events">Participate</Link></li>
				<li><Link to="https://www.sas.org.uk" target="_blank">Get In Touch</Link></li>
			</ul>
		</div>
	);
}