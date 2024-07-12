import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div>
      <h1>Gaultier Souris</h1>
      <h2>Developpeur Front End</h2>
      <p>
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

      <div>
        <ul className="flex">
          <li>
            <FaGithubSquare />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
}
