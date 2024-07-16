import OsurvivorsBtn from './Buttons/OsurvivorsBtn';
import SoundMemoryBtn from './Buttons/SoundMemory';

export default function Project() {
  return (
    <div>
      <h2 className="text-xl font-bold uppercase mt-20">Projets</h2>

      <div className="w-42 mt-8">
        <OsurvivorsBtn />
        <img
          className="rounded-md  border-solid border-2 border-orange-400"
          src="/osurvivors.jpeg"
          alt="Magicien du jeu osurvivors"
        />
      </div>

      <div className="w-42 mt-8">
        <SoundMemoryBtn />
        <img
          className="rounded-md  border-solid border-2 border-orange-400"
          src="/soundmemory.jpg"
          alt="Magicien du jeu osurvivors"
        />
      </div>
    </div>
  );
}
