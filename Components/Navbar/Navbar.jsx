import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo-transparent-CmgmdvR8.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-2xl transition-colors duration-300 ${
        darkMode ? "bg-[#171918] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link to="/">
          <img
            className="w-12"
            alt="logo DVLD Project"
            src={logo}
          />
        </Link>

        <div className="flex items-center">
          <ul className="hidden sm:flex items-center gap-5">
            <li>
              <Link
                to="/services"
                className="px-2 py-1 hover:text-blue-500 transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="px-2 py-1 hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/why-us"
                className="px-2 py-1 hover:text-blue-500 transition-colors"
              >
                Why Us
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setSignOpen(!signOpen)}
                className="flex items-center gap-1 px-2 py-1 hover:text-blue-500 transition-colors"
              >
                <span>Sign</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-4 h-4 transition-transform duration-200 ${
                    signOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {signOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-white dark:bg-[#222524] border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
                  <Link
                    to="/login"
                    onClick={() => setSignOpen(false)}
                    className="block px-4 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-[#303332] hover:text-blue-500 transition-colors"
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setSignOpen(false)}
                    className="block px-4 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-[#303332] hover:text-blue-500 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-md border border-gray-600 w-9 h-9 hover:bg-gray-700 transition-all"
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41-1.41" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden ml-4 rounded-full w-10 h-10 bg-[#031F47] flex items-center justify-center text-white"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-2xl"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`sm:hidden ${
            darkMode ? "bg-[#171918]" : "bg-white"
          } border-t border-gray-700 px-4 py-4`}
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              Contact
            </Link>

            <Link
              to="/why-us"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              Why Us
            </Link>

            <div>
              <button
                onClick={() => setSignOpen(!signOpen)}
                className="flex items-center gap-2 hover:text-blue-500"
              >
                Sign
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-4 h-4 transition-transform ${
                    signOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {signOpen && (
                <div className="flex flex-col gap-3 mt-3 ml-4">
                  <Link
                    to="/login"
                    onClick={() => {
                      setSignOpen(false);
                      setMenuOpen(false);
                    }}
                    className="hover:text-blue-500"
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => {
                      setSignOpen(false);
                      setMenuOpen(false);
                    }}
                    className="hover:text-blue-500"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="text-left hover:text-blue-500"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
