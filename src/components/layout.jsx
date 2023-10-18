import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-lg mb-6">
        <div className="flex justify-between items-center">
          <span className="text-blue-500 font-bold text-xl">
            My<span className="font-extrabold text-black">Web</span>SITE
          </span>
          <div className="lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2"
            >
              ☰
            </button>
          </div>
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-blue-500 hover:underline">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500 hover:underline">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        {isSidebarOpen && (
          <div className="mt-2">
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-blue-500 hover:underline block">
                  HOME
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/blog"
                  className="text-blue-500 hover:underline block"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-500 hover:underline block"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Emplacement pour les composants de route */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-blue-500 p-4 mt-8 text-white">
        <div className="container mx-auto text-center">
          <Link to="/merci" className="text-white hover:underline">
            Remerciements
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
