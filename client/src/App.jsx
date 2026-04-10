import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StarField from './components/StarField';
import Home from './pages/Home';
import History from './pages/History';
import Numerology from './pages/Numerology';
import Colors from './pages/Colors';
import Cards from './pages/Cards';
import CardDetail from './pages/CardDetail';
import Structure from './pages/Structure';
import Practice from './pages/Practice';

export default function App() {
  return (
    <BrowserRouter>
      <StarField />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/numerology" element={<Numerology />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:id" element={<CardDetail />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}
