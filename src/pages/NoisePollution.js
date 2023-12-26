import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import noiseImg from '../images/noise_poll_lrg_opt.jpg';

export default function NoisePollution() {
	
	useEffect(() => {
		document.title = "Our Ocean | Noise Pollution";
	});

	return (
		<>	
			<div className="container subPageWrap">
				<h1>Noise pollution</h1>
				<img src={noiseImg} alt="Large tanker out to sea" />
				<p>Pollution is not always visible. In large bodies of water, sound waves
				 can carry undiminished for miles. The increased presence of loud or 
				 persistent sounds from ships, sonar devices, and oil rigs disrupts natural
				  noises in the marine environment.</p><br/>
				<p>For many marine mammals, like whales and dolphins, low visibility and 
				large distances make non-visual underwater communication critical. Toothed 
				whales use echolocation—emitting sounds that reflect off surfaces—to help 
				them “see” in the ocean. Unnatural noises interrupt communication, disrupting 
				migration, communication, hunting, and reproduction patterns for many marine 
				animals.</p>
				<Link to="/more-info">Go Back</Link>
			</div>
		</>
	)
}