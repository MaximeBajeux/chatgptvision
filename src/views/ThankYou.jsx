import React from "react";

function ThankYouPage() {
  const message = new URLSearchParams(window.location.search).get("message");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        {message === "success" && (
          <div className="mb-4 bg-green-200 text-green-700 p-3 rounded border border-green-400">
            Votre message a bien été envoyé !
          </div>
        )}
        <h1 className="text-4xl font-extrabold mb-4">Merci !</h1>
        <p className="text-lg mb-4">
          Ce site a été créé entièrement par ChatGPT à partir d'une maquette
          dessinée sur une feuille de papier.
        </p>
        <p className="text-lg mb-6">
          Cette opération a été encadrée par l'agence Image IN qui a mis en
          ligne ce site.
        </p>
        <a
          href="https://image-in.net"
          className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 text-lg font-semibold"
        >
          Découvrir Image IN
        </a>
      </div>
    </div>
  );
}

export default ThankYouPage;
