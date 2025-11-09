import { useState, useEffect, useRef } from 'react';
import './HowWeMet.css';

const HowWeMet = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRefs = useRef([]);

  const storyEvents = [
    {
      year: '2013',
      title: 'O Baile',
      description: 'Desde a escola EB23 do Viso, onde nem sempre fomos os melhores amigos, até entrarmos juntos no baile de finalistas do secundário. O nosso percurso como parceiros já tem uma duração respeitável, no nosso caso, dizer que crescemos juntos, é literal. Era impossível sermos os mesmos, tinhamos 12 anos na primeira vez em que nos vimos, já levamos 3 décadas, juntos metade desse tempo.',
  image: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/baile.jpg'
    },
    {
      year: '2018',
      title: 'Cortejo',
      description: 'Completámos vários objetivos em conjunto, quer fossem individuais ou comuns, e ultrapássamos várias metas. Partilhámos estadia em diferentes locais ao redor do mundo, uns mais citadinos, outros mais exóticos. Mas este percurso não foi totalmente feito a dois, os familiares e amigos que nos acompanharam enriquecem esta história.',
  image: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/cortejo1.jpg'
    },
    {
      year: '2025',
      title: 'O Pedido',
      description: 'Agora decidimos avançar para uma nova fase. Queremos contar com a tua presença para este momento especial.',
  image: 'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/pedido.jpg'
    }
  ];

  return (
    <section id="how-we-met" className="section how-we-met">
      <div className="container">
        <h2 className="section-title">A nossa história</h2>
        
        <div className="how-we-met__content">
          {storyEvents.map((event, index) => (
            <div 
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className={`how-we-met__story-row ${index % 2 === 0 ? 'how-we-met__story-row--left' : 'how-we-met__story-row--right'}`}
            >
              {/* Image Container */}
              <div className="how-we-met__image-container">
                <div className="how-we-met__image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`how-we-met__image how-we-met__image--active${index === 0 ? ' how-we-met__image--baile' : ''}`}
                  />
                </div>
              </div>

              {/* Story Content */}
              <div className="how-we-met__story-item">
                <div className="how-we-met__story-content">
                  <div className="how-we-met__year">{event.year}</div>
                  <h3 className="how-we-met__title">{event.title}</h3>
                  <p className="how-we-met__description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeMet; 