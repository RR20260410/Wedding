import './Wedding.css';

const Wedding = () => {
  const weddingDetails = {
    ceremony: {
      time: '3:30 PM',
      venue: 'Quinta da Eira',
      address: 'Bustelo, Penafiel, 4560-042 Penafiel',
      description: 'Junta-te a nós para uma bela cerimónia onde trocaremos os nossos votos e daremos início à nossa caminhada juntos.'
    }
  };

  const schedule = [
    { time: '3:30 PM', event: 'Cerimônia', location: 'Jardim' },
    { time: '3:30 PM', event: 'Cocktail Hour', location: 'Jardim 2' },
    { time: '5:00 PM', event: 'Jantar', location: 'Sala de Banquetes' },
    { time: '6:30 PM', event: 'Primeira Dança', location: 'Quinta da Eira' },
    { time: '7:00 PM', event: 'Corte do bolo', location: 'Quinta da Eira' },
    { time: '11:00 PM', event: 'Despedida', location: 'Quinta da Eira' }
  ];

  return (
    <section id="wedding" className="section wedding bg-green">
      <div className="container">
        <h2 className="section-title">O Casamento</h2>

        <div className="wedding__details grid grid-2">
          <div className="wedding__ceremony card">
            <div className="wedding__ceremony-icon">💒</div>
            <h3>Cerimônia</h3>
            <div className="wedding__time">{weddingDetails.ceremony.time}</div>
            <div className="wedding__venue">{weddingDetails.ceremony.venue}</div>
            <div className="wedding__address">{weddingDetails.ceremony.address}</div>
            <p className="wedding__description">{weddingDetails.ceremony.description}</p>
            <a 
              href="https://maps.app.goo.gl/4EMKvCBJmCCePreC9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Direções
            </a>
          </div>
        </div>

        <div className="wedding__schedule">
          <h3 className="text-center mb-lg">Programa do Dia</h3>
          <div className="wedding__timeline">
            {schedule.map((item, index) => (
              <div key={index} className="wedding__timeline-item">
                <div className="wedding__timeline-time">{item.time}</div>
                <div className="wedding__timeline-content">
                  <div className="wedding__timeline-event">{item.event}</div>
                  <div className="wedding__timeline-location">{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Wedding; 