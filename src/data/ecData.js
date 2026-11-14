// Structured data for Entrepreneurs Club UNU Yogyakarta

export const heroEventCards = [
  {
    id: 1,
    status: 'Coming Soon',
    statusId: 'Segera Hadir',
    statusColor: 'amber',
    name: 'Entrepreneurship Talk',
    nameId: 'Entrepreneurship Talk',
    nameEn: 'Entrepreneurship Talk',
    desc: 'Seminar & Business Sharing',
    descId: 'Seminar & Berbagi Pengalaman Bisnis',
    descEn: 'Seminar & Business Sharing',
    category: 'Seminar',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    slug: 'entrepreneurship-talk-2026'
  },
  {
    id: 2,
    status: 'Upcoming',
    statusId: 'Akan Datang',
    statusColor: 'emerald',
    name: 'Business Workshop',
    nameId: 'Business Workshop',
    nameEn: 'Business Workshop',
    desc: 'Learn & Develop Skills',
    descId: 'Pelatihan & Keterampilan Bisnis',
    descEn: 'Learn & Develop Skills',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    slug: 'business-workshop-skill'
  },
  {
    id: 3,
    status: 'Registration Soon',
    statusId: 'Pendaftaran Segera',
    statusColor: 'teal',
    name: 'Business Competition',
    nameId: 'Business Competition',
    nameEn: 'Business Competition',
    desc: 'Show Your Best Ideas',
    descId: 'Tampilkan Ide Bisnis Terbaik',
    descEn: 'Show Your Best Ideas',
    category: 'Competition',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    slug: 'business-competition-unu'
  },
  {
    id: 4,
    status: 'Coming Soon',
    statusId: 'Segera Hadir',
    statusColor: 'emerald',
    name: 'Entrepreneur Gathering',
    nameId: 'Entrepreneur Gathering',
    nameEn: 'Entrepreneur Gathering',
    desc: 'Connect & Collaborate',
    descId: 'Temu Kolaborasi & Jejaring',
    descEn: 'Connect & Collaborate',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    slug: 'entrepreneur-gathering'
  }
];

export const eventsData = [
  {
    id: 'ev-1',
    slug: 'entrepreneurship-talk-2026',
    title: {
      id: 'Entrepreneurship Talk: Membangun Fondasi Bisnis Berkelanjutan',
      en: 'Entrepreneurship Talk: Building Sustainable Business Foundations'
    },
    category: 'Seminar',
    status: 'Upcoming',
    statusLabel: { id: 'Segera Hadir', en: 'Upcoming' },
    date: '28 Maret 2026',
    time: '09:00 - 12:30 WIB',
    location: 'Auditorium Lantai 3 Kampus Terpadu UNU Yogyakarta',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    summary: {
      id: 'Sesi inspirasi dan sharing session bersama praktisi bisnis muda mengenai strategi validasi ide, model bisnis, dan eksekusi awal.',
      en: 'Inspirational sharing session with young startup founders covering idea validation, business modeling, and early market execution.'
    },
    speakers: ['Ahmad Fauzi (Founder Tech Startup)', 'Siti Nurhaliza (Alumni Wirausaha UNU)'],
    openRegistration: true,
    capacity: '150 Peserta'
  },
  {
    id: 'ev-2',
    slug: 'business-workshop-skill',
    title: {
      id: 'Business Workshop: Hands-on Digital Marketing & Sales Funnel',
      en: 'Business Workshop: Hands-on Digital Marketing & Sales Funnel'
    },
    category: 'Workshop',
    status: 'Upcoming',
    statusLabel: { id: 'Pendaftaran Dibuka', en: 'Registration Open' },
    date: '12 April 2026',
    time: '13:00 - 16:30 WIB',
    location: 'Co-Working Space UNU Yogyakarta & Online Zoom',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    summary: {
      id: 'Pelatihan intensif praktik pembuatan kampanye media sosial berbayar, optimasi landing page, dan funnel penjualan terukur.',
      en: 'Intensive practical training on paid social media campaigns, landing page optimization, and measurable sales funnels.'
    },
    speakers: ['Rian Daniswara (Digital Marketer Specialist)'],
    openRegistration: true,
    capacity: '50 Peserta'
  },
  {
    id: 'ev-3',
    slug: 'business-competition-unu',
    title: {
      id: 'EC Business Plan Competition: Inovasi Mahasiswa untuk Negeri',
      en: 'EC Business Plan Competition: Student Innovation for the Nation'
    },
    category: 'Competition',
    status: 'Registration Soon',
    statusLabel: { id: 'Pendaftaran Segera', en: 'Registration Soon' },
    date: '1 - 20 Mei 2026',
    time: 'Tahap Eliminasi & Pitch Day',
    location: 'Kampus Terpadu UNU Yogyakarta',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    summary: {
      id: 'Kompetisi proposal ide bisnis mahasiswa lintas fakultas dengan pendanaan awal dan pendampingan inkubasi.',
      en: 'Inter-faculty student business proposal competition featuring seed funding and structured incubation mentorship.'
    },
    speakers: ['Dewan Juri Inkubator UNU & Praktisi'],
    openRegistration: false,
    capacity: '30 Tim'
  },
  {
    id: 'ev-4',
    slug: 'entrepreneur-gathering',
    title: {
      id: 'EC Community Gathering & Networking Night',
      en: 'EC Community Gathering & Networking Night'
    },
    category: 'Networking',
    status: 'Coming Soon',
    statusLabel: { id: 'Coming Soon', en: 'Coming Soon' },
    date: 'Juni 2026',
    time: '18:30 - 21:00 WIB',
    location: 'Sky Garden / Rooftop Café UNU Yogyakarta',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80',
    summary: {
      id: 'Ajang ramah tamah, temu alumni pebisnis kampus, dan saling tukar portofolio kolaborasi proyek lintas angkatan.',
      en: 'Friendly casual networking evening connecting active members with entrepreneurial alumni and industry collaborators.'
    },
    speakers: ['Pengurus Harian & Alumni EC'],
    openRegistration: false,
    capacity: '80 Peserta'
  }
];

