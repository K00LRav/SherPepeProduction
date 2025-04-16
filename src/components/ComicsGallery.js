// src/components/ComicsGallery.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ComicsGallery.css';

const ComicsGallery = () => {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [error, setError] = useState(null);

  // Fetch comics from comics.json on mount
  useEffect(() => {
    fetch('/comics.json')
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Failed to fetch comics.json: ${response.status} - ${text.slice(0, 50)}...`);
          });
        }
        return response.json();
      })
      .then((data) => {
        // Validate dates and log warnings for invalid ones
        data.forEach((comic) => {
          if (isNaN(new Date(comic.publishedDate).getTime())) {
            console.warn(`Invalid date for ${comic.title}: ${comic.publishedDate}`);
          }
        });
        setComics(data);
      })
      .catch((error) => {
        console.error('Error fetching comics:', error);
        setError(error.message);
      });
  }, []);

  const sortedComics = [...comics].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  const latestComic = sortedComics[0];
  const otherComics = sortedComics.slice(1);
  const visibleComics = otherComics.slice(0, visibleCount);

  const openModal = (comic) => setSelectedComic(comic);
  const closeModal = () => setSelectedComic(null);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x600.png?text=Image+Not+Found";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, otherComics.length));
  };

  return (
    <div className="comics-gallery" id="comics-gallery">
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!error && !latestComic && <p>Loading comics...</p>}

      {/* Featured Latest Comic */}
      {latestComic && (
        <motion.div
          className="featured-comic"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Latest SherPepe Drop! 🔥</h2>
          <motion.div
            className="featured-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(latestComic)}
          >
            <img
              src={latestComic.cover}
              alt={latestComic.title}
              className="featured-image"
              onError={handleImageError}
            />
            <div className="featured-info">
              <h3>{latestComic.title}</h3>
              <p className="featured-description">{latestComic.description}</p>
              <p className="featured-date">Dropped: {formatDate(latestComic.publishedDate)}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Other Comics Grid */}
      {otherComics.length > 0 && (
        <>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            More SherPepe Vibes 🐸
          </motion.h2>
          <div className="comics-grid">
            {visibleComics.map((comic, index) => (
              <motion.div
                key={index}
                className="comics-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(comic)}
              >
                <img
                  src={comic.cover}
                  alt={comic.title}
                  className="comics-image"
                  onError={handleImageError}
                />
                <h3>{comic.title}</h3>
                <p className="comics-description">{comic.description}</p>
                <p className="comics-date">Dropped: {formatDate(comic.publishedDate)}</p>
              </motion.div>
            ))}
          </div>
          {visibleCount < otherComics.length && (
            <button className="load-more" onClick={loadMore}>
              Load More Comics 🔥
            </button>
          )}
        </>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedComic && (
          <motion.div
            className="comics-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="comics-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="comics-close-button" onClick={closeModal}>
                ×
              </span>
              <img
                src={selectedComic.cover}
                alt={selectedComic.title}
                className="comics-modal-image"
                onError={handleImageError}
              />
              <h3>{selectedComic.title}</h3>
              <p className="comics-description">{selectedComic.description}</p>
              <p className="comics-date">Dropped: {formatDate(selectedComic.publishedDate)}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComicsGallery;