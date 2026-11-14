import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { programsData } from '../../data/ecData';
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

const Program = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: lang === 'id' ? 'Semua Kategori' : 'All Categories' },
    { key: 'retail', label: lang === 'id' ? 'Bisnis & Retail' : 'Retail & Distribution' },
    { key: 'marketing', label: lang === 'id' ? 'Digital Marketing' : 'Digital Marketing' },
    { key: 'fnb', label: lang === 'id' ? 'F&B & Café' : 'F&B & Hospitality' },
    { key: 'event', label: lang === 'id' ? 'Event Organizer' : 'Event Organizer' },
    { key: 'creative', label: lang === 'id' ? 'Industri Kreatif' : 'Creative Industry' }
  ];

  const filteredPrograms = programsData.filter((prog) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'retail') return prog.category.includes('Retail');
    if (selectedCategory === 'marketing') return prog.category.includes('Marketing');
    if (selectedCategory === 'fnb') return prog.category.includes('F&B');
    if (selectedCategory === 'event') return prog.category.includes('Event');
    if (selectedCategory === 'creative') return prog.category.includes('Creative') || prog.category.includes('Manufaktur');
    return true;
  });

  return (
    <div>
      {/* 1. HERO PROGRAM */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
            <Briefcase size={14} />
            <span>{lang === 'id' ? 'PROGRAM KERJA & UNIT BISNIS' : 'WORK PROGRAMS & BUSINESS UNITS'}</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {lang === 'id'
              ? '6 Pilar Program Unggulan Berkelanjutan'
              : '6 Sustainable Core Program Pillars'}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {lang === 'id'
              ? 'Dari ideasi kreatif hingga eksekusi pasar nyata: konsinyasi ritel, mentoring pemasaran digital, pengelolaan café, edutainment anak, hingga lini merchandise & konveksi.'
              : 'From creative ideation to market realization: retail consignment, digital marketing mentoring, café management, kids edutainment, to merchandise & garment lines.'}
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION & FILTER */}
      <section className="ec-section" style={{ background: 'var(--ec-white)', paddingTop: 48 }}>
        <div className="ec-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 style={{ fontSize: 24, color: 'var(--ec-deep-green)', marginBottom: 6 }}>
                {lang === 'id' ? 'Daftar Unit & Program Kerja' : 'Program & Enterprise Units List'}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ec-muted)' }}>
                {lang === 'id'
                  ? `Menampilkan ${filteredPrograms.length} dari 6 program aktif`
                  : `Showing ${filteredPrograms.length} of 6 active programs`}
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  className={`ec-lang-btn ${selectedCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.key)}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    background: selectedCategory === cat.key ? 'var(--ec-forest)' : 'var(--ec-sage-surface)',
                    color: selectedCategory === cat.key ? '#fff' : 'var(--ec-slate)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Program Showcase List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {filteredPrograms.map((prog) => {
              const name = lang === 'id' ? prog.name : prog.nameEn;
              const desc = lang === 'id' ? prog.desc : prog.descEn;
              const cat = lang === 'id' ? prog.category : prog.categoryEn;

              return (
                <div
                  key={prog.id}
                  id={prog.id}
                  className="ec-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'relative', minHeight: 320 }}>
                    <img
                      src={prog.image}
                      alt={name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(7, 46, 37, 0.9)', backdropFilter: 'blur(8px)', color: '#34d399', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 'var(--radius-full)' }}>
                      {cat}
                    </div>
                    <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(249, 115, 22, 0.95)', color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 800, padding: '6px 12px', borderRadius: 'var(--radius-full)' }}>
                      {lang === 'id' ? 'Pilar' : 'Pillar'} #{prog.number}
                    </div>
                  </div>

                  <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: 26, color: 'var(--ec-deep-green)', marginBottom: 12 }}>
                      {name}
                    </h3>
                    <p style={{ fontSize: 15, color: 'var(--ec-slate)', lineHeight: 1.7, marginBottom: 24 }}>
                      {desc}
                    </p>

                    <div style={{ marginBottom: 24 }}>
                      <h4 style={{ fontSize: 14, fontWeight: 800, color: 'var(--ec-forest)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
                        {lang === 'id' ? 'Aktivitas Utama & Fokus:' : 'Key Activities & Focus:'}
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {prog.highlights.map((hl, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: 'var(--ec-muted)' }}>
                            <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ padding: '14px 18px', background: 'var(--ec-sage-bg)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--ec-emerald)', marginBottom: 24 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--ec-emerald)', textTransform: 'uppercase' }}>
                        {lang === 'id' ? 'Output & Capaian:' : 'Output & Outcome:'}
                      </div>
                      <div style={{ fontSize: 13.5, color: 'var(--ec-deep-green)', fontWeight: 600, marginTop: 2 }}>
                        {prog.output}
                      </div>
                    </div>

                    <div>
                      <Link to="/mitra" className="ec-btn ec-btn-primary" style={{ padding: '10px 20px', fontSize: 13.5 }}>
                        <MessageCircle size={15} />
                        <span>{lang === 'id' ? 'Ajukan Kolaborasi Program' : 'Propose Collaboration'}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA COLLABORATION */}
      <section style={{ padding: '72px 0', background: 'var(--ec-sage-bg)' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h3 style={{ fontSize: 28, color: 'var(--ec-deep-green)', marginBottom: 14 }}>
              {lang === 'id' ? 'Punya Ide atau Ingin Bermitra?' : 'Have an Idea or Want to Partner?'}
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ec-muted)', marginBottom: 28 }}>
              {lang === 'id'
                ? 'Kami membuka peluang kerja sama sponsorship, mentoring, maupun pengadaan barang dan jasa kreatif dengan organisasi Anda.'
                : 'We welcome collaboration across sponsorships, mentorship, and creative merchandise supply.'}
            </p>
            <Link to="/mitra" className="ec-btn ec-btn-accent" style={{ padding: '14px 28px' }}>
              <span>{t.partners.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
