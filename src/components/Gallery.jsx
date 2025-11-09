import { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
  { id: 1, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/barcelona.jpg', alt: 'Barcelona', category: 'travel' },
  { id: 2, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/paris.jpg', alt: 'Paris', category: 'dating' },
  { id: 3, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/ilha.JPG', alt: 'A ilha', category: 'travel' },
  { id: 4, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/paredes.jpg', alt: 'Paredes', category: 'travel' },
  { id: 5, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/lamego.jpg', alt: 'Lamego', category: 'travel' },
  { id: 6, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/gibraltar.jpg', alt: 'Gibraltar', category: 'travel' },
  { id: 7, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/polonia.jpg', alt: 'Polônia', category: 'travel' },
  { id: 8, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/granada.jpg', alt: 'Granada', category: 'travel' },
  { id: 9, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/turquia.jpg', alt: 'Turquia', category: 'travel' },
  { id: 10, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/disney.jpg', alt: 'Disney', category: 'travel' },
  { id: 11, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/cuba.jpg', alt: 'Cuba', category: 'travel' },
  { id: 12, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/como.jpg', alt: 'Como', category: 'travel' },
  { id: 13, src: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/milao.jpg', alt: 'Milão', category: 'travel' },
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
          Uma coleção dos nossos momentos favoritos juntos, desde o nosso primeiro encontro até o nosso noivado.
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