import { Link } from 'react-router-dom';

import chemImg from '../images/chem_poll_lrg_opt.jpg';

export default function ChemicalPollution() {
	return (
		<>	
			<div className="container subPageWrap">
				<h1>Chemical pollution</h1>
				<img src={chemImg} alt="Factories on side of river" />
				<p>Chemical pollution is the introduction of harmful contaminants. 
				Common man-made pollutants that reach the ocean include pesticides, 
				herbicides, fertilizers, detergents, oil, industrial chemicals, and 
				sewage.</p><br/>
				<p>Many ocean pollutants are released into the environment far upstream 
				from coastlines. Nutrient-packed fertilizers applied to farmland, for 
				example, often end up in local streams and are eventually deposited into 
				estuaries and bays. These excess nutrients trigger massive blooms of 
				algae that rob the water of oxygen, leaving dead zones where few marine 
				organisms can live. Some chemical pollutants climb high into the food 
				webs like DDT, the insecticide that placed the bald eagle on the United 
				States Fish and Wildlife’s endangered species list.</p><br/>
				<p>Scientists are starting to better understand how specific pollutants, 
				leached into the ocean from other materials, affect marine wildlife. PFAS, 
				a chemical incorporated into many household products, accumulates in human 
				and marine mammal blood. Even pharmaceuticals ingested by humans, but not 
				fully processed by our bodies, end up in aquatic food webs.</p>
				<Link to="/more-info">Go Back</Link>
			</div>
		</>
	)
}