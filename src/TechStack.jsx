import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function TechStack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techs = [
    { name: "HTML", icon: faHtml5, color: "#fc1212" },
    { name: "CSS", icon: faCss3Alt, color: "#2196f3" },
    { name: "Bootstrap", icon: faBootstrap, color: "#563d7c" },
    { name: "JavaScript", icon: faJs, color: "#f0db4f" },
    { name: "React", icon: faReact, color: "#61dafb" },
    { name: "Node.js", icon: faNodeJs, color: "#3c873a" },
    { name: "MongoDB", icon: faDatabase, color: "#4DB33D" },
    { name: "GitHub", icon: faGithub, color: "#000" },
  ];

  return (
    <section id="techstack" className="mt-12 px-6 py-10 bg-transparent">
      <div className="text-center mb-10">
        <h5 className="text-6xl font-bold text-white">
          Tech<span className="text-blue-500">Stack</span>
        </h5>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            style={{
              backgroundImage: "linear-gradient(to right, purple, blue)",
            }}
            className="w-28 h-28 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl">
              <FontAwesomeIcon icon={tech.icon} style={{ color: tech.color }} />
            </div>
            <p className="text-sm font-medium text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
