import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { newsData } from '../../data/ecData';
import {
  Calendar,
  ArrowRight,
  Search
} from 'lucide-react';

const News = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [
    { key: 'all', label: lang === 'id' ? 'Semua Berita' : 'All Articles' },
    { key: 'Kolaborasi', label: lang === 'id' ? 'Kolaborasi & Kemitraan' : 'Collaboration' },
    { key: 'Program', label: 'Program Bisnis' },
    { key: 'Kegiatan', label: lang === 'id' ? 'Event & Kegiatan' : 'Events' }
  ];

  const filtered = newsData.filter((item) => {
    const title = lang === 'id' ? item.title.id : item.title.en;
    const matchSearch = title.toLowerCase().includes(search.toLowerCase()) ||
                        item.summary.id.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat === 'all' || item.category === selectedCat;
    return matchSearch && matchCat;
  });

  const featured = newsData[0];

  return (
    <div>
      {/* 1. HERO NEWS */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
            <span>{lang === 'id' ? 'KABAR & ARTIKEL WIRAUSAHA' : 'NEWS & ARTICLES'}</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {lang === 'id'
              ? 'Wawasan, Kabar & Inspirasi Bisnis'
              : 'Insights, Updates & Entrepreneurial Stories'}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {lang === 'id'
              ? 'Ikuti perkembangan inisiatif wirausaha mahasiswa, sorotan kolaborasi strategis, dan tips praktis merintis bisnis dari kampus.'
              : 'Follow student venture developments, strategic partnership highlights, and practical tips on building businesses from campus.'}
          </p>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE */}
      {featured && (
        <section style={{ padding: '32px 0 48px', background: 'var(--ec-white)' }}>
          <div className="ec-container">
            <div style={{ marginBottom: 20, fontSize: 13, fontWeight: 800, color: 'var(--ec-forest)', letterSpacing: '0.08em' }}>
              ✦ {lang === 'id' ? 'BERITA UTAMA PILIHAN' : 'FEATURED EDITORIAL'}
            </div>

            <div
              className="ec-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: 360 }}>
                <img src={featured.thumbnail} alt={featured.title.id} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#ea580c', background: 'rgba(249, 115, 22, 0.1)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>
                    {featured.category}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--ec-muted)' }}>{featured.date}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: 'var(--ec-deep-green)', marginBottom: 14, lineHeight: 1.3 }}>
                  {lang === 'id' ? featured.title.id : featured.title.en}
                </h2>
                <p style={{ fontSize: 15, color: 'var(--ec-slate)', lineHeight: 1.7, marginBottom: 24 }}>
                  {lang === 'id' ? featured.summary.id : featured.summary.en}
                </p>
                <div>
                  <Link to={`/berita/${featured.slug}`} className="ec-btn ec-btn-primary">
                    <span>{t.news.readMore}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. NEWS LIST & FILTERS */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36, flexWrap: 'wrap', gap: 20 }}>
            {/* Search */}
            <div style={{ position: 'relative', width: '100%', maxWidth: 360 }}>
              <Search size={18} color="var(--ec-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="ec-input"
                style={{ paddingLeft: 42 }}
                placeholder={lang === 'id' ? 'Cari judul berita...' : 'Search articles...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {categories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className={`ec-lang-btn ${selectedCat === c.key ? 'active' : ''}`}
                  onClick={() => setSelectedCat(c.key)}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    background: selectedCat === c.key ? 'var(--ec-forest)' : 'var(--ec-sage-surface)',
                    color: selectedCat === c.key ? '#fff' : 'var(--ec-slate)'
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {filtered.map((item) => {
              const title = lang === 'id' ? item.title.id : item.title.en;
              const summary = lang === 'id' ? item.summary.id : item.summary.en;

              return (
                <article key={item.id} className="ec-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 210, position: 'relative', overflow: 'hidden' }}>
                    <img src={item.thumbnail} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(7, 46, 37, 0.85)', backdropFilter: 'blur(8px)', color: '#34d399', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 0 }}>
                      {item.category}
                    </span>
                  </div>

                  <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12.5, color: 'var(--ec-muted)', marginBottom: 10 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        <Calendar size={13} color="#059669" /> {item.date}
                      </span>
                      <span>•</span>
                      <span>{item.author}</span>
                    </div>

                    <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 10, lineHeight: 1.35 }}>
                      {title}
                    </h3>

                    <p style={{ fontSize: 14, color: 'var(--ec-slate)', lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
                      {summary}
                    </p>

                    <Link to={`/berita/${item.slug}`} className="ec-program-link" style={{ marginTop: 'auto' }}>
                      <span>{t.news.readMore}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
