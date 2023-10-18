import articles from './articles';

// Simuler un délai de récupération de données
const DELAY = 100; // 1 seconde, vous pouvez ajuster cela comme vous le souhaitez

const getArticles = async (limit, offset = 0) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          let result = [...articles];
          
          if (typeof limit !== 'undefined') {
              result = result.slice(offset, offset + limit);
          }
          
          resolve(result);
      }, DELAY);
  });
};

const getArticle = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const article = articles.find(article => article.id === id);
            if (article) {
                resolve(article);
            } else {
                reject(new Error('Article not found'));
            }
        }, DELAY);
    });
};

export { getArticles, getArticle };