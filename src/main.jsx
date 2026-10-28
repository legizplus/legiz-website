import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { Building2, GraduationCap, Home, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { ArticlesPage, ArticlePage } from './articleSystem.jsx';
import './styles.css';

const navItems = [
  ['Tentang', '/tentang'],
  ['Layanan', '/layanan'],
  ['Artikel', '/artikel'],
  ['Nilai', '/nilai'],
  ['Tim', '/tim'],
  ['Proses', '/proses'],
  ['Kontak', '/kontak'],
];

const services = [
  {
    icon: Building2,
    title: 'Corporate & Legality Consulting',
    intro: 'Pendampingan hukum korporasi dan pengelolaan legalitas usaha secara menyeluruh.',
    items: ['Pendirian CV dan PT, NIB, OSS, SIUP, TDG', 'Pendaftaran merek, hak cipta, halal, BPOM, PIRT', 'Kontrak bisnis, kerja sama usaha, dan peraturan perusahaan'],
  },
  {
    icon: Home,
    title: 'Property Consulting',
    intro: 'Pendampingan hukum properti dan pertanahan untuk memastikan kepastian aset.',
    items: ['Pengecekan legalitas tanah, bangunan, dan pemilik', 'Analisis NJOP, kewajiban pajak, dan dokumen pertanahan', 'PBG, SLF, reklame, dan pendampingan transaksi properti'],
  },
  {
    icon: GraduationCap,
    title: 'Research & Education Consulting',
    intro: 'Riset, edukasi, dan konsultasi akademik berbasis integritas ilmiah.',
    items: ['Konsultasi dan review skripsi atau karya ilmiah', 'Pendampingan publikasi jurnal nasional dan SINTA', 'Pendampingan LKTI, esai akademik, dan riset hukum'],
  },
];

const values = [
  ['Experienced and Competent Team', 'Tim profesional dengan pemahaman mendalam di bidang hukum, perizinan, properti, dan riset akademik.'],
  ['Integrated Compliance Approach', 'Solusi menyeluruh yang memahami keterkaitan antara regulasi, praktik bisnis, dan kebutuhan klien.'],
  ['Solution-Oriented and Effective', 'Analisis komprehensif untuk menghasilkan solusi yang aplikatif, tepat sasaran, dan relevan.'],
  ['Cost Efficiency with Quality Assurance', 'Efisiensi biaya dengan proses yang transparan, efektif, dan tetap menjaga kualitas layanan.'],
];

const team = [
  { name: 'Antonius Agung Satyaning Tyas', role: 'Core Team', initials: 'AS', photo: '' },
  { name: 'Hanif Yuda Kartika', role: 'Core Team', initials: 'HY', photo: '' },
  { name: 'Nilam Amalia Fatiha', role: 'Core Team', initials: 'NA', photo: '' },
  { name: 'Norma Ifada', role: 'Support Team', initials: 'NI', photo: '' },
  { name: 'Hafiz Noor', role: 'Support Team', initials: 'HN', photo: '' },
];

const steps = [
  ['01', 'Konsultasi Awal', 'Memahami latar belakang kebutuhan, tujuan layanan, dan gambaran umum permasalahan.'],
  ['02', 'Analisis Kebutuhan', 'Identifikasi regulasi, risiko hukum, kelengkapan dokumen, dan alternatif strategi.'],
  ['03', 'Penawaran & Kesepakatan', 'Ruang lingkup pekerjaan, timeline, skema biaya, dan kesepakatan kerja transparan.'],
  ['04', 'Pelaksanaan Layanan', 'Implementasi profesional sesuai standar kepatuhan hukum dan kesepakatan layanan.'],
  ['05', 'Monitoring & Penyelesaian', 'Koordinasi progres, pengendalian proses, dan penyelesaian hingga target tercapai.'],
  ['06', 'Laporan Hasil', 'Pertanggungjawaban, dokumentasi, dan evaluasi atas layanan yang diberikan.'],
];

const sectionImages = {
  about: '/images/backgrounds/about-consultation.jpg',
  services: '/images/backgrounds/services-document.jpg',
  process: '/images/backgrounds/process-meeting.jpg',
};

function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/" aria-label="LEGIZ.ID home">
        <img src="/images/logo/legiz-logo.png" alt="LEGIZ.ID" />
      </Link>
      <nav className="desktop-nav" aria-label="Navigasi utama">
        {navItems.map(([label, path]) => (
          <NavLink key={path} to={path}>{label}</NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <a className="pill-link" href="https://wa.me/6285156316951">WhatsApp</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Integrated Legal Partner</p>
        <h1>Adding Value Through <em>Law</em>, Strategy, and Knowledge</h1>
        <p className="hero-lead">PT Legal Izin Plus Indonesia mendampingi bisnis, aset properti, serta kebutuhan riset hukum melalui layanan yang terintegrasi, cermat, dan berorientasi pada kepastian hukum.</p>
        <div className="hero-actions">
          <a className="button primary" href="https://wa.me/6285156316951"><MessageCircle size={17} /> Konsultasi Sekarang</a>
          <Link className="button secondary" to="/layanan">Lihat Layanan</Link>
        </div>
        <div className="proof-grid" aria-label="Ringkasan perusahaan">
          <div><strong>2025</strong><span>Berdiri di Yogyakarta</span></div>
          <div><strong>3</strong><span>Unit layanan terintegrasi</span></div>
          <div><strong>ID</strong><span>Layanan digital seluruh Indonesia</span></div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, children, light = false }) {
  return <div className={`section-header ${light ? 'light' : ''}`}><p className="section-kicker">{kicker}</p><div><h2>{title}</h2>{children && <p>{children}</p>}</div></div>;
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="home-summary">
        <SectionHeader kicker="LEGIZ.ID" title="Mitra hukum terintegrasi untuk kebutuhan legal, properti, dan riset.">
          Website ini kini dipisahkan menjadi beberapa halaman agar informasi lebih mudah dibaca dan navigasi lebih jelas.
        </SectionHeader>
        <figure className="section-photo clean-caption home-photo">
          <img src={sectionImages.process} alt="Diskusi kerja profesional dalam proses pendampingan hukum" />
          <figcaption><strong>Setiap tahapan didampingi dengan pendekatan yang cermat dan terukur.</strong></figcaption>
        </figure>
        <div className="summary-grid">
          <Link to="/tentang"><span>01</span><strong>Tentang Kami</strong><small>Profil dan pendekatan LEGIZ.ID.</small></Link>
          <Link to="/layanan"><span>02</span><strong>Layanan</strong><small>Corporate, property, research & education.</small></Link>
          <Link to="/kontak"><span>03</span><strong>Kontak</strong><small>Konsultasi melalui WhatsApp atau email.</small></Link>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="about page-section">
      <SectionHeader kicker="Why Legal Izin Plus Indonesia?" title="An integrated legal partner for business, assets, and legal knowledge." />
      <div className="about-grid">
        <figure className="image-card about-photo">
          <img src={sectionImages.about} alt="Sesi konsultasi profesional dengan klien LEGIZ" />
        </figure>
        <div className="about-copy">
          <div className="about-intro">
            <span>Client-focused advisory</span>
            <strong>Legal clarity</strong>
          </div>
          <p>Dalam lanskap bisnis yang terus berkembang, kepastian hukum menjadi fondasi utama bagi keberlanjutan usaha, perlindungan aset, dan kualitas pengambilan keputusan. Tanpa pendekatan hukum yang terintegrasi, risiko dapat muncul secara tersembunyi dan berdampak pada stabilitas jangka panjang.</p>
          <p>Legal Izin Plus Indonesia hadir sebagai mitra hukum terintegrasi yang mendampingi klien dalam layanan corporate, property, serta legal research and education consulting. Setiap langkah dijalankan secara cermat, terukur, dan berkelanjutan.</p>
          <blockquote>“Kepatuhan hukum bukan sekadar formalitas administratif, melainkan fondasi pertumbuhan jangka panjang.”</blockquote>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="practice page-section">
      <SectionHeader kicker="Our Practice Areas" title="Three connected service units, one strategic legal framework.">Tiga unit layanan LEGIZ dirancang untuk memberikan solusi yang komprehensif, relevan, dan kontekstual bagi klien di berbagai sektor.</SectionHeader>
      <figure className="section-photo service-photo clean-caption">
        <img src={sectionImages.services} alt="Peninjauan dokumen legal dan kontrak bisnis" />
        <figcaption><strong>Setiap dokumen ditinjau dengan pendekatan legal, bisnis, dan kepatuhan.</strong></figcaption>
      </figure>
      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return <article className="service-card" key={service.title} data-index={`0${index + 1}`}><Icon className="service-icon" strokeWidth={1.5}/><h3>{service.title}</h3><p>{service.intro}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul></article>;
        })}
      </div>
    </section>
  );
}

