import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-10 mt-20 mb-[225px]"
    >
      {/* LEFT: TEXT & ICONS */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start gap-6 md:gap-8">
        <h1 className="md:justify-start text-4xl sm:text-5xl md:text-7xl font-bold animate-fade-in-up">
          Hello I am,{" "}
          <span className="block sm:inline text-4xl sm:text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient">
            Komal
          </span>
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 text-3xl text-white">
          <a
            href="mailto:komalsk1472@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://www.linkedin.com/in/komal-kanojiya-97687a25b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/komal5578"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/1FzJAiwf5BUqP53Hj9MlUEsJTuF3GPNOb/view"
          className="mx-auto md:mx-0 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          View Resume
        </a>
      </div>

      {/* RIGHT: IMAGE */}
      <div className="md:w-1/2 flex justify-center" data-aos="zoom-in">
        <img
          src="/bg.jpg"
          alt="profile"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover border-[3px] border-white p-[5px] shadow-[0_0_50px_rgb(236,201,252)] transition duration-200 ease-in hover:scale-110"
        />
      </div>
    </div>
  );
}
