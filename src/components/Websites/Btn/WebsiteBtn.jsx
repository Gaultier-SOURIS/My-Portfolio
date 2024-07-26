export default function OsurvivorsWebsiteBtn({ darkMode }) {
  return (
    <div className="inline-block">
      <button
        type="button"
        className={`${
          darkMode
            ? 'bg-darkBlue border-neonBlue text-white'
            : 'bg-white border-darkBlue text-darkBlue'
        }   border-solid border-2 border-neonBlue rounded-md  mb-2 py-2 px-8  text-md text-center uppercase`}
      >
        Visitez le site
      </button>
    </div>
  );
}
