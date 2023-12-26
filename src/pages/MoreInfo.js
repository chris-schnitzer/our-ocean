import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import chemThumbImg from '../images/chem_poll_thumb.jpg';
import noiseThumbImg from '../images/noise_poll_thumb.jpg';
import lightThumbImg from '../images/light_poll_thumb.jpg';
import plasticThumbImg from '../images/plastic_poll_thumb.jpg';

export default function MoreInfo() {
	useEffect(() => {
	document.title =   "Our Ocean | More Info";
}, [])
	return(
		<div className="container">
			<h1>
			Our Ocean is dedicated to restoring the 
			ocean to full health by addressing the many types 
			of marine pollution.
			</h1>
			<p className="moreInfoIntro">Marine pollution occurs when substances used or
			spread by humans, such as industrial, agricultural 
			and residential waste, particles, noise, excess 
			carbon dioxide or invasive organisms enter the ocean
			and cause harmful effects there.</p>

			<h2>The many “flavours” of marine pollution:</h2>

			{/*polution types*/}
			<section className="pollutionTypesWrap">
			<div className="rowOne">
				<div className="pollutionType">
					<img src={chemThumbImg} alt="Factories on side of river"/>
					<h3>Chemical Pollution</h3>
					<p>Chemical pollution is the introduction of harmful contaminants. 
					Common man-made pollutants that reach the ocean include pesticides, 
					herbicides, fertilizers, detergents, oil, industrial chemicals, and 
					...</p>
					<Link to="chemical-pollution">Read More</Link>
				</div>

				<div className="pollutionType">
					<img src={noiseThumbImg} alt="Large tanker out to sea"/>
					<h3>Noise Pollution</h3>
					<p>Pollution is not always visible. In large bodies of water, sound 
					waves can carry undiminished for miles. The increased presence of loud 
					or persistent sounds from ships, sonar devices, and oil rigs disrupts 
					natural noises in the ...</p>
					<Link to="noise-pollution">Read More</Link>
				</div>
			</div>
			<div className="rowTwo">	
				<div className="pollutionType">
					<img src={lightThumbImg} alt="Coastal city"/>
					<h3>Light Pollution</h3>
					<p>Since the invention of the lightbulb, light has spread across the 
					globe, reaching almost every ecosystem. Often thought of as a terrestrial 
					problem, scientists are starting to understand how ...</p>
					<Link to="light-pollution">Read More</Link>
				</div>
				
				<div className="pollutionType">
					<img src={plasticThumbImg} alt="Plastic in sea"/>
					<h3>Plastic Pollution</h3>
					<p>Plastic pollution seeps into the ocean through run-off and even 
					purposeful dumping. The amount of plastic in the Atlantic Ocean has tripled 
					since the 1960s. The garbage ...
					</p>
					<Link to="plastic-pollution">Read More</Link>
				</div>
			</div>
			</section>

			<section className="summary">
				<h2>Is there a fix to Marine Pollution?</h2> <br/>
				<p>Many national laws, as well as international 
				agreements, now forbid dumping of harmful materials 
				into the ocean, although enforcing these regulations
				 remains a challenge.</p><br/>
				<p>Many pollutants still persist in the environment, 
				difficult to fully remove. Chemical pollutants often
				 cannot be broken down for long periods of time, or 
				 they increase in concentration as they move up the 
				 food web. Because plastic is thought to take hundreds 
				 of years to break down, it poses a threat to the marine 
				 environment for centuries.</p><br/>
				<p>Isolated efforts to restore estuaries and bays have 
				met with some success, but pollution gets trapped in 
				marine sediment and makes complete clean-ups nearly 
				impossible.</p><br/>
				<p>Moving forward, encouraging recycling and reuse can
				 minimize plastic pollution. Dampening unnecessary lights 
				 at night can limit light pollution. And encouraging 
				 responsible chemical-use through consumer and political 
				 actions can protect the environment for the future.</p>
			 </section>

		</div>

	);
}

