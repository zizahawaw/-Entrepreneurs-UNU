import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { achievementsData, galleryData } from '../../data/ecData';
import {
  Award,
  Compass
} from 'lucide-react';

const Achievement = () => {
  const { lang } = useLanguage();

  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { key: 'all', label: lang === 'id' ? 'Semua Capaian' : 'All Achievements' },
    { key: 'awards', label: lang === 'id' ? 'Penghargaan & Kemitraan' : 'Awards & Honors' },
    { key: 'works', label: lang === 'id' ? 'Karya & Proyek Nyata' : 'Projects & Works' }
  ];

  const filtered = achievementsData.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'awards') return item.category === 'Achievements';
    if (activeTab === 'works') return item.category === 'Works & Creations';
    return true;
  });

  return (
    <div>
      {/* 1. HERO ACHIEVEMENT */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
            <Award size={14} />
            <span>{lang === 'id' ? 'PENCAPAIAN & KARYA MAHASISWA' : 'ACHIEVEMENTS & STUDENT WORKS'}</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {lang === 'id'
              ? 'Dedikasi, Karya Nyata & Rekam Prestasi'
              : 'Dedication, Real Works & Achievements'}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {lang === 'id'
              ? 'Merekam jejak langkah Entrepreneurs Club UNU Yogyakarta dalam meluncurkan unit bisnis produktif, kerja sama strategis, dan kontribusi nyata civitas akademika.'
              : 'Chronicle of Entrepreneurs Club UNU Yogyakarta in launching enterprise units, strategic collaborations, and contributions to our campus community.'}
          </p>
        </div>
      </section>

      {/* 2. ACHIEVEMENTS LIST & FILTER */}
      <section className="ec-section" style={{ background: 'var(--ec-white)', paddingTop: 48 }}>
        <div className="ec-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 style={{ fontSize: 24, color: 'var(--ec-deep-green)', marginBottom: 6 }}>
                {lang === 'id' ? 'Daftar Prestasi & Karya Terverifikasi' : 'Verified Works & Recognition'}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ec-muted)' }}>
                {lang === 'id' ? 'Data dokumentasi resmi kegiatan & luaran organisasi' : 'Official documentation and organizational outcomes'}
              </p>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: 8, background: 'var(--ec-sage-surface)', padding: 4, borderRadius: 'var(--radius-full)' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`ec-lang-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                  style={{ padding: '8px 18px', fontSize: 13 }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {filtered.map((item) => {
              const title = lang === 'id' ? item.title.id : item.title.en;
              const desc = lang === 'id' ? item.desc.id : item.desc.en;

              return (
                <div key={item.id} className="ec-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                    <img src={item.image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(7, 46, 37, 0.85)', backdropFilter: 'blur(8px)', color: '#34d399', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 0 }}>
                      {item.category}
                    </span>
                    <span style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255, 255, 255, 0.95)', color: 'var(--ec-deep-green)', fontSize: 12, fontWeight: 800, padding: '4px 10px', borderRadius: 0 }}>
                      {item.year}
                    </span>
                  </div>

                  <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 12, lineHeight: 1.35 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--ec-slate)', lineHeight: 1.7, flex: 1 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DOCUMENTATION GALLERY */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div className="ec-eyebrow">
              <Compass size={13} />
              <span>GALERI REKAM JEJAK</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Galeri Dokumentasi Lapangan' : 'Field Work & Documentation Gallery'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {galleryData.map((item) => (
              <div key={item.id} style={{ borderRadius: 0, overflow: 'hidden', height: 220, position: 'relative', boxShadow: 'var(--shadow-sm)' }}>
                <img src={item.image} alt="Galeri EC" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, insetInline: 0, background: 'linear-gradient(0deg, rgba(7, 46, 37, 0.92) 0%, transparent 100%)', padding: 16, color: '#fff' }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{lang === 'id' ? item.title.id : item.title.en}</div>
                  <div style={{ fontSize: 12, color: '#34d399' }}>{item.category} • {item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievement;
