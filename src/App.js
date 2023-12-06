import { 
  createBrowserRouter,  
  Route,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom';

import Events  from './pages/Events';
import Home  from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import News from './pages/News';
import TakeAction from './pages/TakeAction';
import Error from './pages/Error';
import PollutionTypes from './pages/PollutionTypes'

import SharedLayout from './SharedLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/more-info" element={<MoreInfo />}></Route>

        <Route path="/more-info/:pollution-types" element={<PollutionTypes />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/take-action" element={<TakeAction />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Route>
    </Route> 
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
