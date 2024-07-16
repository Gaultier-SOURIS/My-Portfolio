import Frontend from './Frontend';
import Backend from './Backend';
import Management from './Management';

export default function Formation() {
  return (
    <div className="text-lg leading-5">
      <h2 className="text-xl font-bold uppercase mt-20">Formation</h2>
      <p className="flex items-baseline mt-8">
        Ecole en ligne : <img className="w-28 ml-2" src="/oclock.png" alt="" />
      </p>
      <p className="mt-4">date : 11/09/2023 - 28/02/2024</p>
      <Frontend />
      <Backend />
      <Management />
    </div>
  );
}
