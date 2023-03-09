import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import NotFound from './routes/NotFound';

function App() {
  const { rocketList, status, myRockets } = useSelector((store) => store.rockets);
  return (
    <Routes>
      <Route path="/" element={<Layout status={status} />}>
        <Route index element={<Rockets rockets={rocketList} />} />
        <Route path="rockets" element={<Rockets rockets={rocketList} />} />
        <Route path="my-profile" element={<MyProfile myRockets={myRockets} />} />
        <Route path="missions" element={<Missions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
