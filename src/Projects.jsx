import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    name: "Simon Says Game",
    description: "A fun memory game that tests your pattern recognition skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/simon.jpg", 
  },
  {
    name: "Spotify Clone",
    description: "Music streaming UI clone of Spotify with modern styling.",
    tech: ["Html", "Bootstrap"],
    image: "/spotify.jpg",
  },
  {
    name: "Wanderlust",
    description: "A fullstack travel booking app with user auth and reviews.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/wanderlust.jpg",
  },
  {
    name: "Weather App",
    description: "Search any city and view real-time weather information.",
    tech: ["React", "OpenWeather API"],
    image: "/weather.jpg",
  },
  {
    name: "To-Do App",
    description: "A simple and efficient to-do list with edit/delete features.",
    tech: ["React", "Local Storage"],
    image: "/todo.jpg",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio site to showcase projects and skills.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/portfolio.jpg",
  },
  {
    name: "Everbloom",
    description: "An ecommerce platform for handcrafted blooms with add to cart, buy now, and user authentication.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/everbloom.png",
  },
  {
    name: "LevelUpFi",
    description: "A gamified learning platform where users learn finance through 6 interactive games.",
    tech: ["React", "JavaScript", "Interactive Games"],
    image: "/levelupfi.png",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="py-16 px-6 bg-transparent text-white">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold">
          My <span className="text-blue-500 font-bold text-6xl">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2">Here are a few of my recent works</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gradient-to-br from-purple-800 to-blue-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-200 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-white font-medium">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-black/30 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
