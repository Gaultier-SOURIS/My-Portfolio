import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import NavBar from '@/components/NavBar/NavBar';
import Main from '@/components/Main/Main';
import Osurvivors from '../Websites/Osurvivors';
import SoundMemory from '../Websites/SoundMemory';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = -72;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

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
