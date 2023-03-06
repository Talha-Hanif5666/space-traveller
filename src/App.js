import { Nav } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Rockets from './routes/Rockets'
import MyProfile from './routes/MyProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Rockets />} />
        <Route path="my-profile" element={<MyProfile />} /> */}
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
