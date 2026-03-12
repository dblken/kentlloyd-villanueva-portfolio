import { motion } from 'framer-motion';
import { SiCanva, SiFigma, SiClaude, SiOpenai } from 'react-icons/si';
import { FaPhotoFilm } from 'react-icons/fa6';
import { BiLogoAdobe } from 'react-icons/bi';
import { MdOutlineSlowMotionVideo, MdOutlineVideoCameraBack } from 'react-icons/md';
import { TbCursorText } from 'react-icons/tb';

const tools = [
  { name: 'Claude', icon: SiClaude, color: '#d97706' },
  { name: 'ChatGPT', icon: SiOpenai, color: '#10a37f' },
  { name: 'Photoshop', icon: FaPhotoFilm, color: '#31a8ff' },
  { name: 'Illustrator', icon: BiLogoAdobe, color: '#ff9a00' },
  { name: 'Canva', icon: SiCanva, color: '#00c4cc' },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
  { name: 'Premiere Pro', icon: MdOutlineSlowMotionVideo, color: '#9999ff' },
  { name: 'Cursor', icon: TbCursorText, color: '#52a2ff' },
  { name: 'CapCut', icon: MdOutlineVideoCameraBack, color: '#ffffff' },
];

const Tools = () => {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-bold mb-4"
          >
            Tools That I <span className="gradient-text">Use</span>
          </motion.h2>
          <p className="text-gray-400 font-inter">My professional toolkit for design and development.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="relative group flex flex-col items-center gap-3"
            >
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full glass flex items-center justify-center text-4xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:border-primary/50"
                style={{ color: tool.color }}
              >
                <tool.icon />
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap z-20">
                  {tool.name}
                </div>
              </div>
              
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                style={{ backgroundColor: `${tool.color}10` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
