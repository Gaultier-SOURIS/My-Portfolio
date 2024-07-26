import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdHome, MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

export default function NavBar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      id="home"
      className="text-lg leading-5 lg:p-4 lg:fixed lg:top-0 lg:left-0 lg:w-1/3 lg:h-lvh lg:mt-12 xl:text-xl lg:ml-20 xl:ml-40"
    >
      <div className="fixed top-3 right-3 lg:top-6 lg:right-6 xl:right-12 flex flex-col justify-center items-center gap-4 ">
        <Link to="/#home">
          <div>
            <MdHome className="text-2xl lg:hidden" />
          </div>
        </Link>
        <div>
          {darkMode ? (
            <MdOutlineLightMode className="text-2xl" onClick={toggleDarkMode} />
          ) : (
            <MdOutlineDarkMode className="text-2xl" onClick={toggleDarkMode} />
          )}
        </div>
      </div>
      <h1 className="text-4xl font-black">Gaultier Souris</h1>
      <h2 className="text-xl font-bold mt-2 uppercase">Developpeur Frontend</h2>
      <p className="mt-2 lg:w-3/4 text-justify">
        Developpeur frontend passionné par le developpement web et les nouvelles
        technologies. Je souhaite mettre en avant mes compétences et mon savoir
        faire pour offrir aux utilisateurs des sites web ergonomiques et
        intuitifs.
      </p>

      <div className="hidden lg:block lg:mt-16">
        <ul className="flex flex-col gap-4">
          <Link to="/#about">
            <li>Accueil</li>
          </Link>
          <Link to="/#about">
            <li>A propos</li>
          </Link>
          <Link to="/#formation">
            <li>Formation</li>
          </Link>
          <Link to="/#projects">
            <li>Projets</li>
          </Link>
          <Link to="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="hidden lg:block lg:w-1/2 lg:absolute lg:top-[400px] lg:left-[100px] xl:top-[300px] xl:left-[150px]">
        <img
          src={darkMode ? '/meWhite.png' : 'meBlack.png'}
          alt="ma silhouette"
        />
      </div>

      <div className="mt-8 lg:mt-56 xl:mt-72">
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
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <div
              className={`${
                darkMode ? 'bg-white text-darkBlue' : 'bg-black text-white'
              } w-[175px] h-[26.25px] xl:w-[200px] m-0.5 rounded-sm  font-bold text-center pt-1`}
            >
              <a
                href="cv-gaultier-souris.pdf"
                download
                aria-label="telecharger mon cv"
              >
                Télécharger mon CV
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
