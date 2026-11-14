import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { partnersData } from '../../data/ecData';
import {
  Users,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Award,
  Send
} from 'lucide-react';

const Partner = () => {
  const { lang } = useLanguage();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partnershipType: 'Sponsorship / Pendanaan',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      alert(lang === 'id' ? 'Mohon isi semua field wajib (*).' : 'Please fill all required fields (*).');
      return;
    }
    setFormSubmitted(true);
  };

  const benefits = [
    {
      title: lang === 'id' ? 'Akses Pasar & Komunitas Kampus' : 'Direct Campus & Youth Access',
      desc: lang === 'id' ? 'Menjangkau ribuan mahasiswa aktif UNU Yogyakarta dan jejaring ekosistem perguruan tinggi.' : 'Reach thousands of active university students and educational networks.'
    },
    {
      title: lang === 'id' ? 'Eksposur Brand Positif' : 'Positive Brand Exposure',
      desc: lang === 'id' ? 'Publikasi logo pada event besar, backdrop, media sosial resmi, dan produk kolaboratif.' : 'Logo placement on major events, stages, social media, and co-branded products.'
    },
    {
      title: lang === 'id' ? 'Pemberdayaan Wirausaha Muda' : 'Youth Entrepreneurial Impact',
      desc: lang === 'id' ? 'Turut serta membina generasi muda dalam menciptakan bisnis yang beretika dan berdampak sosial.' : 'Direct contribution to empowering the next generation of ethical entrepreneurs.'
    },
    {
      title: lang === 'id' ? 'Kolaborasi Berkelanjutan' : 'Sustainable Co-Creation',
      desc: lang === 'id' ? 'Peluang riset pasar produk baru, rekrutmen talenta muda berbakat, dan proyek bersama.' : 'Opportunities for market testing, student talent recruiting, and joint ventures.'
    }
  ];

  const fnbPartners = [
    {
      id: 'fnb-1',
      name: 'Teh Botol Sosro',
      company: 'PT Sinar Sosro',
      tag: 'Teh Siap Minum & Kuliner',
      tagEn: 'Ready-to-Drink Tea & Culinary',
      accent: '#dc2626',
      badge: 'SOSRO',
      role: lang === 'id' ? 'Mitra resmi konsinyasi minuman & sponsorship seminar wirausaha' : 'Official ready-to-drink tea & campus seminar sponsor'
    },
    {
      id: 'fnb-2',
      name: 'Air Mineral Prima',
      company: 'PT Tirta Prima Indonesia',
      tag: 'Air Mineral Alami',
      tagEn: 'Natural Mineral Water',
      accent: '#0284c7',
      badge: 'PRIMA',
      role: lang === 'id' ? 'Penyedia air mineral resmi untuk seluruh agenda kegiatan & café kampus' : 'Official mineral water supplier for campus events & café'
    },
    {
      id: 'fnb-3',
      name: 'Air Santri (Santri Water)',
      company: 'Koperasi Pesantren Nusantara',
      tag: 'Produk AMDK Santri',
      tagEn: 'Santri Bottled Drinking Water',
      accent: '#059669',
      badge: 'SANTRI',
      role: lang === 'id' ? 'Sinergi produk AMDK kemasan santri untuk retail konsinyasi mahasiswa' : 'Santri-packaged drinking water partner for student consignment retail'
    },
    {
      id: 'fnb-4',
      name: 'KOPMA UNU Mart',
      company: 'Koperasi Mahasiswa UNU',
      tag: 'Retail & Distribusi Kampus',
      tagEn: 'Campus Retail & Mart',
      accent: '#0d382f',
      badge: 'KOPMA',
      role: lang === 'id' ? 'Jaringan retail fisik dan etalase konsinyasi makanan/minuman mahasiswa' : 'Physical retail network and consignment display for student F&B goods'
    },
    {
      id: 'fnb-5',
      name: 'Sky Garden Café',
      company: 'EC Campus Food Lab',
      tag: 'Café & Roastery Kampus',
      tagEn: 'Campus Café & Roastery',
      accent: '#ea580c',
      badge: 'SKY GARDEN',
      role: lang === 'id' ? 'Laboratorium praktik wirausaha F&B, barista mentoring, dan ruang podcast' : 'Hands-on F&B laboratory, barista mentoring, and podcast venue'
    },
    {
      id: 'fnb-6',
      name: 'Cleo Pure Water',
      company: 'PT Sariguna Primatirta Tbk',
      tag: 'Air Murni Eco-Friendly',
      tagEn: 'Eco Pure Water',
      accent: '#ea580c',
      badge: 'CLEO',
      role: lang === 'id' ? 'Dukungan hidrasi kemasan ramah lingkungan pada bazaar dan workshop' : 'Eco-friendly packaging hydration support at campus bazaars'
    },
    {
      id: 'fnb-7',
      name: 'Hydro Coco',
      company: 'Kalbe Consumer Health',
      tag: 'Minuman Kelapa Alami',
      tagEn: 'Natural Coconut Water',
      accent: '#16a34a',
      badge: 'HYDRO COCO',
      role: lang === 'id' ? 'Sponsorship nutrisi alami untuk kompetisi olahraga dan gathering EC' : 'Natural coconut beverage sponsor for athletic events and gatherings'
    },
    {
      id: 'fnb-8',
      name: 'Indofood Beverage & Snack',
      company: 'PT Indofood CBP Sukses Makmur',
      tag: 'Consumer Goods & Retail',
      tagEn: 'Consumer Goods & Retail',
      accent: '#0284c7',
      badge: 'INDOFOOD',
      role: lang === 'id' ? 'Mitra penyaluran produk makanan ringan kemasan untuk etalase kampus' : 'Packaged snack distribution partner for campus display counters'
    },
    {
      id: 'fnb-9',
      name: 'Sari Roti',
      company: 'PT Nippon Indosari Corpindo Tbk',
      tag: 'Bakery & Pastry',
      tagEn: 'Bakery & Pastry',
      accent: '#d97706',
      badge: 'SARI ROTI',
      role: lang === 'id' ? 'Penyedia sarapan cepat dan kudapan roti kemasan harian mahasiswa' : 'Convenient campus breakfast and daily student bakery snacks'
    },
    {
      id: 'fnb-10',
      name: 'Nutrifood (HiLo & Lokalate)',
      company: 'PT Nutrifood Indonesia',
      tag: 'Health & Youth Beverage',
      tagEn: 'Health & Youth Beverage',
      accent: '#059669',
      badge: 'NUTRIFOOD',
      role: lang === 'id' ? 'Kolaborasi workshop nutrisi wirausaha dan booth minuman kesehatan' : 'Nutritional entrepreneurship workshops and healthy drink booths'
    },
    {
      id: 'fnb-11',
      name: 'Artisan Coffee Roastery',
      company: 'Mitra Kopi Lokal Jogja',
      tag: 'Specialty Coffee Beans',
      tagEn: 'Specialty Coffee Beans',
      accent: '#78350f',
      badge: 'KOPI LOKAL',
      role: lang === 'id' ? 'Pemasok biji kopi single origin nusantara untuk unit café mahasiswa' : 'Single origin coffee bean supplier for the student-led café unit'
    },
    {
      id: 'fnb-12',
      name: 'Teh Pucuk Harum',
      company: 'Mayora Beverage Group',
      tag: 'Minuman Teh Melati',
      tagEn: 'Jasmine Tea Beverage',
      accent: '#dc2626',
      badge: 'TEH PUCUK',
      role: lang === 'id' ? 'Sponsor pendukung bazaar festival kewirausahaan dan malam inagurasi' : 'Supporting sponsor for entrepreneurship festivals and inaugurations'
    }
  ];

  return (
    <div>
      {/* 1. HERO PARTNERS */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
            <Users size={14} />
            <span>{lang === 'id' ? 'KEMITRAAN & KOLABORASI' : 'PARTNERSHIPS & COLLABORATION'}</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {lang === 'id'
              ? 'Tumbuh & Ciptakan Peluang Bersama'
              : 'Grow & Create Opportunities Together'}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {lang === 'id'
              ? 'Entrepreneurs Club UNU Yogyakarta membuka pintu kolaborasi bagi dunia usaha, koperasi, lembaga filantropi, inkubator bisnis, dan media.'
              : 'Entrepreneurs Club UNU Yogyakarta welcomes collaboration with corporate enterprises, cooperatives, philanthropic bodies, and media.'}
          </p>
          <a href="#partner-form" className="ec-btn ec-btn-accent" style={{ padding: '14px 32px', fontSize: 16, borderRadius: '8px' }}>
            <span>{lang === 'id' ? 'Ajukan Kerja Sama' : 'Submit Partnership Proposal'}</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* 2. PARTNERS LIST & COLLABORATION SUMMARY */}
      <section className="ec-section" style={{ background: 'var(--ec-white)', paddingTop: 48 }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontSize: 26, color: 'var(--ec-deep-green)', marginBottom: 10 }}>
              {lang === 'id' ? 'Mitra Kolaboratif Saat Ini' : 'Current Collaborative Partners'}
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ec-muted)' }}>
              {lang === 'id'
                ? 'Sinergi nyata yang telah terjalin dalam mendukung ekosistem wirausaha kampus'
                : 'Active collaborative relationships supporting our campus venture ecosystem'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {partnersData.map((prt) => (
              <div key={prt.id} className="ec-card" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--ec-sage-surface)', border: '1px solid var(--ec-border-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ec-forest)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 13, marginBottom: 20 }}>
                  {prt.logoText}
                </div>
                <h4 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 8 }}>
                  {prt.name}
                </h4>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ec-emerald)', marginBottom: 12 }}>
                  {lang === 'id' ? prt.type : prt.typeEn}
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--ec-slate)', lineHeight: 1.6, flex: 1 }}>
                  {prt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFITS OF PARTNERSHIP */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="ec-eyebrow">
              <Award size={13} />
              <span>BENEFITS OF PARTNERSHIP</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Nilai Tambah Menjadi Mitra Kami' : 'Benefits of Partnering with EC'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
            {benefits.map((b, i) => (
              <div key={i} className="ec-card" style={{ padding: 32 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--ec-sage-surface)', color: 'var(--ec-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Handshake size={22} />
                </div>
                <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ec-muted)', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 F&B AND CONSUMER BRAND PARTNER SHOWCASE WALL (Inspired by UNU Synergy Grid) */}
      <section className="ec-section" style={{ background: 'var(--ec-sage-surface)', padding: '72px 0 80px' }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div className="ec-eyebrow">
              <span>{lang === 'id' ? 'JEJARING MITRA F&B & KONSINYASI' : 'F&B & CONSIGNMENT PARTNERS'}</span>
            </div>
            <h2 className="ec-section-title" style={{ fontSize: 'clamp(26px, 3.4vw, 38px)', maxWidth: 840, margin: '0 auto 14px' }}>
              {lang === 'id'
                ? 'Didukung Brand F&B Pilihan, Membangun Sinergi Berkelanjutan'
                : 'Backed by Premier F&B Brands, Cultivating Sustainable Synergy'}
            </h2>
            <p className="ec-section-desc" style={{ margin: '0 auto', maxWidth: 680 }}>
              {lang === 'id'
                ? 'Sinergi nyata dalam penyediaan produk konsinyasi, pasokan kantin terpadu & Sky Garden Café, serta dukungan sponsorship event kreatif mahasiswa.'
                : 'Real synergy across retail consignment, integrated canteen & Sky Garden Café supply, and student event sponsorships.'}
            </p>
          </div>

          {/* Wall / Multi-Box Grid Layout (Matching Image Reference) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16
          }}>
            {fnbPartners.map((p) => (
              <div
                key={p.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 0,
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 154,
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--ec-emerald)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 24px -6px rgba(7, 46, 37, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      padding: '4px 8px',
                      borderRadius: 0,
                      background: 'rgba(5, 150, 105, 0.08)',
                      color: p.accent,
                      border: `1px solid ${p.accent}33`
                    }}>
                      {p.badge}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--ec-muted)' }}>
                      {lang === 'id' ? p.tag : p.tagEn}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 16,
                    fontWeight: 800,
                    color: 'var(--ec-deep-green)',
                    marginBottom: 4
                  }}>
                    {p.name}
                  </h3>
                  <div style={{ fontSize: 12, color: 'var(--ec-muted)', marginBottom: 12 }}>
                    {p.company}
                  </div>
                </div>

                <div style={{
                  fontSize: 12,
                  color: 'var(--ec-slate)',
                  lineHeight: 1.5,
                  paddingTop: 10,
                  borderTop: '1px solid #f1f5f9'
                }}>
                  {p.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP FORM */}
      <section id="partner-form" className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container" style={{ maxWidth: 760 }}>
          <div className="ec-card" style={{ padding: '48px 40px', background: 'var(--ec-sage-bg)' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h2 style={{ fontSize: 26, color: 'var(--ec-deep-green)', marginBottom: 12 }}>
                  {lang === 'id' ? 'Proposal Kemitraan Diterima!' : 'Partnership Proposal Received!'}
                </h2>
                <p style={{ fontSize: 15, color: 'var(--ec-slate)', lineHeight: 1.7, marginBottom: 24 }}>
                  {lang === 'id'
                    ? `Terima kasih, Bapak/Ibu ${formData.name} dari ${formData.company}. Formulir minat kerja sama untuk skema "${formData.partnershipType}" telah tercatat pada sesi pratinjau. Tim Public Relations & Partnership EC akan segera menghubungi Anda.`
                    : `Thank you, ${formData.name} from ${formData.company}. Your partnership inquiry for "${formData.partnershipType}" has been recorded. Our PR team will reach out promptly.`}
                </p>
                <button
                  type="button"
                  className="ec-btn ec-btn-secondary"
                  style={{ borderRadius: '8px' }}
                  onClick={() => setFormSubmitted(false)}
                >
                  {lang === 'id' ? 'Ajukan Kemitraan Lain' : 'Submit Another Proposal'}
                </button>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <div className="ec-eyebrow" style={{ margin: '0 auto 12px' }}>
                    <span>{lang === 'id' ? 'FORMULIR PENGAJUAN KERJA SAMA' : 'PARTNERSHIP PROPOSAL FORM'}</span>
                  </div>
                  <h2 style={{ fontSize: 26, color: 'var(--ec-deep-green)' }}>
                    {lang === 'id' ? 'Mari Berkolaborasi Bersama Kami' : 'Let’s Partner & Collaborate'}
                  </h2>
                  <p style={{ fontSize: 14, color: 'var(--ec-muted)', marginTop: 6 }}>
                    {lang === 'id' ? 'Isi formulir di bawah ini untuk memulai pembicaraan kerja sama' : 'Fill out the form below to begin a conversation'}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'Nama Narahubung *' : 'Contact Person *'}</label>
                      <input
                        type="text"
                        name="name"
                        className="ec-input"
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'Organisasi / Perusahaan *' : 'Organization / Company *'}</label>
                      <input
                        type="text"
                        name="company"
                        className="ec-input"
                        placeholder="Contoh: PT Kreasi Nusantara"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'Email Resmi *' : 'Official Email *'}</label>
                      <input
                        type="email"
                        name="email"
                        className="ec-input"
                        placeholder="kontak@perusahaan.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="ec-input-group">
                      <label className="ec-label">{lang === 'id' ? 'Nomor WhatsApp *' : 'WhatsApp Number *'}</label>
                      <input
                        type="tel"
                        name="phone"
                        className="ec-input"
                        placeholder="081234567890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Jenis Kerja Sama *' : 'Partnership Type *'}</label>
                    <select
                      name="partnershipType"
                      className="ec-select"
                      value={formData.partnershipType}
                      onChange={handleChange}
                    >
                      <option value="Sponsorship / Pendanaan">{lang === 'id' ? 'Sponsorship / Pendanaan Event' : 'Event Sponsorship / Funding'}</option>
                      <option value="Media Partner">{lang === 'id' ? 'Media Partner & Publikasi' : 'Media Partner & Publication'}</option>
                      <option value="Konsinyasi / Distribusi Produk">{lang === 'id' ? 'Konsinyasi / Distribusi Produk' : 'Product Consignment / Distribution'}</option>
                      <option value="Pengadaan Konveksi & Merchandise">{lang === 'id' ? 'Pengadaan Konveksi & Merchandise' : 'Apparel & Merchandise Procurement'}</option>
                      <option value="Speaker & Mentoring">{lang === 'id' ? 'Narasumber / Mentoring Bisnis' : 'Guest Speaker / Business Mentorship'}</option>
                      <option value="Lainnya">{lang === 'id' ? 'Bentuk Kemitraan Lainnya' : 'Other Collaboration Format'}</option>
                    </select>
                  </div>

                  <div className="ec-input-group">
                    <label className="ec-label">{lang === 'id' ? 'Pesan / Rencana Kolaborasi' : 'Message / Collaboration Brief'}</label>
                    <textarea
                      name="message"
                      className="ec-textarea"
                      placeholder={lang === 'id' ? 'Jelaskan secara singkat rencana atau gagasan kerja sama Anda...' : 'Briefly describe your proposed partnership idea...'}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="ec-btn ec-btn-primary" style={{ width: '100%', padding: '14px', fontSize: 15, marginTop: 12 }}>
                    <Send size={16} />
                    <span>{lang === 'id' ? 'Kirim Usulan Kemitraan' : 'Submit Partnership Inquiry'}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