export const programsData = [
  {
    id: 'prog-1',
    number: '01',
    name: 'Konsinyasi',
    nameEn: 'Consignment Unit',
    category: 'Bisnis & Retail',
    categoryEn: 'Retail & Distribution',
    desc: 'Program penjualan produk melalui sistem konsinyasi, termasuk kerja sama strategis dengan koperasi mahasiswa UNU Yogyakarta.',
    descEn: 'Product sales and distribution program via consignment mechanisms, including strategic retail collaboration with UNU student cooperatives.',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Penyediaan etalase makanan ringan & merchandise mahasiswa',
      'Sistem bagi hasil transparan dan pembukuan terintegrasi',
      'Kerja sama rak khusus di Koperasi Mahasiswa (Kopma)'
    ],
    output: 'Lebih dari 15 varian produk mahasiswa terserap pasar kampus setiap bulannya.'
  },
  {
    id: 'prog-2',
    number: '02',
    name: 'Affiliate',
    nameEn: 'Affiliate Marketing',
    category: 'Digital Marketing',
    categoryEn: 'Digital Marketing',
    desc: 'Program pemasaran dan pengembangan kemampuan affiliate marketing bagi anggota melalui kelas mentoring intensif.',
    descEn: 'Affiliate marketing skills development and campaign operations through hands-on mentoring sessions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Pelatihan riset tren produk & algoritma marketplace',
      'Pembuatan konten video pendek berbasis storytelling',
      'Monetisasi akun creator mahasiswa'
    ],
    output: 'Peningkatan literasi pemasaran digital dan pendapatan mandiri mahasiswa.'
  },
  {
    id: 'prog-3',
    number: '03',
    name: 'Sky Garden Bites Café',
    nameEn: 'Sky Garden Bites Café',
    category: 'F&B & Hospitality',
    categoryEn: 'F&B & Hospitality',
    desc: 'Program kolaborasi dan pengembangan konsep café kampus, termasuk proyek podcast kewirausahaan bersama BAZNAS DIY.',
    descEn: 'Campus café concept development and collaborative space, featuring entrepreneurship podcast projects with BAZNAS DIY.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Laboratorium praktik operasional bisnis F&B',
      'Ruang kreasi santai dan diskusi wirausaha di rooftop kampus',
      'Produksi live podcast edukasi wirausaha sosial'
    ],
    output: 'Unit bisnis F&B aktif sekaligus wahana edukasi kewirausahaan sosial kampus.'
  },
  {
    id: 'prog-4',
    number: '04',
    name: 'EO Kids-Playdate Project',
    nameEn: 'EO Kids-Playdate Project',
    category: 'Event Organizer',
    categoryEn: 'Event Organizer',
    desc: 'Proyek event organizer berbasis edutainment dengan konsep kegiatan bermain dan pengalaman edukatif interaktif untuk anak.',
    descEn: 'Edutainment-focused event organizer project delivering joyful play experiences and early learning development for children.',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Rancang bangun aktivitas motorik & sensorik ramah anak',
      'Manajemen acara keluarga dan kolaborasi sekolah TK/PAUD',
      'Pemberdayaan tim mahasiswa bidang manajemen event'
    ],
    output: 'Eksekusi event berkala yang dipercaya komunitas keluarga dan mitra edukasi.'
  },
  {
    id: 'prog-5',
    number: '05',
    name: 'Merchandise',
    nameEn: 'Merchandise Division',
    category: 'Creative Industry',
    categoryEn: 'Creative Industry',
    desc: 'Pengembangan dan penjualan produk resmi organisasi dan kampus: tumbler, kaos, tote bag estetik, dan buket wisuda.',
    descEn: 'Design, production, and retail of official campus merchandise: tumblers, apparel, aesthetic tote bags, and graduation bouquets.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Koleksi tote bag kanvas premium desain tipografi eksklusif',
      'Tumbler tahan panas/dingin ramah lingkungan',
      'Buket bunga & kado perayaan wisuda'
    ],
    output: 'Branding identitas komunitas serta profit center yang stabil.'
  },
  {
    id: 'prog-6',
    number: '06',
    name: 'Konveksi',
    nameEn: 'Apparel & Garment Production',
    category: 'Manufaktur & Jasa',
    categoryEn: 'Manufacturing & Services',
    desc: 'Layanan produksi busana formal dan kasual: bordir komputer berkualitas, seragam PDH, jaket varsity kampus, dan sablon kaos.',
    descEn: 'Custom apparel and garment manufacturing services: computerized embroidery, organizational PDH uniforms, campus varsity jackets, and screen printing.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Pelayanan pesanan kemeja PDH organisasi dan fakultas',
      'Jaket varsity eksklusif bahan fleece tebal premium',
      'Pengerjaan tepat waktu dengan standar quality control ketat'
    ],
    output: 'Penyedia konveksi terpercaya bagi himpunan, UKM, dan angkatan mahasiswa.'
  }
];

