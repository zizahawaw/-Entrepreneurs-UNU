import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { eventsData } from '../../data/ecData';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const EventDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  const event = eventsData.find((ev) => ev.slug === slug) || eventsData[0];

  const title = lang === 'id' ? event.title.id : event.title.en;
  const summary = lang === 'id' ? event.summary.id : event.summary.en;
  const statusText = lang === 'id' ? event.statusLabel.id : event.statusLabel.en;

  return (
    <div style={{ background: 'var(--ec-sage-bg)', minHeight: '100vh', padding: '48px 0 96px' }}>
      <div className="ec-container">
        {/* Back Link */}
        <div style={{ marginBottom: 24 }}>
          <button
            type="button"
            onClick={() => navigate('/event')}
            className="ec-btn ec-btn-secondary"
            style={{ padding: '8px 18px', fontSize: 13 }}
          >
            <ArrowLeft size={14} />
            <span>{lang === 'id' ? 'Kembali ke Daftar Event' : 'Back to Events'}</span>
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'flex-start' }}>
          {/* Main Info */}
          <div className="ec-card" style={{ padding: 40, background: '#fff' }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(5, 150, 105, 0.1)', color: 'var(--ec-emerald)', fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                {event.category}
              </span>
              <span style={{ background: event.openRegistration ? 'rgba(16, 185, 129, 0.15)' : 'rgba(249, 115, 22, 0.15)', color: event.openRegistration ? '#059669' : '#ea580c', fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                {statusText}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', color: 'var(--ec-deep-green)', marginBottom: 20, lineHeight: 1.25 }}>
              {title}
            </h1>

            <div style={{ borderRadius: 0, overflow: 'hidden', height: 360, marginBottom: 32 }}>
              <img src={event.image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h3 style={{ fontSize: 20, color: 'var(--ec-deep-green)', marginBottom: 14 }}>
              {lang === 'id' ? 'Deskripsi Kegiatan' : 'Event Overview'}
            </h3>
            <p style={{ fontSize: 15.5, color: 'var(--ec-slate)', lineHeight: 1.8, marginBottom: 32 }}>
              {summary}
            </p>

            <h3 style={{ fontSize: 20, color: 'var(--ec-deep-green)', marginBottom: 14 }}>
              {lang === 'id' ? 'Narasumber & Fasilitator' : 'Speakers & Mentors'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {event.speakers.map((spk, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', background: 'var(--ec-sage-surface)', borderRadius: 'var(--radius-md)' }}>
                  <Users size={18} color="#059669" />
                  <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--ec-forest)' }}>{spk}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: '20px 24px', background: 'var(--ec-sage-bg)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--ec-emerald)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ec-forest)', marginBottom: 4 }}>
                {lang === 'id' ? 'Catatan Peserta' : 'Participant Notes'}
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ec-muted)' }}>
                {lang === 'id'
                  ? 'Sertifikat kehadiran elektronik, materi presentasi digital, dan konsumsi disediakan oleh panitia pelaksana.'
                  : 'E-certificates, digital presentation decks, and refreshments are provided by the organizing committee.'}
              </div>
            </div>
          </div>

          {/* Sidebar Info & Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'sticky', top: 100 }}>
            <div className="ec-card" style={{ padding: 32, background: '#fff' }}>
              <h3 style={{ fontSize: 19, color: 'var(--ec-deep-green)', marginBottom: 20 }}>
                {lang === 'id' ? 'Detail Jadwal & Lokasi' : 'Schedule & Venue'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Calendar size={18} color="#059669" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--ec-muted)', fontWeight: 600 }}>{lang === 'id' ? 'Tanggal' : 'Date'}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ec-deep-green)' }}>{event.date}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Clock size={18} color="#059669" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--ec-muted)', fontWeight: 600 }}>{lang === 'id' ? 'Waktu Pelaksanaan' : 'Time'}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ec-deep-green)' }}>{event.time}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <MapPin size={18} color="#ea580c" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--ec-muted)', fontWeight: 600 }}>{lang === 'id' ? 'Lokasi' : 'Venue'}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ec-deep-green)' }}>{event.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Users size={18} color="#059669" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--ec-muted)', fontWeight: 600 }}>{lang === 'id' ? 'Kapasitas Kuota' : 'Capacity'}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ec-deep-green)' }}>{event.capacity}</div>
                  </div>
                </div>
              </div>

              {event.openRegistration ? (
                <Link
                  to={`/event/${event.slug}/daftar`}
                  className="ec-btn ec-btn-accent"
                  style={{ width: '100%', padding: '14px 20px', fontSize: 15 }}
                >
                  <span>{t.eventUpdate.registerNow}</span>
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <div style={{ textAlign: 'center', padding: '12px', background: 'var(--ec-sage-surface)', borderRadius: 'var(--radius-md)', color: 'var(--ec-muted)', fontSize: 13, fontWeight: 600 }}>
                  {lang === 'id' ? 'Pendaftaran belum dibuka atau telah ditutup' : 'Registration is currently not open'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
