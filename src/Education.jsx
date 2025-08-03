import { motion } from "framer-motion";
import Bgvideo from "./Bgvideo"
const educationData = [
  {
    year: "2022",
    title: "Primary School",
    description: "Passed 10th grade with 88%",
  },
  {
    year: "2024",
    title: "SVP College",
    description: "Passed 12th grade with 88.88% in science stream.",
  },
  {
    year: "2024-25",
    title: "MHTCET",
    description: "Cracked MHTCET with 98.42 percentile",
  },
  {
    year: "2025",
    title: "Bachelor of Technology",
    description: "Fr. Conceicao Rodrigues College of Engineering, Mumbai",
  },
];

export default function EducationTimeline() {
  return (
    
    <section  id="education" className="bg-transparent py-12 px-6 min-h-screen flex flex-col items-center">
      <h2 className="text-6xl md:text-8xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-[20px]">
         Education </h2>
  
      <div className="relative border-l-4 border-blue-600 pl-6 max-w-2xl w-full">
        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="mb-10"
          >
            <div className="bg-blue-200 p-6 rounded-lg shadow-md">
              <div className="text-purple-700 font-bold text-lg">{item.year}</div>
              <div className="text-xl font-bold mb-2">{item.title}</div>
              <div className="text-white-700">{item.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
