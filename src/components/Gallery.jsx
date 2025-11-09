import { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
  { id: 1, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/barcelona.jpg', alt: 'Barcelona', category: '2013' },
  { id: 2, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/ilha.JPG', alt: 'Ilha da Armona', category: '2015' },
  { id: 3, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/paris.jpg', alt: 'Paris', category: '2016' },
  { id: 4, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/paredes.jpg', alt: 'Paredes de Coura', category: '2018' },
  { id: 5, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/lamego.jpg', alt: 'Lamego', category: '2019' },
  { id: 6, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/gibraltar.jpg', alt: 'Gibraltar', category: '2019' },
  { id: 7, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/douro.jpg', alt: 'Porto', category: '2020' },
  { id: 7, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/polonia.jpg', alt: 'Varsóvia', category: '2021' },
  { id: 8, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/granada.jpg', alt: 'Granada', category: '2022' },
  { id: 9, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/turquia.jpg', alt: 'Istambul', category: '2022' },
  { id: 10, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/disney.jpg', alt: 'DisneyLand Paris', category: '2023' },
  { id: 11, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/cuba.jpg', alt: 'Havana', category: '2023' },
  { id: 12, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/como.jpg', alt: 'Como', category: '2023' },
  { id: 13, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/milao.jpg', alt: 'Milão', category: '2023' },
  { id: 13, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/dingle.jpg', alt: 'Dingle', category: '2024' },
  { id: 14, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/bilbao1.jpg', alt: 'Bilbao', category: '2025' },
  { id: 15, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/sanjuan.jpg', alt: 'S. Juan deGaztelugatxe', category: '2025' },
  { id: 15, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/Sahara.jpg', alt: 'Sahara', category: '2025' },

 
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Calculate the transform to show previous and next images
  const getSlideTransform = (index) => {
    const offset = (index - currentIndex) * 100;
    return `translateX(${offset}%)`;
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">A nossa história em imagens</h2>
        <p className="text-center mb-xl">
          Uma coleção dos nossos momentos favoritos ao longo dos anos.
        </p>

        <div className="gallery__carousel">
          <div className="gallery__carousel-container">
            <div className="gallery__carousel-track">
              {images.map((image, index) => (
                <div 
                  key={image.id} 
                  className={`gallery__carousel-slide ${index === currentIndex ? 'gallery__carousel-slide--active' : ''}`}
                  style={{
                    transform: getSlideTransform(index)
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading={index === currentIndex ? "eager" : "lazy"}
                  />
                  <div className="gallery__slide-overlay">
                    <div className="gallery__slide-content">
                      <h3>{image.alt}</h3>
                      <span className="gallery__slide-category">{image.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            className="gallery__nav-btn gallery__nav-btn--prev"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button 
            className="gallery__nav-btn gallery__nav-btn--next"
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Auto-play Toggle */}
          <button 
            className="gallery__autoplay-btn"
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? '⏸' : '▶'}
          </button>

          {/* Dots Indicator */}
          <div className="gallery__dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`gallery__dot ${index === currentIndex ? 'gallery__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="gallery__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 