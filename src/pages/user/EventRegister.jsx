import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { eventsData } from '../../data/ecData';
import {
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const EventRegister = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const event = eventsData.find((ev) => ev.slug === slug) || eventsData[0];
  const title = lang === 'id' ? event.title.id : event.title.en;

  const [formData, setFormData] = useState({
    fullName: '',
    nim: '',
    studyProgram: '',
    email: '',
    phone: '',
    motivation: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg(lang === 'id' ? 'Mohon lengkapi seluruh field wajib (*).' : 'Please complete all required fields (*).');
      return;
    }
    // Simulate submission state without fake server claims
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--ec-sage-bg)', minHeight: '100vh', padding: '48px 0 96px' }}>
      <div className="ec-container" style={{ maxWidth: 760 }}>
        <div style={{ marginBottom: 24 }}>
          <button
            type="button"
            onClick={() => navigate(`/event/${event.slug}`)}
            className="ec-btn ec-btn-secondary"
            style={{ padding: '8px 18px', fontSize: 13 }}
          >
            <ArrowLeft size={14} />
            <span>{lang === 'id' ? 'Kembali ke Info Event' : 'Back to Event Info'}</span>
          </button>
        </div>

        <div className="ec-card" style={{ padding: '40px 48px', background: '#fff' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <CheckCircle2 size={36} />
              </div>
              <h2 style={{ fontSize: 26, color: 'var(--ec-deep-green)', marginBottom: 12 }}>
                {lang === 'id' ? 'Pendaftaran Anda Berhasil Diterima!' : 'Registration Received Successfully!'}
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ec-slate)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 24px' }}>
                {lang === 'id'
                  ? `Terima kasih, ${formData.fullName}. Formulir Anda untuk kegiatan "${title}" telah tercatat pada sesi pratinjau sistem. Tim panitia EC akan menghubungi Anda melalui WhatsApp di nomor ${formData.phone}.`
                  : `Thank you, ${formData.fullName}. Your registration for "${title}" has been recorded in the local session. The EC committee will reach out via WhatsApp at ${formData.phone}.`}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="ec-btn ec-btn-secondary"
                >
                  {lang === 'id' ? 'Daftarkan Peserta Lain' : 'Register Another Participant'}
                </button>
                <Link to="/event" className="ec-btn ec-btn-primary">
                  {lang === 'id' ? 'Lihat Agenda Lainnya' : 'View Other Events'}
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="ec-eyebrow" style={{ marginBottom: 12 }}>
                <span>{lang === 'id' ? 'FORM PENDAFTARAN PESERTA' : 'PARTICIPANT REGISTRATION'}</span>
              </div>
              <h1 style={{ fontSize: 26, color: 'var(--ec-deep-green)', marginBottom: 8 }}>
                {lang === 'id' ? 'Formulir Registrasi Kegiatan' : 'Event Registration Form'}
              </h1>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ec-forest)', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--ec-border)' }}>
                {title}
              </div>

              {errorMsg && (
                <div style={{ padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: 'var(--radius-md)', marginBottom: 20, fontSize: 13.5 }}>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="ec-input-group">
                  <label className="ec-label">{lang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}</label>
                  <input
                    type="text"
                    name="fullName"
                    className="ec-input"
                    placeholder="Contoh: Muhammad Ilham"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'NIM / ID Mahasiswa' : 'Student ID'}</label>
                    <input
                      type="text"
                      name="nim"
                      className="ec-input"
                      placeholder="Contoh: 23100123"
                      value={formData.nim}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Program Studi / Fakultas' : 'Major / Faculty'}</label>
                    <input
                      type="text"
                      name="studyProgram"
                      className="ec-input"
                      placeholder="Contoh: Teknik Informatika"
                      value={formData.studyProgram}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Email Aktif *' : 'Email Address *'}</label>
                    <input
                      type="email"
                      name="email"
                      className="ec-input"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Nomor WhatsApp *' : 'WhatsApp Number *'}</label>
                    <input
                      type="tel"
                      name="phone"
                      className="ec-input"
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="ec-input-group">
                  <label className="ec-label">{lang === 'id' ? 'Alasan / Harapan Mengikuti Kegiatan' : 'Motivation / Expectations'}</label>
                  <textarea
                    name="motivation"
                    className="ec-textarea"
                    placeholder={lang === 'id' ? 'Tuliskan secara singkat harapan Anda...' : 'Briefly share what you hope to learn...'}
                    value={formData.motivation}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div style={{ marginTop: 24 }}>
                  <button type="submit" className="ec-btn ec-btn-accent" style={{ width: '100%', padding: '14px', fontSize: 15 }}>
                    <span>{lang === 'id' ? 'Kirim Pendaftaran Sekarang' : 'Submit Registration Now'}</span>
                  </button>
                  <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--ec-muted)', marginTop: 10 }}>
                    {lang === 'id'
                      ? 'Pendaftaran divalidasi langsung pada sistem pratinjau antarmuka pengguna.'
                      : 'Validated directly within the frontend interface simulation.'}
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