export const productsData = [
  {
    id: 'prd-1',
    name: 'Tote Bag Kanvas Premium EC',
    nameEn: 'EC Premium Canvas Tote Bag',
    category: 'Merchandise',
    price: 'Rp 45.000',
    priceNum: 45000,
    status: 'Ready Stock',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    desc: 'Tote bag kanvas tebal dengan sablon estetik quote wirausaha. Jahitan kokoh, muat laptop 14 inch, resleting penutup aman.',
    descEn: 'Heavy-duty canvas tote bag featuring motivational entrepreneur typography. Fits 14-inch laptops with secure zipper closure.'
  },
  {
    id: 'prd-2',
    name: 'Tumbler Stainless Vacuum EC',
    nameEn: 'EC Stainless Vacuum Tumbler',
    category: 'Merchandise',
    price: 'Rp 65.000',
    priceNum: 65000,
    status: 'Ready Stock',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    desc: 'Tumbler insulasi ganda tahan suhu dingin hingga 12 jam dan panas hingga 8 jam dengan grafir laser logo resmi EC.',
    descEn: 'Double-wall stainless steel insulated tumbler keeping beverages cold for 12 hours and hot for 8 hours with engraved official EC logo.'
  },
  {
    id: 'prd-3',
    name: 'Kemeja PDH & Jaket Varsity Custom',
    nameEn: 'Custom PDH Uniform & Varsity Jacket',
    category: 'Konveksi',
    price: 'Mulai Rp 120.000',
    priceNum: 120000,
    status: 'Pre-Order / Custom',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    desc: 'Layanan jahit dan bordir seragam kemeja PDH, jaket varsity, dan hoodie komunitas dengan bahan American Drill / fleece pilihan.',
    descEn: 'Custom tailoring and embroidery for organizational shirts, varsity jackets, and hoodies with premium fabrics.'
  },
  {
    id: 'prd-4',
    name: 'Buket Hadiah & Wisuda Eksklusif',
    nameEn: 'Graduation Bouquet & Gift Sets',
    category: 'Merchandise',
    price: 'Rp 35.000 - Rp 150.000',
    priceNum: 35000,
    status: 'Made by Order',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
    desc: 'Buket bunga rajut, snack, dan boneka wisuda buatan tim kreatif mahasiswa untuk momen wisuda atau perayaan khusus.',
    descEn: 'Handmade crochet flower bouquets, snacks, and graduation sets crafted with love by our student creative team.'
  },
  {
    id: 'prd-5',
    name: 'Kripik & Snack Konsinyasi Kopma',
    nameEn: 'Student Consignment Snacks & Bites',
    category: 'Konsinyasi',
    price: 'Rp 10.000 - Rp 20.000',
    priceNum: 10000,
    status: 'Tersedia di Kopma',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    desc: 'Aneka cemilan gurih dan manis produksi mahasiswa yang didistribusikan melalui rak konsinyasi Koperasi Mahasiswa UNU.',
    descEn: 'Selection of tasty savory and sweet snacks produced by student culinary entrepreneurs and stocked at the student coop.'
  },
  {
    id: 'prd-6',
    name: 'Signature Coffee & Bites Sky Garden',
    nameEn: 'Sky Garden Signature Coffee & Bites',
    category: 'Sky Garden',
    price: 'Rp 12.000 - Rp 25.000',
    priceNum: 12000,
    status: 'Tersedia di Café',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    desc: 'Kopi susu gula aren, mocktail segar, dan roti bakar yang disajikan oleh tim barista mahasiswa di rooftop café kampus.',
    descEn: 'Artisan palm sugar iced coffee, refreshing mocktails, and toasted bites brewed by student baristas at the rooftop café.'
  }
];

