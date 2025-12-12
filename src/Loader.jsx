import { motion } from "framer-motion";
import '@fontsource-variable/playwrite-sk';
import { useMediaQuery } from 'react-responsive';

export default function AnimatedLogo({ fadeOut = false, onAnimationEnd }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const logoText = isMobile ? "Komal" : "Komal Kanojiya";

  const fontSize = isMobile ? 90 : 110;
  const viewBox = isMobile ? "0 0 600 200" : "0 0 1400 200";

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{
        background: "radial-gradient(circle at center, #20003b, #080011)",
        color: "#ffffff",
        height: "100vh",
        width: "100vw",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <svg
        width="92vw"
        height="35vh"
        viewBox={viewBox}
        className={`max-w-full${isMobile ? " mb-16" : ""}`}
      >
        <defs>
          <style>
            {`
              text {
                font-family: 'Playwrite SK Variable', cursive;
                font-variation-settings: 'wght' 500;
              }
            `}
          </style>
        </defs>

        {/* Stroke animation */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={fontSize}
          fill="none"
          stroke="#b388ff"  
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: 3000,
            strokeDashoffset: 3000,
            filter: "drop-shadow(0px 0px 12px #bb86fc)"
          }}
          animate={{
            strokeDashoffset: 0,
            filter: [
              "drop-shadow(0px 0px 12px #bb86fc)",
              "drop-shadow(0px 0px 25px #c77dff)",
              "drop-shadow(0px 0px 12px #bb86fc)"
            ]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
        >
          {logoText}
        </motion.text>

        {/* Filled neon glow text */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={fontSize}
          fill="#d6c1ff"
          style={{
            filter: "drop-shadow(0px 0px 18px #b47bff)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          onAnimationComplete={onAnimationEnd}
        >
          {logoText}
        </motion.text>
      </svg>
    </motion.div>
  );
}
