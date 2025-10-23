import { motion } from "framer-motion";

export default function EducationTimeline() {
  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center">My Educational Journey</h2>
      <div className="relative border-l-4 border-blue-500 pl-6">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
              <span className="text-sm text-blue-600 font-semibold">{item.year}</span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-60 
              0">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
