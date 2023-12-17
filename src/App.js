import { 
  createBrowserRouter,  
  Route,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom';

// Pages

import Home  from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import ChemicalPollution from './pages/ChemicalPollution';
import NoisePollution from './pages/NoisePollution';
import LightPollution from './pages/LightPollution';
import PlasticPollution from './pages/PlasticPollution';

import News, { newsLoader } from './pages/News';
import Story, { storyLoader } from './pages/Story';
import Events, { eventsLoader }  from './pages/Events';
import Event, { eventLoader } from './pages/Event';

import TakeAction from './pages/TakeAction';
import Error from './pages/Error';
// Layouts

import SharedLayout from './layouts/SharedLayout';
import NewsLayout from './layouts/NewsLayout';
import EventsLayout from './layouts/EventsLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        
        
        <Route path="more-info" element={<MoreInfo />}/>
        <Route path="more-info/chemical-pollution" element={<ChemicalPollution />}/>
        <Route path="more-info/noise-pollution" element={<NoisePollution />} />
        <Route path="more-info/light-pollution" element={<LightPollution />} />
        <Route path="more-info/plastic-pollution" element={<PlasticPollution />}/>
        
        <Route path="news" element={<NewsLayout />}>
          <Route 
            index 
            element={<News />} 
            loader={newsLoader}
          />
          <Route 
            path=":id" 
            element={<Story />}
            loader={storyLoader}
          />
        </Route>

        <Route path="events" element={<EventsLayout />} >
          <Route 
            index 
            element=<Events/> 
            loader={eventsLoader}
          />
          <Route 
            path=":id" 
            element=<Event/> 
            loader={eventLoader}
          />

        </Route>





        <Route path="/take-action" element={<TakeAction />} />
        <Route path="/*" element={<Error />} />
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
