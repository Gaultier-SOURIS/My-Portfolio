import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div className="text-lg leading-5">
      <h1 className="text-4xl font-black">Gaultier Souris</h1>
      <h2 className="text-xl font-bold mt-2 uppercase">Developpeur Frontend</h2>
      <p className="  mt-2">
        Developpeur frontend passionné par le developpement web et les nouvelles
        technologies. Je souhaite mettre en avant mes compétences et mon savoir
        faire pour offrir aux utilisateurs des sites web ergonomiques et
        intuitifs.
      </p>

      <div className="hidden lg:block">
        <ul>
          <li>A propos</li>
          <li>Formation</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="mt-8">
        <ul className="flex">
          <li className="text-3xl">
            <FaGithubSquare />
          </li>
          <li className="text-3xl">
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
}
