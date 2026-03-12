import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-secondary/20 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full"
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: 45 }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-primary/30 rounded-lg hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: -45 }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-secondary/30 rounded-full hidden md:block"
      />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-outfit text-primary font-medium tracking-widest uppercase mb-4"
        >
          Graphic & Web Designer
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-outfit font-extrabold mb-8 leading-tight"
        >
          Crafting <span className="gradient-text">Fast</span>, Intelligent <br /> 
          & <span className="gradient-text">Stunning</span> Visual Designs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-inter"
        >
          Inspiring growth through intelligent websites and visually captivating brand experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="portfolio" smooth={true} offset={-70} duration={500}>
            <button className="group relative bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 overflow-hidden">
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="contact" smooth={true} offset={-70} duration={500}>
            <button className="border-2 border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
