import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';

export default function SharedLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}