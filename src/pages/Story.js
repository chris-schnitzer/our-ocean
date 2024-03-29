
import { useParams, useLoaderData, Link } from 'react-router-dom';


export default function Story() {
	const { id } = useParams();
	const story = useLoaderData();

	return(
		<div className="single-story container">
			<img src={story.img} alt={story.alt}/>
			<p className="news-date">Posted on: <b>{story.date}</b></p>
			<p>By: {story.author}</p>
			<h2>{story.headline}</h2>
			{story.body.map(p => (
				<div key={p}>
					<p>{p}</p>
					<br />
				</div>
			))}
		<Link to="/news">Go Back</Link>
		</div>

	)
}

// loader function
export const storyLoader = async ({params}) => {
	//id is from route path
	const { id } = params;
	const res = await fetch('http://localhost:4000/news/' + id);
	const stories = await res.json()
	return stories;
}

