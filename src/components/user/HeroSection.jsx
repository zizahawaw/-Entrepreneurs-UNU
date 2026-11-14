import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const eventCards = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
      status: lang === 'id' ? 'Segera Hadir' : 'Coming Soon',
      statusColor: '#ea580c',
      statusBg: 'rgba(234, 88, 12, 0.95)',
      title: 'Entrepreneurship Talk',
      desc: lang === 'id' ? 'Seminar & Business Sharing' : 'Seminar & Business Sharing',
      link: '/event'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      status: lang === 'id' ? 'Akan Datang' : 'Upcoming',
      statusColor: '#059669',
      statusBg: 'rgba(5, 150, 105, 0.95)',
      title: 'Business Workshop',
      desc: lang === 'id' ? 'Learn & Develop Skills' : 'Learn & Develop Skills',
      link: '/event'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=600&q=80',
      status: lang === 'id' ? 'Pendaftaran Segera' : 'Registration Soon',
      statusColor: '#0284c7',
      statusBg: 'rgba(2, 132, 199, 0.95)',
      title: 'Business Competition',
      desc: lang === 'id' ? 'Show Your Best Ideas' : 'Show Your Best Ideas',
      link: '/event'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
      status: lang === 'id' ? 'Segera Hadir' : 'Coming Soon',
      statusColor: '#059669',
      statusBg: 'rgba(5, 150, 105, 0.95)',
      title: 'Entrepreneur Gathering',
      desc: lang === 'id' ? 'Connect & Collaborate' : 'Connect & Collaborate',
      link: '/event'
    }
  ];

  return (
    <section className="ec-hero-smartstart">
      <div className="ec-container">
        <div className="ec-hero-smartstart-grid">
          {/* ================= LEFT COLUMN ================= */}
          <div className="ec-hero-smartstart-left">
            {/* Clean Editorial Eyebrow (No AI Capsule Badge) */}
            <div className="ec-hero-clean-eyebrow">
              {t.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="ec-hero-smartstart-headline">
              {lang === 'id' ? (
                <>
                  Ubah Ide Kreatif <br />
                  Menjadi <span className="ec-text-highlight">Bisnis Nyata</span>
                </>
              ) : (
                <>
                  Turn Your Ideas <br />
                  Into <span className="ec-text-highlight">Real Businesses</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="ec-hero-smartstart-desc">
              {t.description}
            </p>

            {/* Dual Action Buttons */}
            <div className="ec-hero-smartstart-ctas">
              <Link to="/about" className="ec-btn ec-btn-primary" style={{ padding: '13px 26px', fontSize: '14.5px', borderRadius: '8px' }}>
                <span>{lang === 'id' ? 'Discover More →' : 'Discover More →'}</span>
              </Link>
              <Link to="/rekrutmen" className="ec-btn ec-btn-secondary" style={{ padding: '13px 26px', fontSize: '14.5px', borderRadius: '8px' }}>
                <span>{lang === 'id' ? 'Join Our Community' : 'Join Our Community'}</span>
              </Link>
            </div>

            {/* Clean Typographic Highlights (No AI Capsule Buttons) */}
            <div className="ec-hero-clean-highlights">
              <span>✦ {t.highlight1}</span>
              <span className="ec-hero-sep">•</span>
              <span>✦ {t.highlight2}</span>
              <span className="ec-hero-sep">•</span>
              <span>✦ {t.highlight3}</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN — 4 SQUARE EVENT CARDS ================= */}
          <div className="ec-hero-smartstart-right">
            <div className="ec-hero-square-grid">
              {/* Column 1 (Cards 1 & 3) */}
              <div className="ec-hero-cards-col ec-hero-col-1">
                {/* Event Card 1 */}
                <Link to={eventCards[0].link} className="ec-square-event-card">
                  <div className="ec-square-event-media">
                    <img src={eventCards[0].image} alt={eventCards[0].title} className="ec-square-event-img" />
                    <span className="ec-square-event-badge" style={{ background: eventCards[0].statusBg }}>
                      {eventCards[0].status}
                    </span>
                  </div>
                  <div className="ec-square-event-info">
                    <h3 className="ec-square-event-title">{eventCards[0].title}</h3>
                    <p className="ec-square-event-desc">{eventCards[0].desc}</p>
                  </div>
                </Link>

                {/* Event Card 3 */}
                <Link to={eventCards[2].link} className="ec-square-event-card">
                  <div className="ec-square-event-media">
                    <img src={eventCards[2].image} alt={eventCards[2].title} className="ec-square-event-img" />
                    <span className="ec-square-event-badge" style={{ background: eventCards[2].statusBg }}>
                      {eventCards[2].status}
                    </span>
                  </div>
                  <div className="ec-square-event-info">
                    <h3 className="ec-square-event-title">{eventCards[2].title}</h3>
                    <p className="ec-square-event-desc">{eventCards[2].desc}</p>
                  </div>
                </Link>
              </div>

              {/* Column 2 (Cards 2 & 4 - Staggered) */}
              <div className="ec-hero-cards-col ec-hero-col-2">
                {/* Event Card 2 */}
                <Link to={eventCards[1].link} className="ec-square-event-card">
                  <div className="ec-square-event-media">
                    <img src={eventCards[1].image} alt={eventCards[1].title} className="ec-square-event-img" />
                    <span className="ec-square-event-badge" style={{ background: eventCards[1].statusBg }}>
                      {eventCards[1].status}
                    </span>
                  </div>
                  <div className="ec-square-event-info">
                    <h3 className="ec-square-event-title">{eventCards[1].title}</h3>
                    <p className="ec-square-event-desc">{eventCards[1].desc}</p>
                  </div>
                </Link>

                {/* Event Card 4 */}
                <Link to={eventCards[3].link} className="ec-square-event-card">
                  <div className="ec-square-event-media">
                    <img src={eventCards[3].image} alt={eventCards[3].title} className="ec-square-event-img" />
                    <span className="ec-square-event-badge" style={{ background: eventCards[3].statusBg }}>
                      {eventCards[3].status}
                    </span>
                  </div>
                  <div className="ec-square-event-info">
                    <h3 className="ec-square-event-title">{eventCards[3].title}</h3>
                    <p className="ec-square-event-desc">{eventCards[3].desc}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;