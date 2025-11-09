import { useEffect, useState } from 'react';
import './Footer.css';

const Celebration = () => {
  // Target: 2026-11-04 15:30 local time
  const target = new Date(2026, 10, 4, 15, 30, 0);
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, target - new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, target - new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="celebration">
  <img src="https://raw.githubusercontent.com/rafa2024/wed_website/main/image/guiness.jpg" alt="Guiness" className="celebration__image" />
      <div className="celebration__content">
        <h3 className="celebration__title">Vem brindar connosco!</h3>
        <div className="celebration__countdown">
          <div className="celebration__unit"><span>{String(days).padStart(2, '0')}</span><small>d</small></div>
          <div className="celebration__unit"><span>{String(hours).padStart(2, '0')}</span><small>h</small></div>
          <div className="celebration__unit"><span>{String(minutes).padStart(2, '0')}</span><small>m</small></div>
          <div className="celebration__unit"><span>{String(seconds).padStart(2, '0')}</span><small>s</small></div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="celebration-wrap">
        <div className="container">
          <Celebration />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__main">
              <h3 className="footer__title">Rita & Rafa</h3>
              <p className="footer__subtitle"> 4 de Outubro, 2026</p>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {currentYear} Rita & Rafa. Feito com 🤍</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;