export const newsData = [
  {
    id: 'news-1',
    slug: 'kolaborasi-ec-dan-baznas-diy-podcast-wirausaha',
    title: {
      id: 'Kolaborasi Inspiratif EC UNU Yogyakarta dan BAZNAS DIY Lewat Podcast Wirausaha',
      en: 'Inspirational Collaboration between EC UNU Yogyakarta and BAZNAS DIY via Entrepreneurship Podcast'
    },
    date: '10 Februari 2026',
    category: 'Kolaborasi',
    author: 'Tim Media EC',
    thumbnail: '/images/podcast.jpg',
    summary: {
      id: 'Program Sky Garden Bites Café dan divisi media EC menggelar sesi podcast khusus bersama perwakilan BAZNAS DIY untuk mengulas pemberdayaan ekonomi umat berbasis pemuda.',
      en: 'Sky Garden Bites Café and the EC media division held a dedicated podcast session with BAZNAS DIY representatives discussing youth-driven economic empowerment.'
    },
    content: `
Entrepreneurs Club (EC) Universitas Nahdlatul Ulama Yogyakarta terus memperluas jejaring kemitraan strategis. Pada kesempatan terbaru, EC berkolaborasi dengan Badan Amil Zakat Nasional (BAZNAS) D.I. Yogyakarta dalam produksi episode podcast wirausaha bertajuk "Membangun Kemandirian Ekonomi Berkelanjutan Melalui Ekosistem Kampus".

Acara ini berlangsung di studio kreatif EC dan area Sky Garden Café. Kolaborasi ini tidak hanya membahas pentingnya literasi finansial dan kewirausahaan sosial bagi mahasiswa, tetapi juga membuka peluang pendampingan dan program inkubasi wirausaha muda produktif di lingkungan kampus.

Ketua Entrepreneurs Club menyampaikan bahwa sinergi antarlembaga seperti ini memberikan pemahaman berharga bagi anggota mengenai bagaimana sebuah bisnis tidak hanya menghasilkan profit, namun juga memberi maslahat sosial bagi masyarakat sekitar.
    `
  },
  {
    id: 'news-2',
    slug: 'pengembangan-unit-konsinyasi-koperasi-mahasiswa',
    title: {
      id: 'Perluas Jangkauan Produk Mahasiswa, EC Tingkatkan Mitra Konsinyasi Bersama KOPMA',
      en: 'Expanding Student Market Reach: EC Boosts Consignment Partnerships with Student Cooperative'
    },
    date: '24 Januari 2026',
    category: 'Program',
    author: 'Divisi Bisnis EC',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    summary: {
      id: 'Sistem konsinyasi EC mencatat kenaikan penjualan produk cemilan dan merchandise mahasiswa berkat optimalisasi etalase terpadu di Koperasi Mahasiswa.',
      en: 'The EC consignment system recorded increased sales for student snacks and merchandise through consolidated shelf displays in the university coop.'
    },
    content: `
Program Konsinyasi Entrepreneurs Club kembali membuktikan efektivitasnya sebagai inkubator distribusi produk mahasiswa. Melalui kerja sama erat bersama Koperasi Mahasiswa UNU Yogyakarta, kini anggota dan mahasiswa umum dapat menitipkan produk mereka dengan pencatatan digital yang transparan.

Seluruh produk yang masuk melewati kurasi higienitas, standar kemasan, dan penentuan harga yang bersaing. Program ini memotivasi mahasiswa agar percaya diri meluncurkan produk buatan sendiri tanpa terbebani biaya sewa toko fisik.
    `
  },
  {
    id: 'news-3',
    slug: 'sukses-kids-playdate-edukasi-wirausaha-kreatif',
    title: {
      id: 'Keceriaan dan Pembelajaran Berpadu dalam Proyek EO Kids-Playdate',
      en: 'Joy and Learning Combine in the EO Kids-Playdate Project'
    },
    date: '15 Desember 2025',
    category: 'Kegiatan',
    author: 'Divisi Event EC',
    thumbnail: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    summary: {
      id: 'Mahasiswa pengelola EO Kids-Playdate sukses menggelar wahana sensorik dan motorik bagi puluhan anak usia dini dengan respon hangat dari para orang tua.',
      en: 'The student team behind EO Kids-Playdate successfully hosted a sensory and motor activity day for dozens of young children, earning heartfelt parent feedback.'
    },
    content: `
Divisi Event Organizer EC berhasil mewujudkan inisiatif edutainment bertajuk "Kids-Playdate: Creative Little Explorers". Menggabungkan permainan sensory-play, kreasi seni clay, serta storytelling inspiratif, kegiatan ini melatih kepemimpinan tim mahasiswa dalam mengelola operasional event berskala keluarga secara profesional.
    `
  }
];