function ValuesPage() {
  return (
    <section className="values page-section">
      <SectionHeader light kicker="Our Values" title="Professional integrity with an integrated compliance approach.">Nilai berikut menjadi fondasi kerja, komitmen etis, dan standar pengambilan keputusan dalam membangun kepercayaan jangka panjang dengan klien.</SectionHeader>
      <div className="value-grid">{values.map(([title, desc], i) => <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
    </section>
  );
}

function TeamPage() {
  return (
    <section className="team page-section">
      <SectionHeader kicker="Our Integrity Team" title="A structured team committed to ethics, confidentiality, and service quality." />
      <div className="team-strip">{team.map((m) => (
        <article key={m.name} className={`person-card ${m.photo ? 'has-photo' : ''}`} data-initials={m.initials}>
          {m.photo && <img className="person-photo" src={m.photo} alt={m.name} loading="lazy" />}
          <h3>{m.name}</h3>
          <p>{m.role}</p>
        </article>
      ))}</div>
      <div className="editorial-title">our integrity team</div>
    </section>
  );
}

function ProcessPage() {
  return (
    <section className="process page-section">
      <SectionHeader kicker="How We Work" title="Clear process, accountable result." />
      <figure className="section-photo process-photo clean-caption">
        <img src={sectionImages.process} alt="Diskusi kerja profesional dalam proses analisis kebutuhan hukum" />
        <figcaption><strong>Alur kerja dirancang agar setiap tahapan jelas, terukur, dan mudah dipantau.</strong></figcaption>
      </figure>
      <div className="process-grid">{steps.map(([no, title, desc]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact page-section">
      <p className="eyebrow">Trusted Legal Partner</p>
      <h2>We stand ready as your trusted legal partner.</h2>
      <p>Melalui sistem layanan virtual office, LEGIZ memberikan akses konsultasi dan pendampingan hukum yang efisien, fleksibel, serta menjangkau klien di seluruh Indonesia. Pertemuan langsung tersedia di Daerah Istimewa Yogyakarta dan lokasi lain berdasarkan kesepakatan.</p>
      <div className="hero-actions center"><a className="button primary" href="https://wa.me/6285156316951"><MessageCircle size={17}/> Hubungi via WhatsApp</a><a className="button secondary" href="mailto:legizplus@gmail.com"><Mail size={17}/> Kirim Email</a></div>
      <div className="contact-grid"><div><span>WhatsApp</span><strong>0851-5631-6951</strong></div><div><span>Email</span><strong>legizplus@gmail.com</strong></div></div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="not-found page-section">
      <SectionHeader kicker="404" title="Halaman tidak ditemukan.">Silakan kembali ke halaman utama atau pilih menu navigasi yang tersedia.</SectionHeader>
      <Link className="button primary" to="/">Kembali ke Home</Link>
    </section>
  );
}

function Layout() {
  return (
    <>
      <div className="page-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/artikel" element={<ArticlesPage />} />
            <Route path="/artikel/:slug" element={<ArticlePage />} />
            <Route path="/nilai" element={<ValuesPage />} />
            <Route path="/tim" element={<TeamPage />} />
            <Route path="/proses" element={<ProcessPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <footer><span>© 2026 PT Legal Izin Plus Indonesia / LEGIZ.ID</span><span>Adding Value Through Law, Strategy, and Knowledge</span></footer>
    </>
  );
}

function App() {
  return <BrowserRouter><Layout /></BrowserRouter>;
}

createRoot(document.getElementById('root')).render(<App />);
