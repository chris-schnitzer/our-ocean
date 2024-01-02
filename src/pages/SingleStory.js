import { useParams, Link } from 'react-router-dom';



export default function SingleStory(props) {
	const params = useParams();
	return(
		<>
			{params.id}
		</>
	)
}