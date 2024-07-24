export default function Notices() {
  return (
    <div>
      <p className="mt-4 font-bold xl:text-xl">Avis :</p>
      <div className="lg:flex lg:justify-center mt-4">
        <div className="xl:w-1/2">
          <p className="italic font-handScript leading-7 lg:w-[200px] lg:h-[450px] xl:w-full xl:h-[300px] xl:leading-8">
            "Je tiens à saluer ton excellente attitude et ton engagement tout au
            long de la formation. Ta participation a été non seulement régulière
            mais également teintée d’envie, même dans les moments complexes.
            Continue ainsi, car cette attitude est un moteur puissant pour ton
            apprentissage et celui de tes collègues. Bravo !"
          </p>
          <p className="text-right font-semibold mt-2">
            Etienne, Helper O'clock
          </p>
        </div>
        <div className="mt-4 lg:ml-8 lg:mt-0 xl:w-1/2 ">
          <p className="italic font-handScript leading-7  lg:w-[200px] lg:h-[450px]  xl:w-full xl:h-[300px] xl:leading-8">
            "Ta présentation a été jugée correcte avec une bonne maîtrise des
            bases nécessaires pour le développement web et mobile, ce qui est un
            atout considérable pour démarrer dans le secteur. La clarté avec
            laquelle tu as exposé tes idées a également été appréciée, reflétant
            ta capacité à communiquer efficacement tes concepts techniques."
          </p>
          <p className="text-right font-semibold mt-2">
            Jury du titre professionel
          </p>
        </div>
      </div>
    </div>
  );
}
