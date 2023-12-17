import { Link } from 'react-router-dom';

import plasticImg from '../images/plastic_poll_lrg_opt.jpg';

export default function PlasticPollution() {
	return (
		<>	
			<div className="container subPageWrap">
				<h1>Plastic Pollution</h1>
				<img src={plasticImg} alt="Plastic in sea"/>
				<p>Plastic pollution seeps into the ocean through run-off and even purposeful 
				dumping. The amount of plastic in the Atlantic Ocean has tripled since the 
				1960s. The garbage patch floating in the Pacific Ocean, almost 620,000 square 
				miles(twice the size of Texas) is a powerful image of our plastic problem.</p><br/>
				<p>A huge culprit is single-use plastics, used once before tossed into the trash or 
				directly into the ocean. These single-use items are accidentally consumed by many 
				marine mammals. Plastic bags resemble jellyfish, a common food for sea turtles, 
				while some seabirds eat plastic because it releases a chemical that makes it smell 
				like its natural food. Discarded fishing nets drift for years, ensnaring fish 
				and mammals.</p><br/>
				<p>Bits of plastic swirl throughout the water column, even sinking to the deepest 
				depths of the ocean. Scientists found plastic fibers in corals in the Atlantic 
				Ocean—and more concerning, they found that the corals readily ate plastic over food. 
				Dying marine mammals, washing up on shore, also contain plastic inside their 
				stomachs.</p>
				<Link to="/more-info">Go Back</Link>
			</div>
		</>
	)
}