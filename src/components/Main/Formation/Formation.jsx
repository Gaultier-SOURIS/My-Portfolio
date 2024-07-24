import Frontend from './Frontend/Frontend';
import Backend from './Backend/Backend';
import Management from './Management/Management';
import Notices from './Notices/Notices';

export default function Formation() {
  return (
    <div id="formation" className="text-lg leading-5 xl:text-xl">
      <h2 className="text-xl font-bold uppercase mt-20 xl:text-2xl">
        Formation
      </h2>
      <p className="flex items-baseline mt-8">
        Ecole en ligne :
        <img className="w-28 ml-2" src="/oclockLight.png" alt="" />
      </p>
      <p className="mt-4">date : 11/09/2023 - 28/02/2024</p>
      <p className="mt-4">
        Titre professionel : Developpeur web et web mobile (niveau V)
      </p>
      <Frontend />
      <Backend />
      <Management />
      <Notices />
    </div>
  );
}
