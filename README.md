# Entrepreneurs Club — Official Website

Website resmi **Entrepreneurs Club (EC) Universitas Nahdlatul Ulama Yogyakarta** merupakan platform digital yang dirancang untuk memperkenalkan identitas organisasi, menyampaikan informasi kegiatan, menampilkan program kewirausahaan, serta membangun koneksi dengan mahasiswa, mitra, dan masyarakat.

Website ini menjadi pusat informasi dan representasi digital Entrepreneurs Club dalam mengembangkan semangat kewirausahaan, kreativitas, kolaborasi, dan inovasi di lingkungan mahasiswa.

## 🎯 About Entrepreneurs Club

Entrepreneurs Club merupakan komunitas mahasiswa yang menjadi ruang untuk mengenal dunia kewirausahaan, mengembangkan potensi, mengeksplorasi ide kreatif, serta membangun peluang bisnis melalui kolaborasi dan inovasi.

Melalui website ini, pengunjung dapat mengenal lebih jauh tentang organisasi, mengikuti perkembangan kegiatan, melihat program unggulan, menjelajahi katalog produk, dan memperoleh informasi mengenai peluang bergabung maupun berkolaborasi dengan Entrepreneurs Club.

## 🌐 Website Overview

Website Entrepreneurs Club dikembangkan menggunakan konsep **Multi-Page Website**, yaitu setiap bagian utama memiliki halaman tersendiri dengan fungsi dan konten yang spesifik.

Halaman Home berperan sebagai beranda yang menampilkan gambaran umum organisasi dan preview dari berbagai konten. Pengunjung dapat melanjutkan ke halaman detail melalui navigasi utama maupun tombol pada setiap section.

### Main Pages

| Halaman | Route | Deskripsi |
|---|---|---|
| Home | `/` | Beranda dan informasi utama Entrepreneurs Club. |
| About EC | `/about` | Profil, sejarah, visi, misi, dan perjalanan organisasi. |
| Program | `/program` | Informasi program dan kegiatan kewirausahaan. |
| Event | `/event` | Informasi event, kegiatan mendatang, dan dokumentasi. |
| Rekrutmen | `/rekrutmen` | Informasi dan pendaftaran anggota baru. |
| Katalog Produk | `/produk` | Katalog produk unggulan Entrepreneurs Club. |
| Berita | `/berita` | Informasi, berita, dan artikel terbaru. |
| Achievement | `/achievement` | Dokumentasi pencapaian, penghargaan, dan karya. |
| Mitra | `/mitra` | Informasi mitra dan peluang kerja sama. |

## ✨ Main Features

### 1. Home Page
Halaman utama yang memperkenalkan Entrepreneurs Club melalui:
- Hero section dengan informasi organisasi dan showcase upcoming events.
- Event updates.
- Recruitment banner.
- Statistik organisasi.
- About EC preview.
- The Story Behind EC.
- Featured programs.
- Featured products.
- Activity documentation.
- Latest news.
- Social media highlights.
- Achievements and works.
- Our partners.
- Join Our Community.

### 2. Organization Profile
Menyediakan informasi lengkap mengenai Entrepreneurs Club, termasuk profil, latar belakang, sejarah, visi, misi, nilai organisasi, dan kontribusi.

### 3. Program Information
Menampilkan program unggulan Entrepreneurs Club, seperti:
- Konsinyasi.
- Affiliate.
- Sky Garden Bites Café.
- EO Kids-Playdate Project.
- Merchandise.
- Konveksi.

### 4. Event Information
Menyediakan informasi kegiatan, event mendatang, dokumentasi kegiatan sebelumnya, detail acara, serta pendaftaran event apabila tersedia.

### 5. Recruitment
Menjadi pusat informasi rekrutmen anggota baru, meliputi persyaratan, tahapan pendaftaran, informasi divisi, dan formulir pendaftaran.

### 6. Product Catalog
Menampilkan produk unggulan Entrepreneurs Club lengkap dengan foto, kategori, deskripsi, harga jika tersedia, serta informasi pemesanan.

### 7. News and Articles
Menyediakan informasi terbaru mengenai aktivitas, perkembangan, dan berbagai kegiatan Entrepreneurs Club.

### 8. Achievements and Works
Menampilkan pencapaian organisasi, penghargaan, proyek, dan hasil kreativitas anggota.

### 9. Partnership
Menyediakan informasi mitra serta sarana untuk mengajukan peluang kolaborasi dan kerja sama.

### 10. Bilingual System
Website mendukung dua bahasa:
- Bahasa Indonesia (ID).
- English (EN).

Pengunjung dapat mengganti bahasa melalui language switcher. Preferensi bahasa disimpan agar tetap digunakan ketika halaman dimuat ulang.

## 🏗️ Frontend Architecture

Website menggunakan pendekatan component-based architecture dengan pemisahan antara halaman, komponen antarmuka, data, aset, dan konfigurasi bahasa.

Arsitektur ini bertujuan menjaga kode tetap terstruktur, reusable, mudah dipelihara, dan mudah dikembangkan.

### Project Structure

