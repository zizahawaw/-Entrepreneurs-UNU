import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { eventsData } from '../../data/ecData';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Event = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { key: 'all', label: lang === 'id' ? 'Semua Agenda' : 'All Events' },
    { key: 'upcoming', label: lang === 'id' ? 'Akan Datang' : 'Upcoming' },
    { key: 'seminar', label: 'Seminar' },
    { key: 'workshop', label: 'Workshop' },
    { key: 'competition', label: lang === 'id' ? 'Kompetisi' : 'Competition' }
  ];

  const filteredEvents = eventsData.filter((ev) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'upcoming') return ev.status === 'Upcoming' || ev.status === 'Registration Soon';
    if (selectedFilter === 'seminar') return ev.category === 'Seminar';
    if (selectedFilter === 'workshop') return ev.category === 'Workshop';
    if (selectedFilter === 'competition') return ev.category === 'Competition';
    return true;
  });

  return (
    <div>
      {/* 1. HERO EVENT */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
            <Calendar size={14} />
            <span>{lang === 'id' ? 'AGENDA & KEGIATAN' : 'ACTIVITIES & EVENTS'}</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {lang === 'id'
              ? 'Agenda Kegiatan & Ruang Berjejaring'
              : 'Upcoming Agendas & Networking Forums'}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {lang === 'id'
              ? 'Ikuti seminar inspiratif, workshop teknis keterampilan wirausaha, malam keakraban, dan kompetisi business plan bersama para mentor terkemuka.'
              : 'Join inspiring seminars, technical entrepreneurial masterclasses, community gatherings, and business plan competitions.'}
          </p>
        </div>
      </section>

      {/* 2. EVENT LIST & FILTER */}
      <section className="ec-section" style={{ background: 'var(--ec-white)', paddingTop: 48 }}>
        <div className="ec-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 style={{ fontSize: 24, color: 'var(--ec-deep-green)', marginBottom: 6 }}>
                {lang === 'id' ? 'Daftar Agenda Kegiatan' : 'Event Schedule'}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ec-muted)' }}>
                {lang === 'id'
                  ? `Ditemukan ${filteredEvents.length} agenda kegiatan`
                  : `Found ${filteredEvents.length} scheduled events`}
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className={`ec-lang-btn ${selectedFilter === f.key ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(f.key)}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    background: selectedFilter === f.key ? 'var(--ec-forest)' : 'var(--ec-sage-surface)',
                    color: selectedFilter === f.key ? '#fff' : 'var(--ec-slate)'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
            {filteredEvents.map((item) => {
              const title = lang === 'id' ? item.title.id : item.title.en;
              const summary = lang === 'id' ? item.summary.id : item.summary.en;
              const statusText = lang === 'id' ? item.statusLabel.id : item.statusLabel.en;

              return (
                <div key={item.id} className="ec-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(7, 46, 37, 0.85)', backdropFilter: 'blur(8px)', color: '#34d399', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 0 }}>
                      {item.category}
                    </div>
                    <div style={{ position: 'absolute', top: 12, right: 12, background: item.openRegistration ? 'rgba(16, 185, 129, 0.95)' : 'rgba(249, 115, 22, 0.95)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 0 }}>
                      {statusText}
                    </div>
                  </div>

                  <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: 'var(--ec-muted)', marginBottom: 12, flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <Calendar size={14} color="#059669" /> {item.date}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <Clock size={14} color="#059669" /> {item.time}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 19, color: 'var(--ec-deep-green)', marginBottom: 10, lineHeight: 1.35 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--ec-slate)', lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
                      {summary}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--ec-muted)', marginBottom: 24 }}>
                      <MapPin size={16} color="#ea580c" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{item.location}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--ec-border)' }}>
                      <Link to={`/event/${item.slug}`} className="ec-btn ec-btn-secondary" style={{ padding: '9px 18px', fontSize: 13.5 }}>
                        <span>{t.eventUpdate.viewEvent}</span>
                      </Link>
                      {item.openRegistration && (
                        <Link to={`/event/${item.slug}/daftar`} className="ec-btn ec-btn-accent" style={{ padding: '9px 18px', fontSize: 13.5 }}>
                          <span>{t.eventUpdate.registerNow}</span>
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
