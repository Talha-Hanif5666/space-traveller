import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import MyProfile from './routes/MyProfile';
import NotFound from './routes/NotFound';
import Missions from './routes/Missions';

function App() {
  const { rocketList, status } = useSelector((store) => store.rockets);
  return (
    <Routes>
      <Route path="/" element={<Layout status={status} />}>
        <Route index element={<Rockets rockets={rocketList} />} />
        <Route path="rockets" element={<Rockets rockets={rocketList} />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="missions" element={<Missions />} />
      </Route>
    </Routes>
  );
}

export default App;
