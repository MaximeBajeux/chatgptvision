import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow mb-4 overflow-hidden">
      {" "}
      {/* Retirez p-5 et ajoutez overflow-hidden */}
      <img
        src={article.image}
        alt="Article thumbnail"
        className="w-full h-40 object-cover rounded-t-md mb-3"
      />
      <div className="p-5">
        {" "}
        {/* Ajoutez cette div avec un padding */}
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p>{article.description}</p>
        <Link
          to={`/blog/${article.id}`}
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >
          En lire plus
        </Link>
      </div>
    </div>
  );
}
export default ArticleCard;
