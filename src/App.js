import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Events  from './pages/Events';
import Home  from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import News from './pages/News';
import TakeAction from './pages/TakeAction';
import Error from './pages/Error';

import SharedLayout from './SharedLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<Home />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/more-info" element={<MoreInfo />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/take-action" element={<TakeAction />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
