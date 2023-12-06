import { useState } from 'react';

import underwaterImg from "../images/underwater.jpg";
import pollutedImg from "../images/polluted.jpg";
import fishingVillage from "../images/land_sea.jpg";
import Button from '../components/Button.js';

export default function Home() {

	return(
		<>	
			<div className="firstHead">
				<h1 className="homeHeader">Ocean water covers more than 70 percent of the Earth, 
				and only in recent decades have we begun to understand how humans impact this 
				watery habitat.
				</h1>
			</div>
			
			<img className="homeImageOne" src={underwaterImg}/>
			
			<div className="secondHead">
				<h1 className="homeHeader">Until fairly recently it was assumed that no matter 
				how much trash and chemicals humans dumped into the oceans, the effects would be 
				negligible.
				</h1>
			</div>

			<img 
				className="homeImageTwo" src={pollutedImg}/>

			<div className="thirdHead">
				<h1 className="homeHeader">The many types of marine pollution affect entire ecosystems which in turn 
				affects us.
				</h1>
			</div>
			

			<img className="homeImageThree" src={fishingVillage} />
			
			<div className="fourthHead">
				<h1 className="homeHeader">
				If no action is taken, the plastic will increasingly impact our ecosystems, 
				health, and economies. If we don’t take action collectively, we’ll all pay 
				the price individually.
				</h1>
				<Button />
			</div>
		</>
	);
}