import OsurvivorsBtn from './Buttons/OsurvivorsBtn';
import SoundMemoryBtn from './Buttons/SoundMemory';

export default function Project() {
  return (
    <div>
      <h2 className="text-xl font-bold uppercase mt-20">Projets</h2>

      <div className="w-42 mt-8 ">
        <OsurvivorsBtn />
        <img src="/osurvivors.jpeg" alt="Magicien du jeu osurvivors" />
      </div>

      <div className="w-42 mt-4">
        <SoundMemoryBtn />
        <img
          src="/soundmemory.jpg"
          alt="Magicien du jeu osurvivors"
          className="w-100%"
        />
      </div>
    </div>
  );
}
