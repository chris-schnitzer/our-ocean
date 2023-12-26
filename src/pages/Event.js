import { useParams, useLoaderData, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Event() {
	const { id } = useParams();
	const event = useLoaderData();

	useEffect(() => {
			document.title = `Our Ocean | ${event.eventTitle}`;
	}, []) 	

	return(
		<div className="container single-event-wrap">
			<img src={event.img} alt={event.alt}/>
			
			
			<p className="date">{event.dateDay}</p>
			<p>{event.dateMonth}</p>
			<p><b>{event.time}</b></p>
			<p><b>{event.location}</b></p>
			<h1 className="event-title"><b>{event.eventTitle}</b></h1>
			<p>{event.body}</p>
			<Link to="/events">Go Back</Link>
		</div>
	)
}

export const eventLoader  = async ({params}) => {
	const { id } = params;
	const res = await fetch('http://localhost:4000/events/' + id);
	return res.json(); 
}