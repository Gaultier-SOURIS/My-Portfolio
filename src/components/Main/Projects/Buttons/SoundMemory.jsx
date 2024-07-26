export default function SoundMemoryBtn({ darkMode }) {
  return (
    <div>
      <button
        type="button"
        className={`${
          darkMode
            ? 'bg-darkBlue text-white border-neonBlue'
            : 'bg-white text-darkBlue border-darkBlue'
        } border-solid border-2  rounded-md w-full mb-2 p-2  text-md text-center uppercase`}
      >
        Cinematic Sound Memory
      </button>
    </div>
  );
}
