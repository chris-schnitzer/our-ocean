import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import newsData from '../data/news.json'
import Story from './Story'

export default function News() {
	useEffect(() => {
		document.title = "Our-Ocean | News";
	});



	const newsItem = newsData.map(item => {
		return (
			<>
			<img src={item.img} alt={item.alt}/>
			<p>{item.date}</p>
			<p>{item.author}</p>
			<Link to={`${item.id}`}>{item.headline}</Link>
			</>
		)
	})

	return(
		<div className="container news-wrap">
			<h1>All the latest happenings from our seas and beyond</h1>
			<div>{newsItem}</div>
		</div>

	);
}

//loader function
// export const newsLoader = async () => {
// 	const res = await fetch('http://localhost:3000/news.json')
// 	return await res.json();
