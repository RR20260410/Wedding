import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Rita <span className="ampersand">&</span> Rafael
            </h1>
            <div className="hero__date">
              <span className="hero__date-text">Outubro 4, 2026</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 