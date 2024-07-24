import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
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
  };

  return (
    <div className="text-lg leading-5 lg:p-4 lg:fixed lg:top-0 lg:left-0 lg:w-1/3 lg:h-lvh lg:mt-12 xl:text-xl lg:ml-20 xl:ml-40">
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
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              A propos
            </a>
          </li>
          <li>
            <a
              href="#formation"
              onClick={(e) => scrollToSection(e, 'formation')}
            >
              Formation
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block xl:absolute xl:top-[300px] xl:left-[205px]">
        <img src="/meWhite.png" alt="ma silhouette" />
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
            <div className="bg-white w-[175px] h-[26.25px] xl:w-[200px] m-0.5 rounded-sm text-darkBlue font-bold text-center pt-1">
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