export const achievementsData = [
  {
    id: 'ach-1',
    title: {
      id: 'Inisiasi & Peluncuran 6 Unit Program Kewirausahaan Mandiri',
      en: 'Initiation & Launch of 6 Sustainable Student Entrepreneurship Units'
    },
    year: '2025 - 2026',
    category: 'Works & Creations',
    categoryEn: 'Works & Creations',
    desc: {
      id: 'Berhasil mengintegrasikan konsinyasi, affiliate marketing, Sky Garden Café, EO Kids-Playdate, merchandise resmi, dan konveksi busana.',
      en: 'Successfully integrating consignment, affiliate marketing, Sky Garden Café, Kids-Playdate EO, official merchandise, and garment manufacturing.'
    },
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ach-2',
    title: {
      id: 'Kemitraan Strategis Podcast Bersama BAZNAS DIY',
      en: 'Strategic Podcast Production Partnership with BAZNAS DIY'
    },
    year: '2025',
    category: 'Achievements',
    categoryEn: 'Achievements',
    desc: {
      id: 'Dipercaya memproduksi program media audio-visual edukasi kewirausahaan sosial dan pemberdayaan ekonomi berbasis komunitas.',
      en: 'Entrusted with producing educational audio-visual media on social entrepreneurship and community economic development.'
    },
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ach-3',
    title: {
      id: 'Penyelenggaraan Seri Workshop & Pelatihan Skill Bisnis Mahasiswa',
      en: 'Execution of University-wide Student Business Skills Workshop Series'
    },
    year: '2025',
    category: 'Achievements',
    categoryEn: 'Achievements',
    desc: {
      id: 'Menjangkau ratusan peserta mahasiswa lintas jurusan untuk meningkatkan kemampuan digital marketing, pembukuan sederhana, dan pitching ide.',
      en: 'Empowering hundreds of students across diverse majors with digital marketing skills, bookkeeping, and venture pitching.'
    },
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ach-4',
    title: {
      id: 'Rintisan Unit Merchandise & Konveksi Terpercaya Civitas Kampus',
      en: 'Founding of Campus-Trusted Merchandise & Apparel Production Hub'
    },
    year: '2024 - 2026',
    category: 'Works & Creations',
    categoryEn: 'Works & Creations',
    desc: {
      id: 'Memproduksi ratusan seragam PDH, jaket varsity, tumbler grafir, dan buket wisuda dengan penilaian kepuasan konsumen tinggi.',
      en: 'Delivering hundreds of organizational PDH shirts, varsity jackets, engraved tumblers, and graduation bouquets with high client satisfaction.'
    },
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
  }
];

export const galleryData = [
  {
    id: 1,
    title: { id: 'Diskusi Ide & Brainstorming Tim', en: 'Idea Brainstorming Session' },
    category: 'Kolaborasi',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: { id: 'Sesi Podcast Wirausaha Bersama Praktisi', en: 'Podcast Session with Practitioners' },
    category: 'Podcast',
    year: '2025',
    image: '/images/podcast.jpg'
  },
  {
    id: 3,
    title: { id: 'Aktivitas Kids-Playdate Project', en: 'Kids-Playdate Project Activity' },
    category: 'Event',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: { id: 'Pameran & Bazaar Produk Mahasiswa', en: 'Student Products Campus Bazaar' },
    category: 'Exhibition',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: { id: 'Suasana Rooftop Sky Garden Café', en: 'Rooftop Sky Garden Café Ambience' },
    category: 'F&B Café',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: { id: 'Produksi & Quality Control Konveksi', en: 'Garment Production & Quality Control' },
    category: 'Konveksi',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
  }
];

