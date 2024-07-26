import frontend from '@/data/tag/frontend.json';

export default function Frontend({ darkMode }) {
  return (
    <div className="text-lg leading-5">
      <div
        className={`${
          darkMode
            ? 'border-neonBlue border-solid border-2'
            : 'border-darkBlue border-solid border-2'
        }  rounded-lg p-4 mt-4`}
      >
        <h3 className="text-lg uppercase font-bold text-center xl:text-xl ">
          Frontend
        </h3>
        <div className="mt-4">
          <ul className="display flex flex-wrap gap-4 justify-center">
            {frontend.map((item) => (
              <li
                className={`${
                  darkMode
                    ? 'bg-neonBlue text-darkBlue'
                    : 'bg-darkBlue  text-neonBlue'
                } py-2 px-4 rounded-md`}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
