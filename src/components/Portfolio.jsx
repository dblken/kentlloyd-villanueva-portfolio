import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiArrowRight } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const categories = ['All', 'Ads & Branding', 'Book Layouts', 'Workbook', 'Digital'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const activeProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;
  const activeGallery = activeProject?.gallery?.length ? activeProject.gallery : activeProject?.image ? [activeProject.image] : [];
  const currentImage = activeGallery[galleryIndex] || activeProject?.image;
  const isGalleryProject = activeGallery.length > 1;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setGalleryIndex(0);
  };
  const closeLightbox = () => setLightboxIndex(null);

  const handleFilterChange = (category) => {
    setFilter(category);
    setLightboxIndex(null);
    setGalleryIndex(0);
  };

  const prev = () => {
    if (isGalleryProject) {
      setGalleryIndex((i) => (i - 1 + activeGallery.length) % activeGallery.length);
      return;
    }

    setLightboxIndex((i) => (i - 1 + filteredProjects.length) % filteredProjects.length);
    setGalleryIndex(0);
  };

  const next = () => {
    if (isGalleryProject) {
      setGalleryIndex((i) => (i + 1) % activeGallery.length);
      return;
    }

    setLightboxIndex((i) => (i + 1) % filteredProjects.length);
    setGalleryIndex(0);
  };

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
            Graphic <span className="gradient-text">Design</span>
          </motion.h2>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto">
            Static design work — posters, digital art, and book layouts. Filter by category or click to view full size.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
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

                <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div className="space-y-3">
                    <FiZoomIn className="text-4xl text-white mx-auto mb-2" />
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl font-outfit font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    {(project.url || project.pdfUrl) && (
                      <a
                        href={project.url || project.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                      >
                        {project.pdfUrl ? 'Visit PDF' : 'View Project'} <FiArrowRight />
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
            <button
              className="absolute top-5 right-5 text-white text-3xl glass p-2 rounded-full hover:text-primary transition-colors z-10"
              onClick={closeLightbox}
            >
              <FiX />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white text-3xl glass p-3 rounded-full hover:text-primary transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <FiChevronLeft />
            </button>

            <motion.div
              key={`${lightboxIndex}-${galleryIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] w-full mx-20 flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage}
                alt={`${activeProject?.title || 'Portfolio project'}${isGalleryProject ? ` page ${galleryIndex + 1}` : ''}`}
                className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-center">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{activeProject?.category}</span>
                <h3 className="text-xl font-outfit font-bold text-white mt-1">{activeProject?.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{activeProject?.description}</p>
                {activeProject?.pdfUrl && (
                  <a
                    href={activeProject.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    Visit PDF <FiArrowRight />
                  </a>
                )}
                {activeProject?.url && (
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    Open Project <FiArrowRight />
                  </a>
                )}
              </div>

              <div className="flex gap-2 mt-2">
                {(isGalleryProject ? activeGallery : filteredProjects).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => isGalleryProject ? setGalleryIndex(i) : setLightboxIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === (isGalleryProject ? galleryIndex : lightboxIndex) ? 'bg-primary w-5' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </motion.div>

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
