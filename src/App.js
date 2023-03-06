import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import MyProfile from './routes/MyProfile';
import NotFound from './routes/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
