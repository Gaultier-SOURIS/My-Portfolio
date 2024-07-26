export default function OsurvivorsBtn({ darkMode }) {
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
        O'survivors
      </button>
    </div>
  );
}
