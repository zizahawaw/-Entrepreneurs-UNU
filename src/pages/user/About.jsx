import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { galleryData } from '../../data/ecData';
import {
  Target,
  Compass,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Heart,
  ShieldCheck,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const values = [
    {
      icon: <Lightbulb size={24} color="#059669" />,
      title: lang === 'id' ? 'Inovasi & Kreativitas' : 'Innovation & Creativity',
      desc: lang === 'id' ? 'Mendorong ide-ide orisinal dan solusi kewirausahaan kreatif yang adaptif terhadap dinamika zaman.' : 'Fostering original ideas and adaptive creative entrepreneurial solutions.'
    },
    {
      icon: <Users size={24} color="#059669" />,
      title: lang === 'id' ? 'Kolaborasi Sinergis' : 'Synergistic Collaboration',
      desc: lang === 'id' ? 'Menjunjung tinggi kerja sama tim lintas disiplin ilmu, kemitraan strategis, dan semangat saling dukung.' : 'Upholding interdisciplinary teamwork, strategic partnerships, and mutual empowerment.'
    },
    {
      icon: <ShieldCheck size={24} color="#059669" />,
      title: lang === 'id' ? 'Integritas & Tanggung Jawab' : 'Integrity & Accountability',
      desc: lang === 'id' ? 'Menjalankan setiap aktivitas wirausaha dan organisasi dengan kejujuran, etika, dan tata kelola yang amanah.' : 'Conducting every venture and organizational duty with honesty, ethics, and trust.'
    },
    {
      icon: <Heart size={24} color="#059669" />,
      title: lang === 'id' ? 'Dampak Keberlanjutan' : 'Sustainable Impact',
      desc: lang === 'id' ? 'Menghadirkan nilai ekonomi yang memberi manfaat sosial nyata bagi civitas akademika dan masyarakat luas.' : 'Delivering economic value that brings tangible social benefits to campus and society.'
    }
  ];

  const timeline = [
    {
      year: '2023 - 2024',
      title: lang === 'id' ? 'Inisiasi Komunitas & Ruang Diskusi' : 'Community Genesis & Study Circles',
      desc: lang === 'id' ? 'Lahirnya gerakan wirausaha mahasiswa UNU Yogyakarta yang berhimpun untuk mendiskusikan peluang bisnis kampus dan mentoring awal.' : 'The founding of student entrepreneurship circles at UNU Yogyakarta exploring campus ventures.'
    },
    {
      year: '2024 - 2025',
      title: lang === 'id' ? 'Peluncuran Unit Bisnis & Konsinyasi' : 'Launch of Business Units & Consignment',
      desc: lang === 'id' ? 'Realisasi unit operasional konsinyasi bersama Koperasi Mahasiswa, produksi merchandise resmi kampus, dan konveksi busana.' : 'Operational realization of consignment with the student coop, official merchandise, and garment line.'
    },
    {
      year: '2025 - 2026',
      title: lang === 'id' ? 'Ekspansi Kolaborasi & Sky Garden Café' : 'Collaborative Expansion & Sky Garden Café',
      desc: lang === 'id' ? 'Pengembangan proyek F&B Sky Garden Bites Café, kolaborasi podcast wirausaha bersama BAZNAS DIY, serta proyek EO Kids-Playdate.' : 'Scaling F&B Sky Garden Bites Café, podcast partnership with BAZNAS DIY, and kids edutainment event organizing.'
    }
  ];

  return (
    <div>
      {/* 1. HERO ABOUT EC */}
      <section className="ec-hero-section" style={{ padding: '72px 0 64px' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <div className="ec-eyebrow" style={{ margin: '0 auto 16px' }}>
            <span>{lang === 'id' ? 'TENTANG KAMI' : 'ABOUT US'}</span>
          </div>
          <h1 className="ec-section-title" style={{ fontSize: 'clamp(32px, 4vw, 50px)', maxWidth: 840, margin: '0 auto 20px' }}>
            {lang === 'id'
              ? 'Wadah Tumbuh Bersama Mencetak Wirausahawan Kampus'
              : 'A Thriving Space Nurturing Student Entrepreneurs'}
          </h1>
          <p className="ec-section-desc" style={{ margin: '0 auto 32px', fontSize: 18 }}>
            {lang === 'id'
              ? 'Entrepreneurs Club Universitas Nahdlatul Ulama Yogyakarta berkomitmen menghubungkan mimpi wirausaha mahasiswa dengan eksekusi nyata berdaya saing.'
              : 'Entrepreneurs Club UNU Yogyakarta connects students’ business aspirations with tangible, competitive execution.'}
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE & 4. HISTORY */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="ec-eyebrow">
                <Users size={13} />
                <span>{lang === 'id' ? 'SIAPA KAMI' : 'WHO WE ARE'}</span>
              </div>
              <h2 className="ec-section-title" style={{ marginBottom: 20 }}>
                {lang === 'id' ? 'Mengenal Lebih Dekat Entrepreneurs Club' : 'Getting to Know Entrepreneurs Club'}
              </h2>
              <p style={{ fontSize: 16, color: 'var(--ec-slate)', lineHeight: 1.8, marginBottom: 20 }}>
                {lang === 'id'
                  ? 'Entrepreneurs Club (EC) adalah organisasi kemahasiswaan berbasis minat dan bakat kewirausahaan di Universitas Nahdlatul Ulama Yogyakarta. Kami hadir sebagai inkubator ide kreatif, ruang bertukar wawasan, dan jembatan kolaborasi bagi mahasiswa yang ingin membangun dan menguji model bisnis nyata.'
                  : 'Entrepreneurs Club (EC) is a student-led entrepreneurship organization at Universitas Nahdlatul Ulama Yogyakarta. We serve as an incubator for creative ideas, a knowledge exchange hub, and a collaborative launchpad for students seeking to build and test viable business models.'}
              </p>
              <p style={{ fontSize: 15, color: 'var(--ec-muted)', lineHeight: 1.8, marginBottom: 28 }}>
                {lang === 'id'
                  ? 'Dengan memadukan pendekatan teori, pelatihan praktikal bersama mentor industri, serta pengelolaan unit usaha mandiri (seperti konsinyasi, café, konveksi, dan merchandise), anggota EC diajak untuk merasakan dinamika dunia bisnis secara langsung sejak di bangku perkuliahan.'
                  : 'By blending business theory, mentorship workshops with experienced founders, and hands-on management of student enterprise units (consignment, café, garment production, and merchandise), our members experience business realities directly during their academic studies.'}
              </p>
              <div style={{ display: 'flex', gap: 24, padding: '16px 20px', background: 'var(--ec-sage-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--ec-border-green)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 800, color: 'var(--ec-forest)' }}>UNU Jogja</div>
                  <div style={{ fontSize: 12, color: 'var(--ec-muted)' }}>{lang === 'id' ? 'Afiliasi Kampus' : 'Campus Affiliation'}</div>
                </div>
                <div style={{ borderLeft: '1px solid var(--ec-border)', paddingLeft: 24 }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 800, color: 'var(--ec-forest)' }}>40+</div>
                  <div style={{ fontSize: 12, color: 'var(--ec-muted)' }}>{t.stats.membersLabel}</div>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 0, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                alt="EC Workshop and Community"
                style={{ width: '100%', height: 460, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISION & 6. MISSION */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="ec-eyebrow">
              <Target size={13} />
              <span>{lang === 'id' ? 'VISI & MISI' : 'VISION & MISSION'}</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Arah Gerak & Komitmen Kami' : 'Our Strategic Direction & Commitment'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {/* Vision Card */}
            <div className="ec-card" style={{ padding: 40, borderTop: '4px solid var(--ec-emerald)', background: 'linear-gradient(180deg, #fff 0%, #f6faf8 100%)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(5, 150, 105, 0.1)', color: 'var(--ec-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: 22, color: 'var(--ec-deep-green)', marginBottom: 14 }}>
                {lang === 'id' ? 'Visi Organisasi' : 'Our Vision'}
              </h3>
              <p style={{ fontSize: 16, color: 'var(--ec-slate)', lineHeight: 1.8 }}>
                {lang === 'id'
                  ? 'Menjadi komunitas kewirausahaan mahasiswa unggul, berdaya saing, berintegritas, dan inovatif yang mampu melahirkan wirausahawan muda berkarakter serta berkontribusi nyata bagi perekonomian masyarakat.'
                  : 'To become a premier, competitive, high-integrity, and innovative student entrepreneurship community that fosters principled young founders contributing meaningfully to the economy.'}
              </p>
            </div>

            {/* Mission Card */}
            <div className="ec-card" style={{ padding: 40, borderTop: '4px solid var(--ec-orange)', background: 'linear-gradient(180deg, #fff 0%, #fffbf8 100%)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(249, 115, 22, 0.1)', color: 'var(--ec-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: 22, color: 'var(--ec-deep-green)', marginBottom: 14 }}>
                {lang === 'id' ? 'Misi Organisasi' : 'Our Mission'}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <li style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--ec-slate)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{lang === 'id' ? 'Menumbuhkan pola pikir dan minat berwirausaha di kalangan mahasiswa UNU Yogyakarta.' : 'Nurturing entrepreneurial mindsets and interest among UNU Yogyakarta students.'}</span>
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--ec-slate)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{lang === 'id' ? 'Menyelenggarakan pelatihan, workshop, dan mentoring bisnis secara aplikatif dan berkala.' : 'Organizing regular, highly applicable business training, workshops, and mentorship.'}</span>
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--ec-slate)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{lang === 'id' ? 'Mengembangkan unit usaha mahasiswa yang berkelanjutan melalui konsinyasi, café, dan layanan kreatif.' : 'Developing sustainable student ventures across consignment, café, and creative services.'}</span>
                </li>
                <li style={{ display: 'flex', gap: 10, fontSize: 14.5, color: 'var(--ec-slate)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{lang === 'id' ? 'Membangun jejaring kemitraan strategis dengan institusi, inkubator, UMKM, dan industri.' : 'Building strategic partnerships with institutions, incubators, MSMEs, and industry leaders.'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ORGANIZATIONAL VALUES */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="ec-eyebrow">
              <Award size={13} />
              <span>{lang === 'id' ? 'NILAI DASAR' : 'CORE VALUES'}</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Nilai-Nilai Dasar Organisasi' : 'Our Organizational Values'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
            {values.map((val, idx) => (
              <div key={idx} className="ec-card" style={{ padding: 32, textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--ec-sage-surface)', margin: '0 auto 18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 10 }}>{val.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ec-muted)', lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR JOURNEY / TIMELINE */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="ec-eyebrow">
              <TrendingUp size={13} />
              <span>{lang === 'id' ? 'REKAM JEJAK' : 'JOURNEY & MILESTONES'}</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Perjalanan & Rekam Jejak' : 'Our Journey & Milestones'}
            </h2>
          </div>

          <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
            {timeline.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <div style={{ width: 120, flexShrink: 0, textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 800, color: 'var(--ec-emerald)' }}>
                    {item.year}
                  </div>
                </div>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--ec-orange)', marginTop: 6, flexShrink: 0, boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.2)' }} />
                <div className="ec-card" style={{ padding: 24, flex: 1 }}>
                  <h3 style={{ fontSize: 18, color: 'var(--ec-deep-green)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--ec-slate)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUTPUT & CONTRIBUTIONS */}
      <section className="ec-section" style={{ background: 'var(--ec-white)' }}>
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="ec-eyebrow">
              <span>{lang === 'id' ? 'KONTRIBUSI KAMI' : 'OUR CONTRIBUTIONS'}</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Dampak Nyata Bagi Civitas Kampus' : 'Tangible Contributions to Campus & Beyond'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div className="ec-card" style={{ padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🤝</div>
              <h4 style={{ fontSize: 17, marginBottom: 8, color: 'var(--ec-deep-green)' }}>
                {lang === 'id' ? 'Saluran Distribusi Konsinyasi' : 'Consignment Distribution Pipeline'}
              </h4>
              <p style={{ fontSize: 13.5, color: 'var(--ec-muted)' }}>
                {lang === 'id'
                  ? 'Membantu puluhan mahasiswa memasarkan produk kuliner dan kerajinan tangan ke pasar kampus secara tertata.'
                  : 'Helping dozens of students distribute handmade goods and snacks into organized campus retail.'}
              </p>
            </div>

            <div className="ec-card" style={{ padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🎙️</div>
              <h4 style={{ fontSize: 17, marginBottom: 8, color: 'var(--ec-deep-green)' }}>
                {lang === 'id' ? 'Podcast Edukasi Wirausaha Sosial' : 'Social Entrepreneurship Podcast'}
              </h4>
              <p style={{ fontSize: 13.5, color: 'var(--ec-muted)' }}>
                {lang === 'id'
                  ? 'Menghadirkan konten audio-visual berbobot bersama BAZNAS DIY tentang kemandirian pemuda dan zakat produktif.'
                  : 'Producing impactful audio-visual series on youth financial literacy and community development.'}
              </p>
            </div>

            <div className="ec-card" style={{ padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>👕</div>
              <h4 style={{ fontSize: 17, marginBottom: 8, color: 'var(--ec-deep-green)' }}>
                {lang === 'id' ? 'Layanan Konveksi & Merchandise' : 'Apparel & Merchandise Services'}
              </h4>
              <p style={{ fontSize: 13.5, color: 'var(--ec-muted)' }}>
                {lang === 'id'
                  ? 'Menyediakan kebutuhan seragam PDH, varsity, dan kado wisuda berkualitas bagi organisasi dan angkatan.'
                  : 'Supplying high-grade custom organizational uniforms, jackets, and graduation gifts.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. DOCUMENTATION GALLERY */}
      <section className="ec-section">
        <div className="ec-container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="ec-eyebrow">
              <Compass size={13} />
              <span>{lang === 'id' ? 'GALERI AKTIVITAS' : 'ACTIVITY GALLERY'}</span>
            </div>
            <h2 className="ec-section-title">
              {lang === 'id' ? 'Dokumentasi Komunitas' : 'Community Documentation'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {galleryData.slice(0, 4).map((item) => (
              <div key={item.id} style={{ borderRadius: 0, overflow: 'hidden', height: 220, position: 'relative' }}>
                <img src={item.image} alt="Dokumentasi EC" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, insetInline: 0, background: 'linear-gradient(0deg, rgba(7, 46, 37, 0.9) 0%, transparent 100%)', padding: 16, color: '#fff' }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{lang === 'id' ? item.title.id : item.title.en}</div>
                  <div style={{ fontSize: 12, color: '#34d399' }}>{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA JOIN */}
      <section style={{ padding: '80px 0', background: 'var(--ec-forest)', color: '#fff' }}>
        <div className="ec-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, color: '#fff', marginBottom: 16 }}>
            {lang === 'id' ? 'Ingin Berkembang Bersama Kami?' : 'Ready to Grow With Us?'}
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255, 255, 255, 0.85)', maxWidth: 600, margin: '0 auto 32px' }}>
            {lang === 'id'
              ? 'Daftarkan diri Anda dalam seleksi anggota baru Entrepreneurs Club UNU Yogyakarta dan wujudkan potensi bisnismu.'
              : 'Apply for the new member intake at Entrepreneurs Club UNU Yogyakarta and unleash your business potential.'}
          </p>
          <Link to="/rekrutmen" className="ec-btn ec-btn-accent" style={{ padding: '16px 36px', fontSize: 16 }}>
            <span>{t.hero.ctaSecondary}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
