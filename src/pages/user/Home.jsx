import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import {
  eventsData,
  programsData,
  productsData,
  newsData,
  achievementsData,
  galleryData,
  partnersData
} from '../../data/ecData';
import HeroSection from '../../components/user/HeroSection';
import { InstagramIcon, YoutubeIcon, TiktokIcon } from '../../components/common/Icons';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Play,
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
  Users,
  Compass,
  Briefcase,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeAchTab, setActiveAchTab] = useState('all');
  const [podcastModalOpen, setPodcastModalOpen] = useState(false);

  // Filtered achievements
  const displayedAchievements = achievementsData.filter((item) => {
    if (activeAchTab === 'all') return true;
    if (activeAchTab === 'awards') return item.category === 'Achievements';
    if (activeAchTab === 'works') return item.category === 'Works & Creations';
    return true;
  });

  return (
    <div>
      {/* 1. HERO SECTION — SPLIT LAYOUT */}
      <HeroSection />

      {/* 4. EC STATISTICS STRIP */}
      <div className="ec-container">
        <div className="ec-stats-strip">
          <div className="ec-stats-grid">
            <div className="ec-stat-item">
              <div className="ec-stat-number">{t.stats.members}</div>
              <div className="ec-stat-label">{t.stats.membersLabel}</div>
            </div>
            <div className="ec-stat-item">
              <div className="ec-stat-number">{t.stats.programs}</div>
              <div className="ec-stat-label">{t.stats.programsLabel}</div>
            </div>
            <div className="ec-stat-item">
              <div className="ec-stat-number">{t.stats.events}</div>
              <div className="ec-stat-label">{t.stats.eventsLabel}</div>
            </div>
            <div className="ec-stat-item">
              <div className="ec-stat-number">{t.stats.partners}</div>
              <div className="ec-stat-label">{t.stats.partnersLabel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EVENT UPDATE */}
      <section className="ec-section" style={{ paddingTop: 0 }}>
        <div className="ec-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="ec-eyebrow">
                <Calendar size={13} />
                <span>{t.eventUpdate.badge}</span>
              </div>
              <h2 className="ec-section-title">{t.eventUpdate.title}</h2>
              <p className="ec-section-desc">{t.eventUpdate.subtitle}</p>
            </div>
            <Link to="/event" className="ec-btn ec-btn-secondary">
              <span>{t.eventUpdate.viewAll}</span>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {eventsData.slice(0, 3).map((item) => {
              const title = lang === 'id' ? item.title.id : item.title.en;
              const summary = lang === 'id' ? item.summary.id : item.summary.en;
              const statusText = lang === 'id' ? item.statusLabel.id : item.statusLabel.en;

              return (
                <div key={item.id} className="ec-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', height: 210, overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(7, 46, 37, 0.85)', backdropFilter: 'blur(8px)', color: '#34d399', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 0 }}>
                      {item.category}
                    </div>
                    <div style={{ position: 'absolute', top: 12, right: 12, background: item.openRegistration ? 'rgba(16, 185, 129, 0.95)' : 'rgba(249, 115, 22, 0.95)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 0 }}>
                      {statusText}
                    </div>
                  </div>

                  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: 'var(--ec-muted)', marginBottom: 10, flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        <Calendar size={14} color="#059669" /> {item.date}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        <Clock size={14} color="#059669" /> {item.time}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 8, lineHeight: 1.3 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: 'var(--ec-slate)', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                      {summary}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--ec-muted)', marginBottom: 20 }}>
                      <MapPin size={14} color="#ea580c" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.location}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--ec-border)' }}>
                      <Link to={`/event/${item.slug}`} className="ec-btn ec-btn-secondary" style={{ padding: '8px 16px', fontSize: 13 }}>
                        <span>{t.eventUpdate.viewEvent}</span>
                      </Link>
                      {item.openRegistration && (
                        <Link to={`/event/${item.slug}/daftar`} className="ec-btn ec-btn-accent" style={{ padding: '8px 16px', fontSize: 13 }}>
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

      {/* 3. RECRUITMENT BANNER */}
      <section style={{ padding: '24px 0 64px' }}>
        <div className="ec-container">
          <div className="ec-recruitment-banner">
            <div className="ec-recruitment-info">
              <div className="ec-recruitment-status-tag">
                <span className="ec-pulse-dot"></span>
                <span>{t.recruitmentBanner.status}</span>
              </div>
              <h3>{t.recruitmentBanner.headline}</h3>
              <p>{t.recruitmentBanner.description}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link to="/rekrutmen" className="ec-btn ec-btn-accent" style={{ padding: '16px 32px', fontSize: 16 }}>
                <span>{t.recruitmentBanner.cta}</span>
              </Link>
              <Link to="/rekrutmen" style={{ textAlign: 'center', fontSize: 13, color: '#34d399', fontWeight: 600, textDecoration: 'underline' }}>
                {t.recruitmentBanner.altCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT EC PREVIEW */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="ec-eyebrow" style={{ letterSpacing: '0.12em', fontWeight: 800 }}>
                <span>ENTREPRENEURS CLUB</span>
              </div>
              <h2 className="ec-section-title" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', marginBottom: 12 }}>
                THE ENTREPRENEURIAL ECOSYSTEM
              </h2>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ec-emerald)', marginBottom: 16 }}>
                Empowering Students. Building Businesses. Creating Impact.
              </div>
              <p className="ec-section-desc" style={{ marginBottom: 28, fontSize: 15.5, lineHeight: 1.75 }}>
                A platform connecting entrepreneurial talent, business opportunities, strategic partnerships, and impactful initiatives.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 0, background: 'var(--ec-sage-surface)', color: 'var(--ec-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, marginBottom: 2 }}>{t.aboutPreview.point1Title}</h4>
                    <p style={{ fontSize: 13, color: 'var(--ec-muted)' }}>{t.aboutPreview.point1Desc}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 0, background: 'var(--ec-sage-surface)', color: 'var(--ec-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, marginBottom: 2 }}>{t.aboutPreview.point2Title}</h4>
                    <p style={{ fontSize: 13, color: 'var(--ec-muted)' }}>{t.aboutPreview.point2Desc}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 0, background: 'var(--ec-sage-surface)', color: 'var(--ec-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, marginBottom: 2 }}>{t.aboutPreview.point3Title}</h4>
                    <p style={{ fontSize: 13, color: 'var(--ec-muted)' }}>{t.aboutPreview.point3Desc}</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="ec-btn ec-btn-primary" style={{ borderRadius: 0 }}>
                <span>{t.aboutPreview.learnMore}</span>
              </Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--ec-border-green)' }}>
                <img
                  src="/images/unu-leader.jpg"
                  alt="Entrepreneurs Club UNU Yogyakarta"
                  style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: -16, left: 24, background: 'var(--ec-forest)', color: '#fff', padding: '14px 22px', borderRadius: 0, boxShadow: 'var(--shadow-md)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 800, color: '#34d399' }}>100% Student-Driven</div>
                <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.8)' }}>Universitas Nahdlatul Ulama Yogyakarta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE STORY BEHIND EC — FEATURED PODCAST SHOWCASE */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="ec-eyebrow">
              <span>{t.story.eyebrow}</span>
            </div>
            <h2 className="ec-section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>{t.story.headline}</h2>
            <p className="ec-section-desc" style={{ margin: '0 auto' }}>{t.story.description}</p>
          </div>

          <div className="ec-podcast-card" style={{ borderRadius: 0 }}>
            <div className="ec-podcast-visual" style={{ borderRadius: 0 }}>
              <img
                src="/images/podcast.jpg"
                alt="EC Podcast Episode - The Story Behind Entrepreneurs Club"
                className="ec-podcast-img"
              />
              <div className="ec-podcast-overlay">
                <button
                  type="button"
                  className="ec-podcast-play-btn"
                  onClick={() => setPodcastModalOpen(true)}
                  aria-label="Play Podcast"
                >
                  <Play size={28} fill="currentColor" style={{ marginLeft: 4 }} />
                </button>
              </div>
            </div>

            <div className="ec-podcast-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#ea580c', border: '1px solid rgba(249, 115, 22, 0.25)', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>
                  {t.story.podcastLabel}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ec-muted)' }}>
                  {t.story.podcastSubtitle}
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--ec-deep-green)', marginBottom: 14 }}>
                {t.story.episodeTitle}
              </h3>

              <p style={{ fontSize: 14.5, color: 'var(--ec-slate)', lineHeight: 1.7, marginBottom: 28 }}>
                {t.story.episodeDesc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setPodcastModalOpen(true)}
                  className="ec-btn ec-btn-accent"
                >
                  <Play size={16} fill="currentColor" />
                  <span>{t.story.watchPodcast}</span>
                </button>
                <a
                  href="https://youtu.be/ddmxaX9FHyE?si=-7vd_Xf4D5B6Xtab"
                  target="_blank"
                  rel="noreferrer"
                  className="ec-btn ec-btn-secondary"
                >
                  <span>{lang === 'id' ? 'Buka di YouTube' : 'Open in YouTube'}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast YouTube Video Modal */}
      {podcastModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(7, 46, 37, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', maxWidth: 760, width: '100%', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--ec-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--ec-deep-green)', fontSize: 16 }}>
                EC Official Podcast • UNU Yogyakarta
              </div>
              <button
                type="button"
                onClick={() => setPodcastModalOpen(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 20, color: 'var(--ec-muted)' }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ width: '100%', aspectRatio: '16 / 9', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#000', marginBottom: 16 }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ddmxaX9FHyE?autoplay=1"
                  title="EC Podcast - The Story Behind Entrepreneurs Club"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <a
                  href="https://youtu.be/ddmxaX9FHyE?si=-7vd_Xf4D5B6Xtab"
                  target="_blank"
                  rel="noreferrer"
                  className="ec-btn ec-btn-accent"
                  style={{ padding: '8px 16px', fontSize: 13 }}
                >
                  <span>Buka Langsung di YouTube</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  type="button"
                  className="ec-btn ec-btn-secondary"
                  onClick={() => setPodcastModalOpen(false)}
                  style={{ padding: '8px 16px', fontSize: 13 }}
                >
                  {t.common.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. FEATURED PROGRAMS (6 PILAR) */}
      <section className="ec-section" style={{ background: 'var(--ec-sage-surface)' }}>
        <div className="ec-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="ec-eyebrow">
                <Briefcase size={13} />
                <span>{t.featuredPrograms.eyebrow}</span>
              </div>
              <h2 className="ec-section-title">{t.featuredPrograms.headline}</h2>
              <p className="ec-section-desc">{t.featuredPrograms.subtitle}</p>
            </div>
            <Link to="/program" className="ec-btn ec-btn-secondary">
              <span>{t.featuredPrograms.viewAll}</span>
            </Link>
          </div>

          <div className="ec-programs-grid">
            {programsData.map((prog) => {
              const name = lang === 'id' ? prog.name : prog.nameEn;
              const desc = lang === 'id' ? prog.desc : prog.descEn;
              const cat = lang === 'id' ? prog.category : prog.categoryEn;

              return (
                <div key={prog.id} className="ec-program-card">
                  <div className="ec-program-media">
                    <img src={prog.image} alt={name} className="ec-program-img" />
                    <span className="ec-program-badge">{cat}</span>
                    <span className="ec-program-num">{prog.number}</span>
                  </div>
                  <div className="ec-program-body">
                    <h3 className="ec-program-title">{name}</h3>
                    <p className="ec-program-desc">{desc}</p>
                    <Link to={`/program#${prog.id}`} className="ec-program-link">
                      <span>{t.featuredPrograms.explore}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FEATURED PRODUCTS */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="ec-eyebrow">
                <ShoppingBag size={13} />
                <span>{t.featuredProducts.eyebrow}</span>
              </div>
              <h2 className="ec-section-title">{t.featuredProducts.headline}</h2>
              <p className="ec-section-desc">{t.featuredProducts.subtitle}</p>
            </div>
            <Link to="/produk" className="ec-btn ec-btn-secondary">
              <span>{t.featuredProducts.viewAll}</span>
            </Link>
          </div>

          <div className="ec-products-grid">
            {productsData.slice(0, 3).map((prod) => {
              const name = lang === 'id' ? prod.name : prod.nameEn;
              const desc = lang === 'id' ? prod.desc : prod.descEn;

              return (
                <div key={prod.id} className="ec-product-card">
                  <div className="ec-product-thumb">
                    <img src={prod.image} alt={name} className="ec-product-img" />
                    <span className="ec-product-cat-pill">{prod.category}</span>
                  </div>
                  <div className="ec-product-info">
                    <h3 className="ec-product-name">{name}</h3>
                    <p className="ec-product-desc">{desc}</p>
                    <div className="ec-product-footer">
                      <div>
                        <div style={{ fontSize: 11, color: 'var(--ec-muted)' }}>{t.featuredProducts.price}</div>
                        <div className="ec-product-price">{prod.price}</div>
                      </div>
                      <a
                        href={`https://wa.me/6283824695561?text=${encodeURIComponent(`Halo Entrepreneurs Club UNU Yogyakarta, saya ingin memesan ${name}`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="ec-btn ec-btn-accent"
                        style={{ padding: '8px 16px', fontSize: 12.5 }}
                      >
                        <span>{t.featuredProducts.orderWA}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. OUR JOURNEY, OUR STORIES (EDITORIAL GALLERY) */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="ec-eyebrow">
              <Compass size={13} />
              <span>{t.journey.eyebrow}</span>
            </div>
            <h2 className="ec-section-title">{t.journey.headline}</h2>
            <p className="ec-section-desc" style={{ margin: '0 auto' }}>{t.journey.subtitle}</p>
          </div>

          <div className="ec-gallery-grid">
            {galleryData.map((item) => {
              const title = lang === 'id' ? item.title.id : item.title.en;
              return (
                <div key={item.id} className="ec-gallery-item">
                  <img src={item.image} alt={title} className="ec-gallery-img" />
                  <div className="ec-gallery-caption">
                    <div className="ec-gallery-caption-title">{title}</div>
                    <div className="ec-gallery-caption-meta">{item.category} • {item.year}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. LATEST NEWS */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="ec-eyebrow">
                <span>{t.news.eyebrow}</span>
              </div>
              <h2 className="ec-section-title">{t.news.headline}</h2>
              <p className="ec-section-desc">{t.news.subtitle}</p>
            </div>
            <Link to="/berita" className="ec-btn ec-btn-secondary">
              <span>{t.news.viewAll}</span>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {newsData.map((news) => {
              const title = lang === 'id' ? news.title.id : news.title.en;
              const summary = lang === 'id' ? news.summary.id : news.summary.en;

              return (
                <article key={news.id} className="ec-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                    <img src={news.thumbnail} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(7, 46, 37, 0.85)', backdropFilter: 'blur(8px)', color: '#34d399', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 0 }}>
                      {news.category}
                    </span>
                  </div>
                  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: 12, color: 'var(--ec-muted)', marginBottom: 8 }}>{news.date} • {news.author}</div>
                    <h3 style={{ fontSize: 17, color: 'var(--ec-deep-green)', marginBottom: 10, lineHeight: 1.35 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: 'var(--ec-muted)', lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
                      {summary}
                    </p>
                    <Link to={`/berita/${news.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: 'var(--ec-emerald)' }}>
                      <span>{t.news.readMore}</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. ACHIEVEMENTS & WORKS */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="ec-eyebrow">
                <span>{t.achievements.eyebrow}</span>
              </div>
              <h2 className="ec-section-title">{t.achievements.headline}</h2>
              <p className="ec-section-desc">{t.achievements.subtitle}</p>
            </div>
            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: 8, background: 'var(--ec-white)', padding: 4, borderRadius: 'var(--radius-full)', border: '1px solid var(--ec-border)' }}>
              <button
                type="button"
                className={`ec-lang-btn ${activeAchTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveAchTab('all')}
              >
                {t.achievements.tabAll}
              </button>
              <button
                type="button"
                className={`ec-lang-btn ${activeAchTab === 'awards' ? 'active' : ''}`}
                onClick={() => setActiveAchTab('awards')}
              >
                {t.achievements.tabAwards}
              </button>
              <button
                type="button"
                className={`ec-lang-btn ${activeAchTab === 'works' ? 'active' : ''}`}
                onClick={() => setActiveAchTab('works')}
              >
                {t.achievements.tabWorks}
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {displayedAchievements.map((item) => {
              const title = lang === 'id' ? item.title.id : item.title.en;
              const desc = lang === 'id' ? item.desc.id : item.desc.en;

              return (
                <div key={item.id} className="ec-card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--ec-emerald)', background: 'rgba(5, 150, 105, 0.1)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ec-muted)' }}>{item.year}</span>
                  </div>
                  <h3 style={{ fontSize: 16.5, color: 'var(--ec-deep-green)', marginBottom: 8, lineHeight: 1.35 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: 'var(--ec-slate)', lineHeight: 1.6, flex: 1 }}>
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/achievement" className="ec-btn ec-btn-secondary">
              <span>{t.achievements.viewAll}</span>
              <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. OUR PARTNERS */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="ec-eyebrow">
              <Users size={13} />
              <span>{t.partners.eyebrow}</span>
            </div>
            <h2 className="ec-section-title">{t.partners.headline}</h2>
            <p className="ec-section-desc" style={{ margin: '0 auto 24px' }}>{t.partners.subtitle}</p>
            <Link to="/mitra" className="ec-btn ec-btn-primary">
              <span>{t.partners.cta}</span>
            </Link>
          </div>

          <div className="ec-partners-grid">
            {partnersData.map((partner) => (
              <div key={partner.id} className="ec-partner-box">
                <div className="ec-partner-logo-placeholder">
                  {partner.logoText}
                </div>
                <div className="ec-partner-name">{partner.name}</div>
                <div className="ec-partner-type">{lang === 'id' ? partner.type : partner.typeEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. JOIN OUR COMMUNITY CTA */}
      <section style={{ padding: '80px 0 96px', background: 'radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.1) 0%, transparent 60%), var(--ec-sage-bg)' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
              <span>BECOME PART OF EC</span>
            </div>
            <h2 className="ec-section-title" style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', marginBottom: 16 }}>
              {t.joinCommunity.headline}
            </h2>
            <p className="ec-section-desc" style={{ margin: '0 auto 32px' }}>
              {t.joinCommunity.description}
            </p>
            <Link to="/rekrutmen" className="ec-btn ec-btn-accent" style={{ padding: '16px 36px', fontSize: 16, borderRadius: '8px' }}>
              <span>{t.joinCommunity.cta}</span>
              <ArrowRight size={16} />
            </Link>
            <div style={{ fontSize: 13, color: 'var(--ec-muted)', marginTop: 16, marginBottom: 28 }}>
              {t.joinCommunity.subtext}
            </div>

            {/* Social Media Channels (Sleek Minimalist Floating Circles) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@EntrepreneursClubUNUJogja"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: 'rgba(220, 38, 38, 0.08)',
                  color: '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#dc2626'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(220, 38, 38, 0.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(220, 38, 38, 0.08)'; e.currentTarget.style.color = '#dc2626'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)'; }}
                title="YouTube @EntrepreneursClubUNUJogja"
              >
                <YoutubeIcon size={22} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/unupreneurs.club/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: 'rgba(225, 29, 72, 0.08)',
                  color: '#e11d48',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'linear-gradient(135deg, #f43f5e 0%, #d946ef 100%)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(225, 29, 72, 0.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(225, 29, 72, 0.08)'; e.currentTarget.style.color = '#e11d48'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)'; }}
                title="Instagram @unupreneurs.club"
              >
                <InstagramIcon size={22} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@unupreneurs.club"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.08)',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#0f172a'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 23, 42, 0.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(15, 23, 42, 0.08)'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.04)'; }}
                title="TikTok @unupreneurs.club"
              >
                <TiktokIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
