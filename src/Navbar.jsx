import { useEffect, useState } from "react";
import "./index.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-2 left-0 w-full z-50">
        <div
          className={`mt-4 mx-auto flex w-[80%] items-center justify-around px-6 py-4 text-white transition-all duration-300 ${
            scrolled
              ? "bg-purple-800 shadow-lg rounded-3xl"
              : "bg-transparent shadow-none"
          }`}
        >
          <a
            href="#home"
            className="text-lg font-semibold cursor-pointer hover:text-purple-300"
          >
            Home
          </a>
          <a
            href="#education"
            className="text-lg font-semibold cursor-pointer hover:text-purple-300"
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-lg font-semibold cursor-pointer hover:text-purple-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-lg font-semibold cursor-pointer hover:text-purple-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold cursor-pointer hover:text-purple-300"
          >
            Contact
          </a>
        </div>
      </nav>

      <header id="home" className="pt-36">
        <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Welcome to My Portfolio
        </h1>
      </header>
    </>
  );
}
