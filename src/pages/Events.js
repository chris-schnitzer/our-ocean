import { useLoaderData, Link } from 'react-router-dom';



export default function Events() {
	const eventsData = useLoaderData(); 
	return (
			<div className="container events-wrap">
				<h1>Find an Event near you whether it’s a beach clean up, 
				a demonstration, a summit or a fundraising get together.
				</h1>
				{eventsData.map(event => (
					<div key={event.id}>
						<div className={event.id === 1 ? 'event-first' : 'event'}>
							<div className="image-and-meta">
								<img src={event.img} alt={event.alt}/>
								<div>
									<p className="date">{event.dateDay}</p>
									<p>{event.dateMonth}</p>

									<p><b>{event.time}</b></p>
									
									<p><b>{event.location}</b></p>
								</div>
							</div>

							<Link to={ event.id.toString() }><h2>{event.eventTitle}</h2></Link>
							<p className="event-summary">{event.body.substring(0, 150) + "..."}</p>
							<Link to={ event.id.toString() }><p>View</p></Link>
						</div>
					</div>
				))}
	
			</div>
	
	);
}

export const eventsLoader = async () => {
	const res = await fetch('http://localhost:4000/events');
	return res.json();
}