import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import MyProfile from './routes/MyProfile';
import NotFound from './routes/NotFound';
import Missions from './routes/Missions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="missions" element={<Missions />} />
      </Route>
    </Routes>
  );
}

export default App;
