import { Link, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

export default function News() {
	const newsData = useLoaderData();
	console.log(newsData);
	useEffect(() => {
		document.title = "Our-Ocean | News";
	});

	return(
		<div className="container news-wrap">
			
			<h1>All the latest happenings from our seas and beyond</h1>
			{newsData.map( (item, index) => { 
				return (
				<div key={item._id} className={index === 0  ? 'event-first' : 'event'}>
				<img src={item.img} alt={item.alt}/>
				<p>{item.date}</p>
				<p>{item.author}</p>
				<Link to={ item._id.toString() }><h1>{item.headline}</h1></Link>
				<p>{item.body[0].substring(0, 200) + " ..."}</p>
				<Link to={ item._id.toString() }>Read More</Link>
				</div>
				)

			})}

		</div>
	);
}

//loader function
export const newsLoader = async () => {
	const res = await fetch('http://localhost:4000/news')
	return res.json();
}

