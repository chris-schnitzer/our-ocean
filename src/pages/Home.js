import { useState, useEffect } from 'react';

import underwaterImg from "../images/underwater.jpg";
import pollutedImg from "../images/polluted.jpg";
import fishingVillage from "../images/land_sea.jpg";
import Button from '../components/Button.js';

export default function Home() {
	useEffect(() => {
		document.title="Our Ocean | Home";
	},[])
	return(
		<>	
			
			
			<div className="firstHead">
				<div className="firstHeadImageHolder"></div>
				<h1 className="homeHeader firstHomeHeader">Ocean water covers more than 70 percent of the Earth, 
				and only in recent decades have we begun to understand how humans impact this 
				watery habitat.
				</h1>
				<div className="scroll">
					<div className="scrollWheel"></div>
				</div>
			</div>
			<div className="secondHead">
				<div className="secondHeadImageHolder"></div>
				<h1 className="homeHeader secondHomeHeader">Until fairly recently it was assumed that no matter 
				how much trash and chemicals humans dumped into the oceans, the effects would be 
				negligible.
				</h1>
				<div className="secondScroll">
					<div className="secondScrollWheel"></div>
				</div>
			</div>
			
			<div className="thirdHead">
				<h1 className="homeHeader thirdHomeHeader">The many types of marine pollution affect entire ecosystems which in turn 
				affects us.
				</h1>
				<div className="thirdHeadImageHolder"></div>
				<div className="thirdScroll">
					<div className="thirdScrollWheel"></div>
				</div>
				

			</div>

			<div className="fourthHead">
				<h1 className="homeHeader fourthHomeHeader">
				If no action is taken, the plastic will increasingly impact our ecosystems, 
				health, and economies. If we don’t take action collectively, we’ll all pay 
				the price individually.
				</h1>
				<Button />
			</div>
		
		</>
	);
}