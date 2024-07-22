import OsurvivorsBtn from './Buttons/OsurvivorsBtn';
import SoundMemoryBtn from './Buttons/SoundMemory';

export default function Project() {
  return (
    <div>
      <h2 className="text-xl font-bold uppercase mt-20 xl:text-2xl">Projets</h2>
      <div className="md:flex items-center gap-4 ">
        <div className="md:w-1/2 mt-8">
          <OsurvivorsBtn />
          <img
            className="rounded-md  border-solid border-2 border-neonBlue"
            src="/osurvivors.jpeg"
            alt="Magicien du jeu osurvivors"
          />
        </div>

        <div className="md:w-1/2 mt-8">
          <SoundMemoryBtn />
          <img
            className="rounded-md  border-solid border-2 border-neonBlue"
            src="/soundmemory.jpg"
            alt="Magicien du jeu osurvivors"
          />
        </div>
      </div>
    </div>
  );
}
