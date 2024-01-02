import { useParams, Link, useLoaderData } from 'react-router-dom';
import newsData from '../data/news.json';

export default function Story(props) {
	const { storyId } = useParams();
	const story = useLoaderData()

	console.log(newsData);

	
	return(
		<div className="single-story container">
		<h1>{storyId} - Story Page</h1>
		<Link to="/news">Go Back</Link>
		</div>

	)
}


const fetchData  = async ({params}) => {
	const { id } = params;
	const res = await fetch('../data/news.json' + id);
	return res.json();
	console.log(res.json())
}