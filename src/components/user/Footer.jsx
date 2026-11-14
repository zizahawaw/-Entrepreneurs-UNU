import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { MapPin, Mail, Phone } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, TiktokIcon } from '../common/Icons';

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="ec-footer">
      <div className="ec-container">
        <div className="ec-footer-grid">
          {/* Brand Col */}
          <div className="ec-footer-brand">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <img src="/logo-ec.png" alt="Entrepreneurs Club UNU Logo" style={{ height: 48, width: 'auto' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  ENTREPRENEURS CLUB
                </div>
                <div style={{ fontSize: 11, color: '#34d399', fontWeight: 600 }}>
                  Universitas Nahdlatul Ulama Yogyakarta
                </div>
              </div>
            </Link>
            <p>{t.footer.desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
              <a
                href="https://www.youtube.com/@EntrepreneursClubUNUJogja"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#dc2626'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                title="YouTube @EntrepreneursClubUNUJogja"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/unupreneurs.club/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e11d48'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                title="Instagram @unupreneurs.club"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@unupreneurs.club"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#0f172a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                title="TikTok @unupreneurs.club"
              >
                <TiktokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="ec-footer-col">
            <h4>{t.footer.quickLinks}</h4>
            <ul className="ec-footer-links">
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/program">{t.nav.programs}</Link></li>
              <li><Link to="/event">{t.nav.activities}</Link></li>
              <li><Link to="/produk">{t.nav.catalog}</Link></li>
              <li><Link to="/berita">{t.nav.news}</Link></li>
              <li><Link to="/rekrutmen">{t.nav.joinUs}</Link></li>
            </ul>
          </div>

          {/* Programs Col */}
          <div className="ec-footer-col">
            <h4>{t.footer.programs}</h4>
            <ul className="ec-footer-links">
              <li><Link to="/program#konsinyasi">Konsinyasi & Kopma</Link></li>
              <li><Link to="/program#affiliate">Affiliate Marketing</Link></li>
              <li><Link to="/program#sky-garden">Sky Garden Bites Café</Link></li>
              <li><Link to="/program#kids-playdate">EO Kids-Playdate</Link></li>
              <li><Link to="/program#merchandise">Merchandise Kampus</Link></li>
              <li><Link to="/program#konveksi">Konveksi & Sablon</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="ec-footer-col">
            <h4>{t.footer.contactUs}</h4>
            <div className="ec-footer-contact">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={18} style={{ color: '#34d399', flexShrink: 0, marginTop: 3 }} />
                <span>{t.footer.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={16} style={{ color: '#34d399', flexShrink: 0 }} />
                <a href={`mailto:${t.footer.email}`} style={{ color: '#cbd5e1' }}>{t.footer.email}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={16} style={{ color: '#34d399', flexShrink: 0 }} />
                <a href="https://wa.me/6283824695561" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1' }}>
                  {t.footer.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="ec-footer-bottom">
          <div>
            © {new Date().getFullYear()} Entrepreneurs Club UNU Yogyakarta. {t.footer.allRights}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b' }}>
            <span>Built with passion & spirit of youth entrepreneurship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
