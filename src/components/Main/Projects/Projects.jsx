import { Link } from 'react-router-dom';
import OsurvivorsBtn from './Buttons/OsurvivorsBtn';
import SoundMemoryBtn from './Buttons/SoundMemory';

export default function Project({ darkMode }) {
  return (
    <div id="projects">
      <h2 className="text-xl font-bold uppercase mt-20 xl:text-2xl">Projets</h2>
      <div className="md:flex items-center gap-4 ">
        <div className="md:w-1/2 mt-8">
          <Link to="/osurvivors">
            <OsurvivorsBtn darkMode={darkMode} />

            <img
              className={`${
                darkMode ? 'border-neonBlue' : 'border-darkBlue'
              } rounded-md  border-solid border-2 `}
              src="/osurvivors.jpeg"
              alt="Magicien du jeu osurvivors"
            />
          </Link>
        </div>

        <div className="md:w-1/2 mt-8">
          <Link to="/cinematic-sound-memory">
            <SoundMemoryBtn darkMode={darkMode} />
            <img
              className={`${
                darkMode ? 'border-neonBlue' : 'border-darkBlue'
              } rounded-md  border-solid border-2 `}
              src="/soundmemory.jpg"
              alt="Magicien du jeu osurvivors"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
