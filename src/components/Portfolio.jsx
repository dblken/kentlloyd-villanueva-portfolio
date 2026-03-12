import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const categories = ['All', 'Graphic Design', 'Digital'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => setLightboxIndex((i) => (i - 1 + filteredProjects.length) % filteredProjects.length);
  const next = () => setLightboxIndex((i) => (i + 1) % filteredProjects.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="portfolio" className="py-24 bg-dark-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-bold mb-4"
          >
            Design <span className="gradient-text">Works</span>
          </motion.h2>
          <p className="text-gray-400 font-inter">A collection of my recent creative projects.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div className="space-y-3">
                    <FiZoomIn className="text-4xl text-white mx-auto mb-2" />
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl font-outfit font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white text-3xl glass p-2 rounded-full hover:text-primary transition-colors z-10"
              onClick={closeLightbox}
            >
              <FiX />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white text-3xl glass p-3 rounded-full hover:text-primary transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <FiChevronLeft />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] w-full mx-20 flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredProjects[lightboxIndex]?.image}
                alt={filteredProjects[lightboxIndex]?.title}
                className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-center">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{filteredProjects[lightboxIndex]?.category}</span>
                <h3 className="text-xl font-outfit font-bold text-white mt-1">{filteredProjects[lightboxIndex]?.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{filteredProjects[lightboxIndex]?.description}</p>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-2">
                {filteredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? 'bg-primary w-5' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white text-3xl glass p-3 rounded-full hover:text-primary transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
