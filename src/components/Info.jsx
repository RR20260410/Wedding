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
        <h2 className="section-title">Confirmação & Contactos</h2>

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
              <h3>Contactos</h3>
              <div className="info__contact-cards" height="100%">
                <div className="info__contact-card">
                  <div className="info__contact-icon">👰‍♀️</div>
                  <h4>{contactInfo.bride.name}</h4>
                  <p>📞 {contactInfo.bride.phone}</p>
                  <p>📧 {contactInfo.bride.email}</p>
                </div>
                <div className="info__contact-card">
                  <div className="info__contact-icon">🤵</div>
                  <h4>{contactInfo.groom.name}</h4>
                  <p>📞 {contactInfo.groom.phone}</p>
                  <p>📧 {contactInfo.groom.email}</p>
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