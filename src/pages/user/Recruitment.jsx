import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { recruitmentFaq } from '../../data/ecData';
import {
  CheckCircle2,
  Briefcase,
  Layers,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Award
} from 'lucide-react';

const Recruitment = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    faculty: '',
    email: '',
    phone: '',
    division: 'Business Development',
    motivation: ''
  });

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert(lang === 'id' ? 'Mohon lengkapi field yang dibutuhkan.' : 'Please fill all required fields.');
      return;
    }
    setFormSubmitted(true);
  };

  const divisions = [
    {
      name: 'Business Development & Enterprises',
      desc: lang === 'id' ? 'Mengelola operasional unit bisnis konsinyasi kampus, etalase KOPMA, dan program Sky Garden Café.' : 'Managing consignment retail, coop shelves, and Sky Garden Café operations.'
    },
    {
      name: 'Creative, Media & Production',
      desc: lang === 'id' ? 'Membuat desain konten, dokumentasi foto/video, siaran podcast wirausaha, dan kurasi merchandise.' : 'Creating design assets, video/photo documentation, podcast production, and merchandise curation.'
    },
    {
      name: 'Event Organizer & Operations',
      desc: lang === 'id' ? 'Merancang dan mengeksekusi workshop, seminar bisnis, community gathering, dan proyek EO Kids-Playdate.' : 'Planning and executing workshops, business seminars, gatherings, and Kids-Playdate projects.'
    },
    {
      name: 'Public Relations & Partnership',
      desc: lang === 'id' ? 'Membangun relasi eksternal dengan UMKM, lembaga filantropi (seperti BAZNAS DIY), sponsor, dan media kampus.' : 'Forging external partnerships with MSMEs, foundations, sponsors, and media.'
    }
  ];

  const benefits = [
    {
      title: lang === 'id' ? 'Pengalaman Bisnis Lapangan' : 'Hands-on Business Practice',
      desc: lang === 'id' ? 'Bukan sekadar teori; Anda langsung terlibat dalam pengelolaan produk, penjualan, dan layanan nyata.' : 'Real involvement in actual product management, sales pipelines, and customer fulfillment.'
    },
    {
      title: lang === 'id' ? 'Mentoring & Inkubasi' : 'Mentorship & Incubation',
      desc: lang === 'id' ? 'Akses bimbingan dari para praktisi bisnis, alumni sukses, dan inkubator kewirausahaan kampus.' : 'Direct access to business mentors, entrepreneurial alumni, and incubation guidance.'
    },
    {
      title: lang === 'id' ? 'Jejaring Lintas Fakultas' : 'Interdisciplinary Network',
      desc: lang === 'id' ? 'Bertemu rekan-rekan kolaboratif dari berbagai disiplin ilmu untuk merintis proyek wirausaha bersama.' : 'Connect with talented peers across departments to co-found ventures.'
    },
    {
      title: lang === 'id' ? 'Sertifikat & Portofolio' : 'Official Portfolio & Honors',
      desc: lang === 'id' ? 'Sertifikat keaktifan resmi organisasi dan portofolio manajerial yang berbobot untuk karier masa depan.' : 'Official membership credentials and solid leadership portfolio.'
    }
  ];

  const flow = [
    { step: '01', title: lang === 'id' ? 'Registrasi Online' : 'Online Application', desc: lang === 'id' ? 'Isi formulir biodata dan pilih divisi yang diminati.' : 'Submit profile and select desired divisions.' },
    { step: '02', title: lang === 'id' ? 'Wawancara Santai' : 'Casual Interview', desc: lang === 'id' ? 'Diskusi motivasi dan pemetaan potensi minat wirausaha.' : 'Motivational sharing and interest mapping.' },
    { step: '03', title: lang === 'id' ? 'Welcoming & Onboarding' : 'Welcoming & Onboarding', desc: lang === 'id' ? 'Penyambutan anggota baru dan pengenalan divisi kerja.' : 'Welcoming session and division team onboarding.' }
  ];

  return (
    <div>
      {/* 1. HERO RECRUITMENT */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-recruitment-status-tag" style={{ margin: '0 auto 16px' }}>
            <span className="ec-pulse-dot"></span>
            <span>OPEN RECRUITMENT • BATCH 2026</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {t.recruitmentBanner.headline}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {t.recruitmentBanner.description}
          </p>
          <a href="#daftar-form" className="ec-btn ec-btn-accent" style={{ padding: '14px 32px', fontSize: 16 }}>
            <span>{lang === 'id' ? 'Daftar Sekarang' : 'Apply Now'}</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* 2. WHY JOIN & BENEFITS */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="ec-eyebrow">
              <span>{lang === 'id' ? 'KENAPA GABUNG KAMI' : 'WHY JOIN US'}</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Mengapa Bergabung dengan EC?' : 'Why Join Entrepreneurs Club?'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
            {benefits.map((b, i) => (
              <div key={i} className="ec-card" style={{ padding: 32 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--ec-sage-surface)', color: 'var(--ec-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Award size={22} />
                </div>
                <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ec-muted)', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIVISIONS */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="ec-eyebrow">
              <Briefcase size={13} />
              <span>DIVISI KERJA</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Pilihan Divisi & Ruang Kreasi' : 'Available Divisions & Teams'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {divisions.map((div, idx) => (
              <div key={idx} className="ec-card" style={{ padding: 32 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--ec-emerald)', background: 'rgba(5, 150, 105, 0.1)', padding: '4px 10px', borderRadius: 0 }}>
                  Divisi #{idx + 1}
                </span>
                <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', margin: '14px 0 8px' }}>{div.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--ec-slate)', lineHeight: 1.6 }}>{div.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGISTRATION FLOW */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="ec-eyebrow">
              <Layers size={13} />
              <span>ALUR SELEKSI</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Tahapan Pendaftaran Anggota' : 'Recruitment Process'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            {flow.map((item, i) => (
              <div key={i} className="ec-card" style={{ padding: 32, position: 'relative', borderTop: '4px solid var(--ec-emerald)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800, color: 'var(--ec-emerald)', marginBottom: 12 }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ec-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REGISTRATION FORM */}
      <section id="daftar-form" className="ec-section" style={{ background: 'var(--ec-sage-bg)' }}>
        <div className="ec-container" style={{ maxWidth: 760 }}>
          <div className="ec-card" style={{ padding: '48px 40px', background: '#fff' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h2 style={{ fontSize: 26, color: 'var(--ec-deep-green)', marginBottom: 12 }}>
                  {lang === 'id' ? 'Formulir Berhasil Dikirim!' : 'Application Submitted Successfully!'}
                </h2>
                <p style={{ fontSize: 15, color: 'var(--ec-slate)', lineHeight: 1.7, marginBottom: 24 }}>
                  {lang === 'id'
                    ? `Terima kasih, ${formData.name}. Data pendaftaran Anda untuk divisi ${formData.division} telah tersimpan di sesi pratinjau. Tim rekrutmen EC akan menghubungi Anda untuk tahap wawancara santai.`
                    : `Thank you, ${formData.name}. Your application for ${formData.division} has been recorded. Our team will contact you for the casual interview stage.`}
                </p>
                <button
                  type="button"
                  className="ec-btn ec-btn-secondary"
                  onClick={() => setFormSubmitted(false)}
                >
                  {lang === 'id' ? 'Kirim Pendaftaran Lain' : 'Submit Another Form'}
                </button>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <div className="ec-eyebrow" style={{ margin: '0 auto 12px' }}>
                    <span>{lang === 'id' ? 'FORMULIR PENDAFTARAN' : 'REGISTRATION FORM'}</span>
                  </div>
                  <h2 style={{ fontSize: 26, color: 'var(--ec-deep-green)' }}>
                    {lang === 'id' ? 'Formulir Rekrutmen Anggota Baru' : 'New Member Registration Form'}
                  </h2>
                  <p style={{ fontSize: 14, color: 'var(--ec-muted)', marginTop: 6 }}>
                    {lang === 'id' ? 'Terbuka untuk seluruh mahasiswa aktif UNU Yogyakarta' : 'Open to all active students of UNU Yogyakarta'}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}</label>
                    <input
                      type="text"
                      name="name"
                      className="ec-input"
                      placeholder="Contoh: Siti Aisyah"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'NIM *' : 'Student ID *'}</label>
                      <input
                        type="text"
                        name="nim"
                        className="ec-input"
                        placeholder="Contoh: 24101234"
                        value={formData.nim}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'Fakultas / Prodi *' : 'Faculty / Major *'}</label>
                      <input
                        type="text"
                        name="faculty"
                        className="ec-input"
                        placeholder="Contoh: Manajemen / FBE"
                        value={formData.faculty}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'Email Aktif *' : 'Email *'}</label>
                      <input
                        type="email"
                        name="email"
                        className="ec-input"
                        placeholder="nama@unu-jogja.ac.id"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'Nomor WhatsApp *' : 'WhatsApp *'}</label>
                      <input
                        type="tel"
                        name="phone"
                        className="ec-input"
                        placeholder="081234567890"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Pilihan Divisi Minat *' : 'Preferred Division *'}</label>
                    <select
                      name="division"
                      className="ec-select"
                      value={formData.division}
                      onChange={handleInputChange}
                    >
                      <option value="Business Development">Business Development & Enterprises</option>
                      <option value="Creative & Media">Creative, Media & Production</option>
                      <option value="Event Organizer">Event Organizer & Operations</option>
                      <option value="Public Relations">Public Relations & Partnership</option>
                    </select>
                  </div>

                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Motivasi Bergabung' : 'Motivation to Join'}</label>
                    <textarea
                      name="motivation"
                      className="ec-textarea"
                      placeholder={lang === 'id' ? 'Ceritakan mengapa Anda tertarik bergabung dengan Entrepreneurs Club...' : 'Share what excites you about joining EC...'}
                      value={formData.motivation}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="ec-btn ec-btn-accent" style={{ width: '100%', padding: '14px', fontSize: 15, marginTop: 12 }}>
                    <span>{lang === 'id' ? 'Kirim Pendaftaran' : 'Submit Application'}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div className="ec-eyebrow">
              <HelpCircle size={13} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div>
            {recruitmentFaq.map((faq, idx) => {
              const q = lang === 'id' ? faq.question.id : faq.question.en;
              const a = lang === 'id' ? faq.answer.id : faq.answer.en;
              const isOpen = activeFaq === idx;

              return (
                <div key={idx} className="ec-accordion-item">
                  <button
                    type="button"
                    className="ec-accordion-btn"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="ec-accordion-content">
                      {a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
