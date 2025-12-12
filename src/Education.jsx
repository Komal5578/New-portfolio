import { motion } from "framer-motion";
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
    <section id="education" className="bg-transparent py-10 px-6 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-8">
        Education
      </h2>

      <div className="relative border-l-4 border-blue-600 pl-5 max-w-2xl w-full">
        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="mb-8"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-lg shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/25 hover:to-blue-500/25 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="text-purple-200 font-bold text-lg">{item.year}</div>
              <div className="text-xl font-semibold mb-1 text-white">{item.title}</div>
              <div className="text-gray-200 text-sm md:text-base">{item.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
