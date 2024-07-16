export default function Contact() {
  return (
    <div className="text-lg leading-5 mb-8">
      <h2 className="text-xl font-bold uppercase mt-20">Contact</h2>
      <p className="mt-8">
        Pour toutes propositions de travail ou simplement envie d'echanger avec
        moi, je vous propose de me contacter via ce formulaire.
      </p>
      <div className="mt-4">
        <form
          className="flex flex-col md:w-2/3 mx-auto "
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label className="mt-2" htmlFor="name">
            Nom :
          </label>
          <input
            className="bg-white rounded-md mt-2 h-8 p-2  border-solid border-2 border-orange-400"
            type="text"
            name="name"
            id="name"
            required
          />
          <label className="mt-4" htmlFor="email">
            Email :
          </label>
          <input
            className="bg-white rounded-md mt-2 h-8 p-2  border-solid border-2 border-orange-400"
            type="email"
            name="email"
            id="email"
            required
          />
          <label className="mt-4" htmlFor="message">
            Message :
          </label>
          <textarea
            className="bg-white rounded-md mt-2 p-2 focus:outline-none  border-solid border-2 border-orange-400"
            name="message"
            id="message"
            rows="5"
            required
          ></textarea>

          <button
            className="bg-orange-500 text-center p-2 w-28 mt-8 rounded-md text-white self-center"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
