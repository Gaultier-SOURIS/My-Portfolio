export default function Contact({ darkMode }) {
  return (
    <div id="contact" className="text-lg leading-5 mb-8 xl:text-xl">
      <h2 className="text-xl font-bold uppercase mt-20 xl:text-2xl">Contact</h2>
      <p className="mt-8">
        Pour toutes propositions de travail ou simplement envie d'échanger avec
        moi, je vous propose de me contacter via ce formulaire.
      </p>
      <div className="mt-4">
        <form
          className="flex flex-col md:w-2/3 lg:w-3/4 mx-auto"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <label className="mt-2" htmlFor="name">
            Nom :
          </label>
          <input
            className={`${
              darkMode ? 'border-neonBlue' : 'border-darkBlue'
            } bg-white rounded-md mt-2 h-8 p-2 border-solid border-2 text-black`}
            type="text"
            name="name"
            id="name"
            required
          />
          <label className="mt-4" htmlFor="email">
            Email :
          </label>
          <input
            className={`${
              darkMode ? 'border-neonBlue' : 'border-darkBlue'
            } bg-white rounded-md mt-2 h-8 p-2 border-solid border-2 text-black`}
            type="email"
            name="email"
            id="email"
            required
          />
          <label className="mt-4" htmlFor="message">
            Message :
          </label>
          <textarea
            className={`${
              darkMode ? 'border-neonBlue' : 'border-darkBlue'
            } bg-white rounded-md mt-2 p-2 focus:outline-none border-solid border-2 text-black`}
            name="message"
            id="message"
            rows="5"
            required
          ></textarea>

          <button
            className={`${
              darkMode
                ? 'border-neonBlue bg-darkBlue text-white'
                : 'border-darkBlue bg-white text-darkBlue'
            } border-solid border-2 text-center p-2 w-28 mt-8 rounded-md self-center`}
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