```text
client/
├── public/
│   └── assets/
│       ├── images/
│       └── logo/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar
│   │   │   ├── Footer
│   │   │   └── MobileNavigation
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection
│   │   │   ├── EventShowcase
│   │   │   ├── AboutPreview
│   │   │   └── FeaturedPrograms
│   │   │
│   │   └── common/
│   │       ├── SectionHeader
│   │       ├── EventCard
│   │       ├── ProgramCard
│   │       └── CTASection
│   │
│   ├── pages/
│   │   ├── Home
│   │   ├── About
│   │   ├── Program
│   │   ├── Event
│   │   ├── Recruitment
│   │   ├── Products
│   │   ├── News
│   │   ├── Achievement
│   │   └── Partners
│   │
│   ├── data/
│   │   ├── events
│   │   ├── programs
│   │   ├── products
│   │   ├── news
│   │   └── partners
│   │
│   ├── locales/
│   │   ├── id
│   │   └── en
│   │
│   ├── App
│   ├── main
│   └── styles/
│
├── package.json
└── README.md
```

*Catatan: Struktur di atas merupakan gambaran arsitektur yang digunakan sebagai acuan. Sesuaikan nama file dan ekstensi dengan implementasi aktual project.*

## 🧩 Architecture Explanation

| Direktori | Tanggung Jawab |
|---|---|
| `pages/` | Menyimpan halaman utama website berdasarkan route. |
| `components/` | Menyimpan komponen UI yang dapat digunakan kembali. |
| `components/layout/` | Mengatur layout global seperti navbar dan footer. |
| `components/home/` | Menyimpan komponen khusus halaman Home. |
| `components/common/` | Menyimpan komponen umum seperti card dan section header. |
| `assets/` | Menyimpan gambar, ikon, font, dan aset visual. |
| `data/` | Mengelola data program, event, produk, berita, dan mitra. |
| `locales/` | Menyimpan terjemahan Bahasa Indonesia dan Inggris. |
| `styles/` | Menyimpan styling dan pengaturan visual website. |

## 🔄 How the Architecture Works

Secara umum, alur kerja frontend website adalah sebagai berikut:

1. Pengunjung membuka website melalui browser.
2. Sistem routing menentukan halaman berdasarkan URL yang diakses.
3. Halaman yang sesuai dimuat dari direktori `pages/`.
4. Halaman menyusun komponen antarmuka dari direktori `components/`.
5. Komponen mengambil informasi dari direktori `data/` sesuai kebutuhan.
6. Sistem bahasa mengambil teks berdasarkan bahasa yang dipilih dari `locales/`.
7. Seluruh komponen ditampilkan sebagai halaman website yang responsif.

Dengan pendekatan ini, satu komponen dapat digunakan kembali pada beberapa halaman tanpa harus menulis ulang struktur UI yang sama.

## 🎨 Design System

Website mengadaptasi konsep visual **Verdant Sky** dengan karakter desain:
- Natural green color palette.
- Modern typography.
- Clean and minimal layout.
- Editorial visual composition.
- Consistent spacing and rounded elements.
- Subtle animations and interactions.
- Responsive user interface.

Fokus desain adalah menciptakan pengalaman digital yang modern, profesional, dan mencerminkan karakter Entrepreneurs Club sebagai komunitas kewirausahaan mahasiswa.

## 📱 Responsive Design

Website dirancang agar dapat diakses melalui berbagai perangkat:
- Desktop.
- Laptop.
- Tablet.
- Smartphone.

Setiap halaman menyesuaikan tata letak, ukuran teks, navigasi, gambar, dan komponen agar tetap nyaman digunakan pada berbagai ukuran layar.

## 🚀 Development Goals

Pengembangan website ini berfokus pada beberapa tujuan utama:

1. Meningkatkan visibilitas dan identitas digital Entrepreneurs Club.
2. Mempermudah akses informasi organisasi dan kegiatan.
3. Memperkenalkan program kewirausahaan dan produk unggulan.
4. Menjadi media publikasi berita, dokumentasi, dan pencapaian.
5. Memperluas jaringan kolaborasi dan kemitraan.
6. Menyediakan akses informasi dalam Bahasa Indonesia dan Inggris.
7. Menciptakan platform digital yang mudah dikembangkan dan dipelihara.

## 🛠️ Getting Started

### Prerequisites

Pastikan perangkat telah memiliki:
- Node.js.
- npm.
- Git.

### Installation

Clone repository:

```bash
git clone <repository-url>
```

Masuk ke direktori frontend:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan oleh terminal untuk melihat website.

## 📌 Development Notes

- Gunakan komponen reusable untuk menjaga konsistensi UI.
- Pisahkan data dari tampilan agar konten mudah diperbarui.
- Gunakan aset resmi Entrepreneurs Club.
- Hindari penggunaan informasi organisasi yang belum terverifikasi.
- Pastikan seluruh route dan navigasi berfungsi.
- Pertahankan konsistensi desain pada setiap halaman.
- Lakukan pengujian sebelum melakukan deployment.

---

**Entrepreneurs Club — Universitas Nahdlatul Ulama Yogyakarta**

*Explore Ideas. Build Connections. Create Impact.*
