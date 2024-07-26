import { useState, useEffect } from 'react';
import WebsiteBtn from './Btn/WebsiteBtn';

export default function SoundMemory({ darkMode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 mt-[-250px] lg:ml-[400px] xl:ml-[600px]  border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="text-lg leading-5 xl:text-xl lg:p-4 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:mr-20 xl:mr-40">
      <h2 className="mt-28 text-xl font-bold uppercase  lg:mt-14 xl:text-2xl">
        Cinematic Sound Memory
      </h2>

      <div
        className={`${
          darkMode ? 'border-neonBlue' : 'border-darkBlue'
        } border-solid border-2  overflow-hidden rounded-full w-64 h-64 md:w-full xl:w-full mt-8`}
      >
        <video
          src="/cinematic-sound-memory.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover "
        />
      </div>
      <div className="mt-16">
        <a
          target="_blank"
          href="https://cinematic-sound-memory.netlify.app/"
          rel="noopener noreferrer"
          aria-label="site du jeu Osurvivors"
        >
          <WebsiteBtn darkMode={darkMode} />
        </a>
      </div>
      <p className="mt-16">
        Cinematic Sound Memory est un petit jeu de mémoire que j'ai commencer a
        réaliser lors de ma formation O'clock. Le but est d'entrainer son
        cerveau tout en jouant, il faut retenir 9 sons réparties sur des
        touches. Quand le jeu commence il faut retrouver les sons en fonctions
        des images qui apparaissent devant vous.
      </p>
      <p className="mt-4">
        J'ai travaillé sur ce projet pour apprendre a maitriser les premiers
        elements de codages appris.Il s'agissait aussi pour moi de me
        familiariser avec l'algorythmie. J'ai principalement utilisé React et Js
        pour réaliser ce site.
      </p>
    </div>
  );
}
