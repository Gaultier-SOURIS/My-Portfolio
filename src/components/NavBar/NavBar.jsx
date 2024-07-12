import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div>
      <h1 className="text-4xl font-black">Gaultier Souris</h1>
      <h2 className="text-xl font-bold mt-2">Developpeur Frontend</h2>
      <p className="text-lg leading-4 mt-2">
        Developpeur junior et passionné, je suis a la recherche d'une société
        dans laquelle m'épanouir.
      </p>

      <div className="hidden lg:block">
        <ul>
          <li>A propos</li>
          <li>Formation</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="mt-4">
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
