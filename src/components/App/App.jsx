import './App.scss';
import { Routes, Route } from 'react-router-dom';

import NavBar from '@/components/NavBar/NavBar';
import Main from '@/components/Main/Main';
import Osurvivors from '../Websites/Osurvivors';
import SoundMemory from '../Websites/SoundMemory';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col m-12 lg:flex-row">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/osurvivors" element={<Osurvivors />} />
        <Route path="/cinematic-sound-memory" element={<SoundMemory />} />
      </Routes>
    </div>
  );
}

export default App;
