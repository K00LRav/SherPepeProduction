// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css';

const HeroSection = () => {
  const imageList = [
    '/images/image1.webp',
    '/images/image2.webp',
    '/images/image3.webp',
    '/images/image4.webp',
    '/images/image5.jpg',
    '/images/image7.webp',
    '/images/image6.jpg',
  ];

  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    const shuffled = [...imageList].sort(() => 0.5 - Math.random());
    setCarouselImages(shuffled.slice(0, 5));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const scrollToComics = () => {
    const comicsSection = document.getElementById('comics-gallery');
    if (comicsSection) {
      comicsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('ComicsGallery section not found!');
    }
  };

  return (
    <div className="hero-section">
      <div className="slideshow">
        <Slider {...sliderSettings}>
          {carouselImages.map((image, index) => (
            <img key={index} src={image} alt={`SherPepe Slide ${index + 1}`} />
          ))}
        </Slider>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Yo, SherPepe’s Here to Slay! 🐸</h1>
        <p>Thrilling comics & ribbiting vibes—jump in!</p>
        <div className="hero-buttons">
          <button className="btn-explore" onClick={scrollToComics}>
            Check the Comics 🔥
          </button>
          <a href="/SherPepeWhitePaper.pdf" download className="btn-whitepaper">
            Grab the Whitepaper 📜
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;