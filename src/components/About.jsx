import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const About = () => {
  const highlights = [
    "5+ Years of Design Experience",
    "Expert in User-Centric UI/UX",
    "Rapid Website Prototyping",
    "Creative Branding Solutions",
    "AI-Powered Workflow Efficiency",
    "Clean & Modern Aesthetics"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-8">
              Passionate About <span className="gradient-text">Design</span> and <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 font-inter leading-relaxed">
              Hello! I'm a professional Graphic and Web Designer dedicated to creating impactful digital experiences. My approach combines artistic creativity with technical precision to build websites that aren't just beautiful, but also highly functional.
            </p>
            <p className="text-gray-400 text-lg mb-8 font-inter leading-relaxed">
              I specialize in bridging the gap between design concepts and professional implementation, ensuring every project I touch resonates with its target audience and drives growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary/20 p-1 rounded-full text-primary">
                    <FiCheck />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Element/Skills List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative p-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl">
              <div className="bg-dark-surface p-8 md:p-12 rounded-3xl">
                <h3 className="text-2xl font-outfit font-bold mb-8 flex items-center gap-3">
                  My Core Expertises
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Web Design", progress: 95 },
                    { label: "Graphic Design", progress: 90 },
                    { label: "UI/UX Strategy", progress: 85 },
                    { label: "AI Integration", progress: 80 }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-300">{skill.label}</span>
                        <span className="text-primary">{skill.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
