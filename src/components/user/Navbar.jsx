import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t.home },
    { to: '/about', label: t.about },
    { to: '/program', label: t.programs },
    { to: '/event', label: t.activities },
    { to: '/produk', label: t.catalog },
    { to: '/berita', label: t.news },
    { to: '/achievement', label: t.achievements },
    { to: '/mitra', label: t.partners }
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="ec-navbar">
      <div className="ec-container ec-navbar-inner">
        {/* Brand: Cukup Logo Saja Sesuai Permintaan User */}
        <Link to="/" className="ec-brand" onClick={closeMenu} title="Entrepreneurs Club UNU Yogyakarta">
          <img src="/logo-ec.png" alt="Entrepreneurs Club UNU Logo" className="ec-brand-logo" />
        </Link>

        {/* Desktop Nav Links — Beranda & Semua Menu Sejajar Rapi */}
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="ec-nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to} style={{ display: 'flex', alignItems: 'center' }}>
                  <Link
                    to={link.to}
                    className={`ec-nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: Flag Dropdown Bilingual Switcher + Join Us CTA + Mobile Toggle */}
        <div className="ec-nav-actions">
          {/* Flag Dropdown Bilingual Switcher */}
          <LanguageSwitcher />

          {/* Join Us CTA */}
          <Link to="/rekrutmen" className="ec-btn ec-btn-accent" style={{ padding: '9px 18px', fontSize: '13.5px' }}>
            <span>{t.joinUs}</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="ec-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="ec-mobile-drawer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ec-muted)' }}>NAVIGASI MENU</span>
            <LanguageSwitcher />
          </div>

          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`ec-mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} />
              </Link>
            );
          })}

          <Link
            to="/rekrutmen"
            className="ec-btn ec-btn-accent"
            style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            <span>{t.joinUs} (Open Recruitment)</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
