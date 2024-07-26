import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from '@/components/NavBar/NavBar';
import Main from '@/components/Main/Main';
import Osurvivors from '../Websites/Osurvivors';
import SoundMemory from '../Websites/SoundMemory';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col p-12 lg:flex-row h-full min-h-screen">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollToTop />
      <div className="flex-grow h-full">
        <Routes>
          <Route path="/" element={<Main darkMode={darkMode} />} />
          <Route
            path="/osurvivors"
            element={<Osurvivors darkMode={darkMode} />}
          />
          <Route
            path="/cinematic-sound-memory"
            element={<SoundMemory darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
