import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { productsData } from '../../data/ecData';
import {
  ShoppingBag,
  Search,
  MessageCircle,
  X
} from 'lucide-react';

const ProductCatalog = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = [
    { key: 'all', label: lang === 'id' ? 'Semua Produk' : 'All Products' },
    { key: 'Merchandise', label: 'Merchandise' },
    { key: 'Konveksi', label: lang === 'id' ? 'Konveksi & Busana' : 'Apparel & Uniform' },
    { key: 'Konsinyasi', label: lang === 'id' ? 'Snack Konsinyasi' : 'Consignment Snacks' },
    { key: 'Sky Garden', label: 'Sky Garden Café' }
  ];

  // Filtering
  const filtered = productsData.filter((item) => {
    const name = lang === 'id' ? item.name : item.nameEn;
    const matchSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCat === 'all' || item.category === selectedCat;
    return matchSearch && matchCat;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === 'price-low') return a.priceNum - b.priceNum;
    if (sortOption === 'price-high') return b.priceNum - a.priceNum;
    return 0;
  });

  return (
    <div>
      {/* 1. HERO KATALOG */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
            <ShoppingBag size={14} />
            <span>KATALOG PRODUK & LAYANAN</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {lang === 'id'
              ? 'Katalog Wirausaha Mahasiswa UNU'
              : 'Student Ventures Catalog & Creative Services'}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {lang === 'id'
              ? 'Temukan aneka produk merchandise resmi, pesanan seragam konveksi, sajian Sky Garden café, dan produk konsinyasi koperasi.'
              : 'Explore official campus merchandise, custom apparel production, Sky Garden café items, and consignment goods.'}
          </p>
        </div>
      </section>

      {/* 2. SEARCH, CATEGORIES & PRODUCTS GRID */}
      <section className="ec-section" style={{ background: 'var(--ec-white)', paddingTop: 40 }}>
        <div className="ec-container">
          {/* Controls Bar: Search + Category + Sort */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              {/* Search Box */}
              <div style={{ position: 'relative', width: '100%', maxWidth: 380 }}>
                <Search size={18} color="var(--ec-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  className="ec-input"
                  style={{ paddingLeft: 42 }}
                  placeholder={lang === 'id' ? 'Cari nama produk...' : 'Search product name...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Sort Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 13, color: 'var(--ec-muted)', fontWeight: 600 }}>{lang === 'id' ? 'Urutkan:' : 'Sort by:'}</span>
                <select
                  className="ec-select"
                  style={{ width: 'auto', padding: '10px 16px' }}
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">{lang === 'id' ? 'Default / Rekomendasi' : 'Recommended'}</option>
                  <option value="price-low">{lang === 'id' ? 'Harga: Rendah ke Tinggi' : 'Price: Low to High'}</option>
                  <option value="price-high">{lang === 'id' ? 'Harga: Tinggi ke Rendah' : 'Price: High to Low'}</option>
                </select>
              </div>
            </div>

            {/* Category Pills */}
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

          {/* Product Grid */}
          {sorted.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--ec-muted)' }}>
              <ShoppingBag size={48} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
              <h3>{lang === 'id' ? 'Produk Tidak Ditemukan' : 'No Products Found'}</h3>
              <p>{lang === 'id' ? 'Coba ubah kata kunci pencarian atau kategori filter Anda.' : 'Try adjusting your search query or filter.'}</p>
            </div>
          ) : (
            <div className="ec-products-grid">
              {sorted.map((prod) => {
                const name = lang === 'id' ? prod.name : prod.nameEn;
                const desc = lang === 'id' ? prod.desc : prod.descEn;

                return (
                  <div key={prod.id} className="ec-product-card">
                    <div className="ec-product-thumb" onClick={() => setActiveModalProduct(prod)} style={{ cursor: 'pointer' }}>
                      <img src={prod.image} alt={name} className="ec-product-img" />
                      <span className="ec-product-cat-pill">{prod.category}</span>
                    </div>

                    <div className="ec-product-info">
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ec-emerald)', marginBottom: 4 }}>
                        {prod.status}
                      </div>
                      <h3 className="ec-product-name" onClick={() => setActiveModalProduct(prod)} style={{ cursor: 'pointer' }}>
                        {name}
                      </h3>
                      <p className="ec-product-desc">{desc}</p>

                      <div className="ec-product-footer">
                        <div>
                          <div style={{ fontSize: 11, color: 'var(--ec-muted)' }}>{t.featuredProducts.price}</div>
                          <div className="ec-product-price">{prod.price}</div>
                        </div>

                        <div style={{ display: 'flex', gap: 8 }}>
                          <button
                            type="button"
                            onClick={() => setActiveModalProduct(prod)}
                            className="ec-btn ec-btn-secondary"
                            style={{ padding: '8px 12px', fontSize: 12 }}
                          >
                            <span>{lang === 'id' ? 'Detail' : 'Details'}</span>
                          </button>
                          <a
                            href={`https://wa.me/6283824695561?text=${encodeURIComponent(lang === 'id' ? `Halo Entrepreneurs Club UNU Yogyakarta, saya ingin bertanya dan memesan produk ${name}` : `Hello Entrepreneurs Club UNU Yogyakarta, I would like to order product ${name}`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="ec-btn ec-btn-accent"
                            style={{ padding: '8px 14px', fontSize: 12 }}
                          >
                            <MessageCircle size={14} />
                            <span>{lang === 'id' ? 'Pesan' : 'Order'}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Product Quick-View Modal */}
      {activeModalProduct && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(7, 46, 37, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', maxWidth: 640, width: '100%', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--ec-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--ec-deep-green)', fontSize: 16 }}>
                {lang === 'id' ? 'Detail Produk' : 'Product Details'}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 20, color: 'var(--ec-muted)' }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ height: 260, borderRadius: 0, overflow: 'hidden', marginBottom: 20 }}>
                <img src={activeModalProduct.image} alt={activeModalProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ec-emerald)', background: 'rgba(5, 150, 105, 0.1)', padding: '4px 10px', borderRadius: 0 }}>
                    {activeModalProduct.category}
                  </span>
                  <h3 style={{ fontSize: 20, color: 'var(--ec-deep-green)', marginTop: 8 }}>
                    {lang === 'id' ? activeModalProduct.name : activeModalProduct.nameEn}
                  </h3>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 800, color: 'var(--ec-forest)' }}>
                  {activeModalProduct.price}
                </div>
              </div>
              <p style={{ fontSize: 14.5, color: 'var(--ec-slate)', lineHeight: 1.7, marginBottom: 24 }}>
                {lang === 'id' ? activeModalProduct.desc : activeModalProduct.descEn}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                <button
                  type="button"
                  className="ec-btn ec-btn-secondary"
                  onClick={() => setActiveModalProduct(null)}
                >
                  {lang === 'id' ? 'Tutup' : 'Close'}
                </button>
                <a
                  href={`https://wa.me/6283824695561?text=${encodeURIComponent(lang === 'id' ? `Halo Entrepreneurs Club UNU Yogyakarta, saya ingin memesan ${activeModalProduct.name}` : `Hello Entrepreneurs Club UNU Yogyakarta, I would like to order ${activeModalProduct.nameEn || activeModalProduct.name}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ec-btn ec-btn-accent"
                >
                  <MessageCircle size={15} />
                  <span>{lang === 'id' ? 'Pesan via WhatsApp' : 'Order via WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
