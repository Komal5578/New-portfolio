import "./index.css";
import "./App.css"
import Bgvideo from "./Bgvideo";
import Navbar from "./Navbar";
import Home from "./Home";
import TechStack from "./TechStack";
import EducationTimeline from "./Education";
import Projects from "./Projects"
import ContactMe from "./Contact"
export default function App() {
  return (
    <>
      <Navbar />

     
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Bgvideo />
      </div>

      {/* 🔵 All content scrolls above video */}
      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center text-white text-center">
          <Home />
        </section>
        <EducationTimeline/>
        <TechStack />
        <Projects/>  
        <ContactMe/>
      </main>
    </>
  );
}
