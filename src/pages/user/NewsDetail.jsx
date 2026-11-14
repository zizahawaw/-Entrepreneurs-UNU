import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { newsData } from '../../data/ecData';
import {
  Calendar,
  ArrowLeft,
  Share2,
  Tag
} from 'lucide-react';

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const article = newsData.find((n) => n.slug === slug) || newsData[0];
  const relatedArticles = newsData.filter((n) => n.slug !== article.slug);

  const title = lang === 'id' ? article.title.id : article.title.en;
  const summary = lang === 'id' ? article.summary.id : article.summary.en;

  return (
    <div style={{ background: 'var(--ec-sage-bg)', minHeight: '100vh', padding: '48px 0 96px' }}>
      <div className="ec-container" style={{ maxWidth: 880 }}>
        {/* Back Link */}
        <div style={{ marginBottom: 28 }}>
          <button
            type="button"
            onClick={() => navigate('/berita')}
            className="ec-btn ec-btn-secondary"
            style={{ padding: '8px 18px', fontSize: 13 }}
          >
            <ArrowLeft size={14} />
            <span>{lang === 'id' ? 'Kembali ke Daftar Berita' : 'Back to News List'}</span>
          </button>
        </div>

        {/* Article Body Container */}
        <article className="ec-card" style={{ padding: '48px 48px', background: '#fff', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#ea580c', background: 'rgba(249, 115, 22, 0.1)', padding: '5px 12px', borderRadius: 'var(--radius-full)' }}>
              {article.category}
            </span>
            <span style={{ fontSize: 13, color: 'var(--ec-muted)' }}>
              <Calendar size={13} style={{ display: 'inline', marginRight: 4 }} />
              {article.date}
            </span>
            <span style={{ fontSize: 13, color: 'var(--ec-muted)' }}>• {article.author}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(26px, 3.4vw, 38px)', color: 'var(--ec-deep-green)', marginBottom: 24, lineHeight: 1.25 }}>
            {title}
          </h1>

          <div style={{ borderRadius: 0, overflow: 'hidden', height: 400, marginBottom: 32 }}>
            <img src={article.thumbnail} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ fontSize: 17, color: 'var(--ec-forest)', fontWeight: 600, lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic', borderLeft: '4px solid var(--ec-emerald)', paddingLeft: 16 }}>
            {summary}
          </div>

          <div style={{ fontSize: 16, color: 'var(--ec-slate)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
            {article.content}
          </div>

          {/* Article Footer & Share */}
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--ec-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ec-muted)' }}>
              <Tag size={15} color="#059669" />
              <span>Entrepreneurs Club • UNU Yogyakarta • Bisnis Kampus</span>
            </div>
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert(lang === 'id' ? 'Tautan artikel disalin!' : 'Link copied to clipboard!');
                }
              }}
              className="ec-btn ec-btn-secondary"
              style={{ padding: '8px 16px', fontSize: 13 }}
            >
              <Share2 size={14} />
              <span>{lang === 'id' ? 'Bagikan Artikel' : 'Share Article'}</span>
            </button>
          </div>
        </article>

        {/* Related Articles */}
        <div>
          <h3 style={{ fontSize: 22, color: 'var(--ec-deep-green)', marginBottom: 24 }}>
            {lang === 'id' ? 'Berita Terkait Lainnya' : 'Related Articles'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {relatedArticles.map((rel) => (
              <div key={rel.id} className="ec-card" style={{ padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ec-emerald)', marginBottom: 6 }}>{rel.category}</div>
                <h4 style={{ fontSize: 16, color: 'var(--ec-deep-green)', marginBottom: 8, lineHeight: 1.3 }}>
                  <Link to={`/berita/${rel.slug}`}>{lang === 'id' ? rel.title.id : rel.title.en}</Link>
                </h4>
                <div style={{ fontSize: 12, color: 'var(--ec-muted)' }}>{rel.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
