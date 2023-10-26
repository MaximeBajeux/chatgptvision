import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout"; // Assurez-vous que le chemin d'importation est correct
import HomePage from "./views/Home";
import BlogPage from "./views/Blog";
import BlogPostPage from "./views/BlogPost";
import ThankYouPage from "./views/ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="merci" element={<ThankYouPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
