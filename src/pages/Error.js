import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import plasticImg from '../images/plastic_bag_2.png'
import sealImg from '../images/seal.png'
export default function Error() {

	useEffect(() => {
		document.title = "Our Ocean | Error";
	});

	return(
		<>
		<div className="container error-wrap">
				<div>
					<h1 className="lrg-404">404</h1>
					<h2 className="error-title">Page Not Found</h2>
					<img src={plasticImg} />
				</div>	
		</div>
		<ul className="secondary-nav">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/more-info">More Info</Link></li>
				<li><Link to="/news">News</Link></li>
				<li><Link to="/events">Events</Link></li>
				<li><Link to="/take-action">Take Action</Link></li>
		</ul>
		<img className="sealImg" src={sealImg} />
		</>
	);
}