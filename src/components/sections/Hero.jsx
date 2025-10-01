import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  HiSparkles, HiLightningBolt, HiPlay, HiCursorClick, 
  HiCode, HiDeviceMobile, HiCloudUpload 
} from "react-icons/hi";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const dynamicTexts = [
    "Digital Magic ✨",
    "Web Experiences 🚀", 
    "Mobile Apps 📱",
    "Cloud Solutions ☁️",
    "AI-Powered Tools 🤖"
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none"
      style={{ background: 'linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243e 100%)' }}
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Interactive Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <HiSparkles className="text-cyan-400" />
          </motion.div>
          <span className="text-sm font-medium">Available for new projects</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiLightningBolt className="text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Main Heading with Dynamic Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            We Create{" "}
            <div className="relative inline-block h-20 md:h-32 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                  {dynamicTexts[currentText]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
        </motion.div>

        {/* Interactive Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300"
        >
          From{" "}
          <motion.span 
            className="text-cyan-400 cursor-pointer inline-block"
            whileHover={{ scale: 1.1, color: "#06b6d4" }}
            onClick={() => alert("🚀 Web development is our specialty!")}
          >
            stunning web applications
          </motion.span>{" "}
          to{" "}
          <motion.span 
            className="text-purple-400 cursor-pointer inline-block"
            whileHover={{ scale: 1.1, color: "#8b5cf6" }}
            onClick={() => alert("📱 Mobile apps that users love!")}
          >
            cutting-edge mobile experiences
          </motion.span>
          , we transform innovative ideas into digital masterpieces.
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Primary CTA with Ripple Effect */}
          <motion.button
            className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Start Your Project</span>
            <motion.div
              className="relative z-10"
              animate={{ 
                x: [0, 5, 0],
                rotate: [0, 15, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <HiLightningBolt className="text-xl" />
            </motion.div>
          </motion.button>

          {/* Secondary CTA with Hover Animation */}
          <motion.button
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <HiPlay className="text-xl relative z-10" />
            <span className="relative z-10">Watch Magic</span>
          </motion.button>
        </motion.div>

        {/* Interactive Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-8 text-gray-400"
        >
          {[
            { icon: HiCode, label: "React", color: "text-cyan-400" },
            { icon: HiDeviceMobile, label: "Mobile", color: "text-purple-400" },
            { icon: HiCloudUpload, label: "Cloud", color: "text-pink-400" }
          ].map((tech, index) => (
            <motion.div
              key={tech.label}
              className="flex flex-col items-center gap-2 cursor-pointer"
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                color: tech.color 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <tech.icon size={32} />
              <span className="text-sm font-medium">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Interactive Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiCursorClick size={24} />
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </motion.div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
