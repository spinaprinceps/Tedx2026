
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Sponsor from '../Pages/Sponsor';
import Register from '../Pages/Register';
import Speakers from '../Pages/Speakers';

function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/register" element={<Register />} />
      <Route path="/speakers" element={<Speakers/>} />
    </Routes>
  );
}

export default AppRoutes;