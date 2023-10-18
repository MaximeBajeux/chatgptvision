import { useEffect, useState } from "react";
import { getArticles } from "../api/service";
import ArticleCard from "../components/articlecard"; // Assurez-vous que le chemin d'importation est correct

function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await getArticles();
        setArticles(result);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Tous nos articles</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap -mx-2">
        {" "}
        {/* Ajoutez ces classes ici */}
        {articles.map((article) => (
          <div className="w-full md:w-1/2 px-2 mb-4" key={article.id}>
            <ArticleCard key={article.id} article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default BlogPage;
