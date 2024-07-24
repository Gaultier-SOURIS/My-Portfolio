import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div className="text-lg leading-5 lg:p-4 lg:fixed lg:top-0 lg:left-0  lg:w-1/3 lg:h-lvh lg:mt-12  xl:text-xl lg:ml-20 xl:ml-40">
      <h1 className="text-4xl font-black ">Gaultier Souris</h1>
      <h2 className="text-xl font-bold mt-2 uppercase">Developpeur Frontend</h2>
      <p className="mt-2 lg:w-3/4 text-justify">
        Developpeur frontend passionné par le developpement web et les nouvelles
        technologies. Je souhaite mettre en avant mes compétences et mon savoir
        faire pour offrir aux utilisateurs des sites web ergonomiques et
        intuitifs.
      </p>

      <div className="hidden lg:block lg: mt-16">
        <ul className="flex flex-col gap-4">
          <li>Accueil</li>
          <li>A propos</li>
          <li>Formation</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="mt-8 lg:mt-64 xl:mt-60">
        <ul className="flex items-center">
          <li className="text-3xl">
            <a
              target="_blank"
              href="https://github.com/Gaultier-SOURIS"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li className="text-3xl">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gaultier-souris-24678a261/"
              rel="noopener noreferrer"
              aria-label="LinkendInd Profile"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <div className="bg-white w-[175px] h-[26.25px] m-0.5 rounded-sm text-darkBlue font-bold text-center pt-1">
              <a
                href="cv-gaultier-souris.pdf"
                download
                aria-label="telecharger mon cv"
              >
                Télécharger mon cv
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
