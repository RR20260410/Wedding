import './Info.css';

const Info = () => {
  const contactInfo = {
    bride: {
      name: 'Rita Marques',
      phone: '+351 967 097 870',
      email: 'ritamarques232@gmail.com'
    },
    groom: {
      name: 'Rafael Ferreira',
      phone: '+351 965 084 906',
      email: 'rafa.martins2024@gmail.com'
    }
  };

  return (
    <section id="info" className="section info bg-green">
      <div className="container">
        <h2 className="section-title">Information & RSVP</h2>

        <div className="info__content grid grid-2">
          <div className="info__rsvp">
            <h3>RSVP</h3>
            <div className="info__rsvp-action">
              <iframe
                src="https://form.typeform.com/to/EUMcgia3"
                width="100%"
                height="600px"
                frameBorder="0"
                title="RSVP Form"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="info__details" height="600px">
            <div className="info__contact">
              <h3>Contact Information</h3>
              <div className="info__contact-cards" height="100%">
                <div className="info__contact-card">
                  <div className="info__contact-icon">👰</div>
                  <h4>{contactInfo.bride.name}</h4>
                  <p>📞 {contactInfo.bride.phone}</p>
                  <p><span className="email-emoji">🖂</span> {contactInfo.bride.email}</p>
                </div>
                <div className="info__contact-card">
                  <div className="info__contact-icon">🤵</div>
                  <h4>{contactInfo.groom.name}</h4>
                  <p>📞 {contactInfo.groom.phone}</p>
                  <p><span className="email-emoji">🖂</span> {contactInfo.groom.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alojamento block - same width as above */}
        <div className="info__content" style={{ marginTop: '2rem' }}>
          <div className="info__details">
            <div className="info__contact">
              <h3>Alojamento</h3>
              <div className="info__contact-cards">
                <div className="info__contact-card">
                  <div className="info__contact-icon">🛏️</div>
                  <ul style={{ marginBottom: '0.5rem' }}>
                    <li>Quarto na quinta - 150€ para 2 pessoas</li>
                    <li>Cama em camarata na quinta - 20€ por pessoa</li>
                  </ul>
                  <p style={{ marginBottom: '0.5rem' }}><em>*Pequeno almoço incluído no dia seguinte</em></p>
                  <p><strong>Quem pretender alojamento, comunicar com a maior brevidade possível</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Info;