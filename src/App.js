import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import MyProfile from './routes/MyProfile';
import NotFound from './routes/NotFound';
import Missions from './routes/Missions';
import { useSelector } from 'react-redux';

function App() {
  const { rocketList, status } = useSelector((store) => store.rockets);
  console.log('App > Rockets');
  console.log(rocketList);
  console.log(status);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets rockets={rocketList}/>} />
        <Route path="rockets" element={<Rockets rockets={rocketList}/>} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="missions" element={<Missions />} />
      </Route>
    </Routes>
  );
}

export default App;
