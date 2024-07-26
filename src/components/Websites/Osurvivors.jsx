import { useState, useEffect } from 'react';
import WebsiteBtn from './Btn/WebsiteBtn';

export default function Osurvivors({ darkMode }) {
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
    <div className="text-lg xl:text-xl leading-5 lg:p-4 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:mr-20 xl:mr-40">
      <h2 className="mt-28 text-xl font-bold uppercase lg:mt-14 xl:text-2xl">
        Osurvivors
      </h2>

      <div
        className={`${
          darkMode ? 'border-neonBlue' : 'border-darkBlue'
        } border-solid border-2 overflow-hidden rounded-full w-64 h-64 md:w-full xl:w-full mt-8`}
      >
        <video
          src="/osurvivors.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-16">
        <a
          target="_blank"
          href="https://osurvivors.netlify.app/"
          rel="noopener noreferrer"
          aria-label="site du jeu Osurvivors"
        >
          <WebsiteBtn darkMode={darkMode} />
        </a>
      </div>
      <p className="mt-16">
        O’Survivors est un jeu en 2d jouable directement depuis le navigateur de
        votre ordinateur. Il est inspiré du jeu “vampire Survivors” qui est un
        célèbre jeu dans le style "roguelike". Les joueurs doivent survivre a
        des vagues de monstres de plus en plus fort, sur une carte pendant une
        période de 15 minutes.
      </p>
      <p className="mt-4">
        Nous avons travaillé a 5 sur ce projet lors du dernier mois de notre
        formation. Nous avons utilisés les outils suivants : React, Redux,
        Node.js, Express, Nodemailer et Phaser3.
      </p>
      <p className="mt-4 mb-10">
        Phaser3 a été la grande découverte lors de la conception de ce projet,
        car nous ne connaissions pas du tout ce framework. Il permet de créer
        des jeux en 2d directement depuis un navigateur. Nous avons du apprendre
        a l'utiliser, a comprendre sa logique, et a l'adapter a notre projet.
      </p>
    </div>
  );
}
