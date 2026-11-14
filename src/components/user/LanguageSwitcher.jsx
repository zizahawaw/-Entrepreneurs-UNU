import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { IndonesiaFlag, UKFlag } from '../common/Flags';
import { ChevronDown, Check } from 'lucide-react';

const LanguageSwitcher = () => {
  const { lang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (selectedLang) => {
    setLanguage(selectedLang);
    setIsOpen(false);
  };

  return (
    <div className="ec-flag-dropdown-wrapper" ref={dropdownRef}>
      {/* Active Flag Button with Chevron (matches uploaded design) */}
      <button
        type="button"
        className="ec-flag-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Pilih Bahasa"
      >
        {lang === 'id' ? <IndonesiaFlag /> : <UKFlag />}
        <ChevronDown size={14} color="#64748b" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="ec-flag-dropdown-menu">
          <button
            type="button"
            className={`ec-flag-option ${lang === 'id' ? 'active' : ''}`}
            onClick={() => selectLanguage('id')}
          >
            <IndonesiaFlag />
            <span style={{ flex: 1 }}>Bahasa Indonesia</span>
            {lang === 'id' && <Check size={14} color="#059669" />}
          </button>
          <button
            type="button"
            className={`ec-flag-option ${lang === 'en' ? 'active' : ''}`}
            onClick={() => selectLanguage('en')}
          >
            <UKFlag />
            <span style={{ flex: 1 }}>English</span>
            {lang === 'en' && <Check size={14} color="#059669" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
