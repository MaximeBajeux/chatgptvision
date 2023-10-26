import { useEffect, useState } from "react";
import { getArticles } from "../api/service";
import { Link } from "react-router-dom";

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await getArticles();
        setArticles(result.slice(0, 4)); // Récupérer les 4 premiers articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              result="goo"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            ></feComposite>
          </filter>
          <filter id="mediumgoo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="7.5"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              result="mediumgoo"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            ></feComposite>
          </filter>
          <filter id="smallgoo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="5"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              result="smallgoo"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
      {/* Herobanner */}
      <div className="relative bg-white rounded-md shadow-lg mb-6 overflow-hidden">
        <img
          src="https://picsum.photos/800/400"
          alt="Herobanner"
          className="w-full h-64 object-cover rounded-t-md"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center frosted-glass-container shadow-lg">
          <h1 className="text-3xl font-bold frosted-glass">Bonjour le monde</h1>
          <p className="mt-2 frosted-glass">Bienvenue sur MyWebSITE</p>
          <Link
            to="/blog"
            className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 shadow-md"
          >
            En voir plus
          </Link>
        </div>
      </div>

      {/* Blog articles */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
        {articles.map((article, index) => (
          <a
            key={index}
            href={`/blog/${article.id}`}
            className="block bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={article.image}
              alt="Article thumbnail"
              className="w-full h-40 object-cover rounded-t-md mb-3"
            />
            <div className="pt-0 pb-5 pl-5 pr-5">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Section Invitation à Contacter */}
      <div className="bg-white rounded-md shadow-lg p-6 mb-6 mt-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nous aimerions avoir de vos nouvelles !
        </h2>
        <p className="mb-4">
          Si vous avez des questions ou si vous souhaitez simplement dire
          bonjour, n'hésitez pas à nous contacter.
        </p>
        <Link
          to="/merci"
          className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 shadow-md"
        >
          Contactez-nous
        </Link>
      </div>
    </>
  );
}

export default HomePage;
