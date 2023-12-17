import { Link } from 'react-router-dom';

import lightImg from '../images/light_poll_lrg_opt.jpg';

export default function LightPollution() {
	return (
		<>	
			<div className="container subPageWrap">
				<h1>Light pollution</h1>
				<img src={lightImg} alt="Coastal city"/>
				<p>Since the invention of the lightbulb, light has spread across the globe, 
				reaching almost every ecosystem. Often thought of as a terrestrial problem, 
				scientists are starting to understand how artificial light at night affects 
				many marine organisms.</p><br/>
				<p>Light pollution penetrates under the water, creating a vastly different 
				world for fish living in shallow reefs near urban environments. Light 
				disrupts the normal cues associated with circadian rhythms, to which species 
				have evolved timing of migration, reproducing, and feeding. Artificial light 
				at night can make it easier for predators to find smaller fish prey and can 
				affect breeding in reef fish.</p>
				<Link to="/more-info">Go Back</Link>
			</div>
		</>
	)
}