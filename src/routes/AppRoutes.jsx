import { Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/user/Home';
import About from '../pages/user/About';
import Program from '../pages/user/Program';
import Event from '../pages/user/Event';
import EventDetail from '../pages/user/EventDetail';
import EventRegister from '../pages/user/EventRegister';
import Recruitment from '../pages/user/Recruitment';
import ProductCatalog from '../pages/user/ProductCatalog';
import News from '../pages/user/News';
import NewsDetail from '../pages/user/NewsDetail';
import Achievement from '../pages/user/Achievement';
import Partner from '../pages/user/Partner';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="program" element={<Program />} />
        <Route path="event" element={<Event />} />
        <Route path="event/:slug" element={<EventDetail />} />
        <Route path="event/:slug/daftar" element={<EventRegister />} />
        <Route path="rekrutmen" element={<Recruitment />} />
        <Route path="produk" element={<ProductCatalog />} />
        <Route path="berita" element={<News />} />
        <Route path="berita/:slug" element={<NewsDetail />} />
        <Route path="achievement" element={<Achievement />} />
        <Route path="mitra" element={<Partner />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
