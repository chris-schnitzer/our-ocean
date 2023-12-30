import { Link, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

export default function News() {
	const story = useLoaderData();
	
	useEffect(() => {
		document.title = "Our-Ocean | News";
	});

	return(
		<div className="container news-wrap">
			<h1>All the latest happenings from our seas and beyond</h1>
			{story.map(story => ( 
				<div key={story.id}>
					<div className={story.id === 1 ? 'story-first' : 'story'}>
						<div className="image-and-meta">
							<img src={story.img} alt={story.alt}/>
							<div>
								<p>Posted on: <b>{story.date}</b></p>
								<p>By: <b>{story.author}</b></p>
							</div>
						</div>
						<Link to={ story.id.toString() }><h2>{story.headline}</h2></Link>
						<p className="story-summary">{story.body[0].substring(0, 250) + '...'}</p>
						<Link className="sm-read-more" to={ story.id.toString() }>Read More</Link>
					</div>
				</div>
			))}
		</div>
	);
}

//loader function
export const newsLoader = async () => {
	const res = await fetch('http://localhost:4000/news');
	return res.json();
}