export const partnersData = [
  {
    id: 'prt-1',
    name: 'Koperasi Mahasiswa (KOPMA) UNU Yogyakarta',
    type: 'Mitra Retail & Distribusi',
    typeEn: 'Retail & Distribution Partner',
    desc: 'Kolaborasi penempatan etalase produk konsinyasi makanan dan merchandise karya mahasiswa di gerai KOPMA kampus.',
    logoText: 'KOPMA UNU',
    category: 'Retail'
  },
  {
    id: 'prt-2',
    name: 'BAZNAS D.I. Yogyakarta',
    type: 'Mitra Kolaborasi Program & Media',
    typeEn: 'Program & Media Partner',
    desc: 'Kerja sama strategis dalam podcast edukasi kewirausahaan sosial dan penguatan ekonomi generasi muda.',
    logoText: 'BAZNAS DIY',
    category: 'Institution'
  },
  {
    id: 'prt-3',
    name: 'Inkubator Bisnis & Kewirausahaan UNU',
    type: 'Mitra Pembina Akademik',
    typeEn: 'Academic Incubation Partner',
    desc: 'Sinergi pembinaan ide bisnis mahasiswa, mentoring proposal kompetisi, dan fasilitasi pendanaan awal.',
    logoText: 'INKUBATOR UNU',
    category: 'Academic'
  },
  {
    id: 'prt-4',
    name: 'Jejaring Vendor Konveksi & Sablon Yogyakarta',
    type: 'Mitra Produksi & Pengrajin',
    typeEn: 'Production & Vendor Network',
    desc: 'Kerja sama manufaktur busana, bordir komputer presisi, dan sablon berkualitas untuk seragam dan busana kampus.',
    logoText: 'VENDOR GARMENT',
    category: 'Production'
  }
];

export const recruitmentFaq = [
  {
    question: {
      id: 'Siapa saja yang boleh mendaftar menjadi anggota EC?',
      en: 'Who is eligible to apply for EC membership?'
    },
    answer: {
      id: 'Seluruh mahasiswa aktif Universitas Nahdlatul Ulama Yogyakarta dari semua program studi dan angkatan dipersilakan mendaftar. Yang terpenting adalah komitmen, semangat belajar, dan antusiasme di dunia wirausaha.',
      en: 'All active undergraduate students of Universitas Nahdlatul Ulama Yogyakarta across all faculties and batches are welcome to join. Commitment and passion for learning entrepreneurship are what matter most.'
    }
  },
  {
    question: {
      id: 'Apakah harus sudah memiliki bisnis sebelum bergabung?',
      en: 'Do I already need to own a business before joining?'
    },
    answer: {
      id: 'Tidak harus. EC adalah wadah belajar dari nol. Bagi yang baru memiliki ide atau sekadar ingin mengeksplorasi wirausaha, kami menyediakan ruang mentoring, eksekusi tim, dan kelas pembekalan.',
      en: 'Not at all! EC is a learning ground. Whether you only have a raw idea or just want to explore entrepreneurship, we offer structured mentorship, team projects, and hands-on incubation.'
    }
  },
  {
    question: {
      id: 'Apa saja divisi yang dapat dipilih?',
      en: 'What divisions can I apply for?'
    },
    answer: {
      id: 'Terdapat divisi Business Development (Konsinyasi & F&B), Creative & Media (Desain, Video, & Podcast), Event & Operations (EO Kids-Playdate & Workshop), serta PR & Sponsorship (Kemitraan & Hubungan Eksternal).',
      en: 'You can choose between Business Development (Consignment & F&B), Creative & Media (Design, Video, Podcast), Event & Operations (EO Projects & Workshops), and PR & Sponsorship (Partnerships & External Relations).'
    }
  },
  {
    question: {
      id: 'Bagaimana tahapan seleksi rekrutmen?',
      en: 'What are the recruitment selection stages?'
    },
    answer: {
      id: 'Tahapan meliputi pengisian formulir pendaftaran daring, pengunggahan berkas singkat, wawancara santai (sharing motivasi), dan welcoming session bagi anggota terpilih.',
      en: 'The stages include an online registration form submission, a brief profile overview, a casual motivational interview, and a welcoming session for onboarded members.'
    }
  }
];
