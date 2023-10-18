import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api/service";
import { remark } from "remark";
import remarkHtml from "remark-html";

function BlogPostPage() {
  const { id } = useParams();
  const [html, setHtml] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getArticle(Number(id));
        const markdown = result.content;
        const resultHtml = await remark().use(remarkHtml).process(markdown);
        setHtml(resultHtml.toString());
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    if (contentRef.current) {
      const applyTailwindClasses = (element, classes) => {
        element.classList.add(...classes.split(" "));
      };

      const contentElement = contentRef.current;
      contentElement
        .querySelectorAll("h1")
        .forEach((el) => applyTailwindClasses(el, "text-3xl font-bold"));
      contentElement
        .querySelectorAll("h2")
        .forEach((el) => applyTailwindClasses(el, "text-2xl font-bold"));
      contentElement
        .querySelectorAll("h3")
        .forEach((el) => applyTailwindClasses(el, "text-xl font-bold"));
      contentElement
        .querySelectorAll("strong")
        .forEach((el) => applyTailwindClasses(el, "font-bold"));
      contentElement
        .querySelectorAll("small")
        .forEach((el) => applyTailwindClasses(el, "text-sm"));
      contentElement
        .querySelectorAll("ul")
        .forEach((el) => applyTailwindClasses(el, "list-disc list-inside"));
      contentElement
        .querySelectorAll("ol")
        .forEach((el) => applyTailwindClasses(el, "list-decimal list-inside"));
      contentElement
        .querySelectorAll("p")
        .forEach((el) => applyTailwindClasses(el, "mb-4"));
      contentElement
        .querySelectorAll("a")
        .forEach((el) => applyTailwindClasses(el, "text-blue-500 underline"));
      contentElement
        .querySelectorAll("img")
        .forEach((el) => applyTailwindClasses(el, "w-full object-cover"));
    }
  }, [html]);

  return (
    <div className="p-5 mx-auto max-w-xl">
      <div className="bg-white p-5 rounded-md shadow-lg">
        {" "}
        {/* Card container */}
        <div
          ref={contentRef}
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export default BlogPostPage;
