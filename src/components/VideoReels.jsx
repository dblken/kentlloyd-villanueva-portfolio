import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { videoReels } from '../data/videos';
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

const VideoReels = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lightboxVideoRef = useRef(null);

  const closeLightbox = () => setLightboxIndex(null);

  useEffect(() => {
    if (lightboxIndex === null && lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
      lightboxVideoRef.current.currentTime = 0;
    }
  }, [lightboxIndex]);

  const prev = () => setLightboxIndex((i) => (i - 1 + videoReels.length) % videoReels.length);
  const next = () => setLightboxIndex((i) => (i + 1) % videoReels.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="videos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-bold mb-4"
          >
            Video <span className="gradient-text">Reels</span>
          </motion.h2>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto">
            Short-form video edits for social media. Tap a reel to watch with sound and controls.
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto"
        >
          {videoReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[9/16] max-w-[280px] mx-auto w-full rounded-2xl overflow-hidden glass cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <video
                src={reel.video}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <FiPlay className="text-4xl text-white mb-3" />
                <span className="text-secondary text-sm font-bold uppercase tracking-widest">Video Editing</span>
                <h3 className="text-xl font-outfit font-bold text-white mt-2">{reel.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{reel.description}</p>
              </div>
            </motion.div>
          ))}
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
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-md max-h-[85vh] w-full mx-20 flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={lightboxVideoRef}
                key={videoReels[lightboxIndex]?.video}
                src={videoReels[lightboxIndex]?.video}
                controls
                playsInline
                autoPlay
                className="max-h-[70vh] w-full object-contain rounded-2xl shadow-2xl bg-black"
              />
              <div className="text-center">
                <span className="text-secondary text-xs font-bold uppercase tracking-widest">Video Editing</span>
                <h3 className="text-xl font-outfit font-bold text-white mt-1">{videoReels[lightboxIndex]?.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{videoReels[lightboxIndex]?.description}</p>
              </div>

              <div className="flex gap-2 mt-2">
                {videoReels.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? 'bg-secondary w-5' : 'bg-white/30'}`}
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

export default VideoReels;
