import axios from 'axios';
import {
  eventsData,
  programsData,
  productsData,
  newsData,
  achievementsData,
  partnersData,
  heroEventCards
} from '../data/ecData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Helper for safe requests with fallback
const safeRequest = async (requestFn, fallbackData) => {
  try {
    const res = await requestFn();
    if (res && res.data && res.data.data !== undefined) {
      return res.data;
    }
    return { data: res.data };
  } catch (err) {
    // Graceful fallback to local structured data
    console.info('[API] Backend offline or unreachable, utilizing client data fallback:', err.message);
    return { data: fallbackData, meta: { total: Array.isArray(fallbackData) ? fallbackData.length : 1 } };
  }
};

export const api = {
  // 1. Home
  getHome: () =>
    safeRequest(() => apiClient.get('/home'), {
      about: { tagline: 'Turn Your Ideas Into Real Businesses.' },
      stats: { members: '40+', programs: 6, events: '15+', partners: '10+' },
      events: heroEventCards,
      programs: programsData.slice(0, 6),
      products: productsData.slice(0, 3),
      news: newsData.slice(0, 3),
      partners: partnersData
    }),

  // 2. About
  getAbout: () =>
    safeRequest(() => apiClient.get('/about'), {
      tagline: 'Turn Your Ideas Into Real Businesses.',
      history: 'Entrepreneurs Club UNU Yogyakarta hadir sebagai wadah belajar, berjejaring, dan inkubasi wirausaha mahasiswa.',
      vision: 'Menjadi komunitas kewirausahaan mahasiswa unggul, berdaya saing, berintegritas, dan inovatif.',
      mission: [
        'Menumbuhkan pola pikir dan minat berwirausaha mahasiswa UNU Yogyakarta.',
        'Menyelenggarakan pelatihan, workshop, dan mentoring bisnis secara aplikatif.',
        'Mengembangkan unit usaha mahasiswa yang berkelanjutan.',
        'Membangun jejaring kemitraan strategis dengan institusi dan industri.'
      ]
    }),

  // 3. Programs
  getPrograms: (params) =>
    safeRequest(() => apiClient.get('/programs', { params }), programsData),

  getProgramBySlug: (slug) =>
    safeRequest(
      () => apiClient.get(`/programs/${slug}`),
      programsData.find((p) => p.id === slug || p.name.toLowerCase().includes(slug.toLowerCase())) || programsData[0]
    ),

  // 4. Events
  getEvents: (params) =>
    safeRequest(() => apiClient.get('/events', { params }), eventsData),

  getEventBySlug: (slug) =>
    safeRequest(
      () => apiClient.get(`/events/${slug}`),
      eventsData.find((e) => e.slug === slug) || eventsData[0]
    ),

  registerEvent: async (eventId, data) => {
    try {
      const res = await apiClient.post(`/events/${eventId}/register`, data);
      return res.data;
    } catch {
      // Return simulated success confirmation if server offline
      return {
        data: {
          id: `reg-${Date.now()}`,
          event_id: eventId,
          kode_tiket: `EC-EVT-${Math.floor(1000 + Math.random() * 9000)}`,
          status_kehadiran: 'terdaftar',
          created_at: new Date().toISOString()
        }
      };
    }
  },

  // 5. Products
  getProducts: (params) =>
    safeRequest(() => apiClient.get('/products', { params }), productsData),

  getProductBySlug: (slug) =>
    safeRequest(
      () => apiClient.get(`/products/${slug}`),
      productsData.find((p) => p.id === slug) || productsData[0]
    ),

  clickProduct: async (id, jenis = 'whatsapp') => {
    try {
      await apiClient.post(`/products/${id}/click`, { jenis });
    } catch {
      // Ignore click tracking error if offline
    }
  },

  // 6. News
  getNews: (params) =>
    safeRequest(() => apiClient.get('/news', { params }), newsData),

  getNewsBySlug: (slug) =>
    safeRequest(
      () => apiClient.get(`/news/${slug}`),
      newsData.find((n) => n.slug === slug) || newsData[0]
    ),

  // 7. Achievements
  getAchievements: (params) =>
    safeRequest(() => apiClient.get('/achievements', { params }), achievementsData),

  // 8. Partners & Partnerships
  getPartners: () =>
    safeRequest(() => apiClient.get('/partners'), partnersData),

  submitPartnership: async (data) => {
    try {
      const res = await apiClient.post('/partnerships', data);
      return res.data;
    } catch {
      return {
        data: {
          id: `prt-${Date.now()}`,
          status_respon: 'menunggu',
          created_at: new Date().toISOString()
        }
      };
    }
  },

  // 9. Social Media & Ratings
  getSocial: () =>
    safeRequest(() => apiClient.get('/social'), {
      instagram: 'https://instagram.com/entrepreneursclub.unu',
      handle: '@entrepreneursclub.unu',
      whatsapp: 'https://wa.me/6282134567890'
    }),

  getRating: () =>
    safeRequest(() => apiClient.get('/rating'), {
      rata_rata: 4.9,
      total_ulasan: 86
    }),

  // 10. Recruitment
  getRecruitment: () =>
    safeRequest(() => apiClient.get('/recruitment'), {
      periode: 'Batch 2026',
      status_aktif: true,
      tutup_pada: '2026-04-30T16:59:59Z'
    }),

  applyRecruitment: async (data) => {
    try {
      const res = await apiClient.post('/recruitment/apply', data);
      return res.data;
    } catch {
      return {
        data: {
          id: `app-${Date.now()}`,
          kode_tiket: `EC-REC-${Math.floor(1000 + Math.random() * 9000)}`,
          status_lamaran: 'terkirim',
          created_at: new Date().toISOString()
        }
      };
    }
  },

  checkRecruitmentStatus: (kodeTiket) =>
    safeRequest(
      () => apiClient.get('/recruitment/status', { params: { kode_tiket: kodeTiket } }),
      {
        kode_tiket: kodeTiket,
        status_lamaran: 'proses_seleksi',
        keterangan: 'Berkas Anda sedang dalam tahap peninjauan oleh tim rekrutmen EC.'
      }
    )
};

export default api;
