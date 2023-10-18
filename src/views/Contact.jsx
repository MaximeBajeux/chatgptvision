import React, { useEffect, useState } from "react";

function ContactPage() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    if (event.isDefaultPrevented()) {
      setError("Erreur lors de l'envoi du formulaire, veuillez réessayer.");
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  return (
    <div className="min-h-screen justify-center items-center bg-gray-100 flex flex-col">
      <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">
          Laissez nous un message
        </h1>
        <p className="text-center mb-6 text-gray-700">
          Dites nous ce que vous avez pensé de ce site intégralement généré par
          ChatGPT à partir d'une maquette sur papier
        </p>
        {error && (
          <div className="mb-4 bg-red-200 text-red-700 p-3 rounded border border-red-400">
            {error}
          </div>
        )}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/merci"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maxLength="2000"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
