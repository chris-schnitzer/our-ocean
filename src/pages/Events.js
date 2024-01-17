import { useLoaderData, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Events() {

	const eventsData = useLoaderData();
		
	useEffect(() => {
		document.title = `Our Ocean | Events`;
	}, []) 
	
	return (
			<div className="container events-wrap">
				<h1>Find an Event near you whether it’s a beach clean up, 
				a demonstration, a summit or a fundraising get together.
				</h1>
				{eventsData.map((event, index) => {
					return (
					<div key={event._id} className={ index === 0 ? 'event-first' : 'event'}>
						<div>
							<div className="image-and-meta">
								<img src={event.img} alt={event.alt}/>
								<div>
									<p className="date">{event.dateDay}</p>
									<p>{event.dateMonth}</p>

									<p><b>{event.time}</b></p>
									
									<p><b>{event.location}</b></p>
								</div>
							</div>

							<Link to={ event._id.toString() }><h2>{event.eventTitle}</h2></Link>
							<p className="event-summary">{event.body.substring(0, 150) + "..."}</p>
							<Link to={ event._id.toString() }><p>View</p></Link>
						</div>
					</div>
					)
				})}	
			</div>
	);
}

export const eventsLoader = async () => {
	const res = await fetch('http://localhost:4000/events');
	return res.json();
}