"use client";

import { useState } from "react";

const focusAreas = [
  { number: "01", title: "PENDIDIKAN", text: "Mendorong akses belajar yang membantu anak tumbuh dengan bekal yang relevan." },
  { number: "02", title: "LIFE SKILL", text: "Mengembangkan kemampuan praktis untuk menghadapi kehidupan dan dunia kerja." },
  { number: "03", title: "PEMBERDAYAAN", text: "Membuka ruang agar anak dan komunitas dapat berdaya, percaya diri, dan mandiri." },
  { number: "04", title: "INKLUSIVITAS", text: "Membangun kesempatan belajar yang lebih setara, termasuk untuk teman tuli." },
];

const programs = [
  { number: "01", title: "LIFE SKILL UNTUK TEMAN TULI", text: "Program pembekalan life skill untuk membantu teman tuli memiliki kemampuan yang lebih siap untuk menghadapi kehidupan dan dunia kerja.", featured: true },
  { number: "02", title: "PEMBINAAN ANAK YATIM PIATU", text: "[DESKRIPSI PROGRAM AKAN DITAMBAHKAN]" },
  { number: "03", title: "PROGRAM PENDIDIKAN", text: "[DESKRIPSI PROGRAM AKAN DITAMBAHKAN]" },
  { number: "04", title: "PROGRAM PEMBERDAYAAN", text: "[DESKRIPSI PROGRAM AKAN DITAMBAHKAN]" },
];

const newsItems = [
  { number: "01", category: "PENDIDIKAN", title: "[JUDUL ARTIKEL AKAN DITAMBAHKAN]", date: "[TANGGAL]" },
  { number: "02", category: "INKLUSIVITAS", title: "[JUDUL ARTIKEL AKAN DITAMBAHKAN]", date: "[TANGGAL]" },
  { number: "03", category: "PROGRAM", title: "[JUDUL ARTIKEL AKAN DITAMBAHKAN]", date: "[TANGGAL]" },
];

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={label}><span>IMAGE PLACEHOLDER</span><small>{label}</small></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="bp-site">
      <header className="bp-nav-wrap">
        <nav className="bp-nav" aria-label="Navigasi utama">
          <a href="#top" className="bp-wordmark" onClick={closeMenu}><span>BERPIJAR</span><small>YAYASAN BERPIJAR INDONESIA</small></a>
          <div className={`bp-nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#tentang" onClick={closeMenu}>Tentang</a>
            <a href="#program" onClick={closeMenu}>Program</a>
            <a href="#dampak" onClick={closeMenu}>Dampak</a>
            <a href="#kegiatan" onClick={closeMenu}>Kegiatan</a>
            <a href="#artikel" onClick={closeMenu}>Artikel</a>
            <a href="#kontak" onClick={closeMenu}>Kontak</a>
          </div>
          <a className="bp-support" href="#dukung">DUKUNG KAMI <span>↗</span></a>
          <button className={`bp-menu-button ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Tutup menu" : "Buka menu"}><span /><span /></button>
        </nav>
      </header>

      <div id="top" className="bp-page">
        <section className="bp-hero bp-grid-section">
          <div className="bp-hero-copy">
            <p className="bp-eyebrow"><span className="bp-rule" /> YAYASAN BERPIJAR INDONESIA</p>
            <h1>Menyalakan<br /><i>Potensi.</i><br />Membuka<br /><i>Masa Depan.</i></h1>
            <p className="bp-lede">Berpijar hadir untuk mendukung pendidikan, mengembangkan life skill, dan membuka kesempatan bagi anak-anak untuk tumbuh dan menghadapi masa depan.</p>
            <div className="bp-actions"><a className="bp-button bp-button-dark" href="#program">LIHAT PROGRAM <span>→</span></a><a className="bp-text-link" href="#tentang">TENTANG BERPIJAR <span>↗</span></a></div>
          </div>
          <div className="bp-hero-visual"><Placeholder label="GANTI DENGAN FOTO KEGIATAN PENDIDIKAN / TEMAN TULI" className="hero-placeholder" /><div className="bp-hero-index"><b>01 / 04</b><span>EDUCATION<br />SOCIAL IMPACT</span></div><div className="bp-hero-caption">MEMBUKA AKSES<br />UNTUK BERTUMBUH</div></div>
        </section>

        <section className="bp-intro bp-grid-section" id="tentang">
          <div className="bp-section-label"><span>01</span><span className="bp-label-line" />TENTANG BERPIJAR</div>
          <div className="bp-intro-content"><h2>Setiap anak berhak<br />memiliki kesempatan<br /><i>untuk berkembang.</i></h2><div className="bp-intro-side"><p>Yayasan Berpijar Indonesia berfokus pada pendidikan, pengembangan soft skill, life skill, dan pemberdayaan anak. Kami percaya kesempatan untuk belajar dan berkembang perlu dibuka lebih luas, termasuk bagi teman tuli dan anak yatim piatu.</p><a className="bp-text-link" href="#cerita">READ OUR STORY <span>↗</span></a></div></div>
        </section>

        <section className="bp-focus bp-grid-section" id="fokus">
          <div className="bp-section-label light-label"><span>02</span><span className="bp-label-line" />FOKUS KAMI</div>
          <div className="bp-focus-heading"><h2>Bekal untuk<br /><i>hari esok.</i></h2><p>Pendidikan yang baik tidak hanya mengajarkan pengetahuan, tetapi juga membangun keberanian untuk melangkah.</p></div>
          <div className="bp-focus-list">{focusAreas.map((item) => <article className="bp-focus-item" key={item.number}><span className="bp-item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="bp-arrow">↗</span></article>)}</div>
        </section>

        <section className="bp-program bp-grid-section" id="program">
          <div className="bp-section-label"><span>03</span><span className="bp-label-line" />PROGRAM</div>
          <div className="bp-program-heading"><h2>Program yang hadir<br /><i>untuk memberi bekal.</i></h2><p>Beberapa ruang kerja Berpijar untuk mendukung pendidikan dan pemberdayaan. Detail program dapat dikembangkan bersama data yayasan.</p></div>
          <div className="bp-program-list">{programs.map((program) => <article className={`bp-program-item ${program.featured ? "is-featured" : ""}`} key={program.number}><div className="bp-program-number">{program.number}</div><div className="bp-program-main"><h3>{program.title}</h3><p>{program.text}</p></div><span className="bp-arrow">↗</span></article>)}</div>
        </section>

        <section className="bp-stories bp-grid-section" id="kegiatan">
          <div className="bp-section-label"><span>04</span><span className="bp-label-line" />CERITA &amp; KEGIATAN</div>
          <div className="bp-stories-heading"><h2>Yang kami<br /><i>kerjakan.</i></h2><a className="bp-text-link" href="#artikel">LIHAT SEMUA <span>↗</span></a></div>
          <article className="bp-feature-story"><Placeholder label="GANTI DENGAN FOTO KEGIATAN TERBARU" className="story-placeholder" /><div className="bp-feature-copy"><p className="bp-meta">KEGIATAN <span>·</span> [TANGGAL]</p><h3>[JUDUL KEGIATAN AKAN DITAMBAHKAN]</h3><p>[RINGKASAN KEGIATAN AKAN DITAMBAHKAN]</p><a className="bp-text-link" href="#artikel">READ STORY <span>↗</span></a></div></article>
          <div className="bp-small-stories"><article><span className="bp-story-index">01</span><div><p className="bp-meta">KEGIATAN · [TANGGAL]</p><h3>[JUDUL KEGIATAN]</h3></div><span className="bp-arrow">↗</span></article><article><span className="bp-story-index">02</span><div><p className="bp-meta">PEMBELAJARAN · [TANGGAL]</p><h3>[JUDUL KEGIATAN]</h3></div><span className="bp-arrow">↗</span></article><article><span className="bp-story-index">03</span><div><p className="bp-meta">KOMUNITAS · [TANGGAL]</p><h3>[JUDUL KEGIATAN]</h3></div><span className="bp-arrow">↗</span></article></div>
        </section>

        <section className="bp-news bp-grid-section" id="artikel">
          <div className="bp-section-label"><span>05</span><span className="bp-label-line" />KABAR TERBARU</div>
          <div className="bp-news-heading"><h2>Catatan<br /><i>perjalanan.</i></h2><p>Ruang untuk menyimpan kabar, gagasan, dan cerita yang tumbuh dari kerja-kerja pendidikan Berpijar.</p></div>
          <div className="bp-news-list">{newsItems.map((item) => <article key={item.number}><span className="bp-item-number">{item.number}</span><span className="bp-news-category">{item.category}</span><h3>{item.title}</h3><span className="bp-news-date">{item.date}</span><a className="bp-arrow" href="#featured-article" aria-label={`Baca ${item.title}`}>↗</a></article>)}</div>
        </section>

        <section className="bp-impact bp-grid-section" id="dampak">
          <div className="bp-section-label light-label"><span>06</span><span className="bp-label-line" />DAMPAK</div>
          <div className="bp-impact-heading"><h2>Kerja yang<br /><i>berarti.</i></h2><p>Data dampak akan ditampilkan setelah angka resmi yayasan tersedia.</p></div>
          <div className="bp-metrics"><div><strong>[DATA]</strong><span>PROGRAM</span></div><div><strong>[DATA]</strong><span>PENERIMA MANFAAT</span></div><div><strong>[DATA]</strong><span>KEGIATAN</span></div><div><strong>[DATA]</strong><span>MITRA</span></div></div>
        </section>

        <section className="bp-featured-article bp-grid-section" id="featured-article"><div className="bp-section-label"><span>07</span><span className="bp-label-line" />FEATURED ARTICLE</div><div className="bp-article-wrap"><div><p className="bp-meta">INKLUSIVITAS · [TANGGAL]</p><h2>Tim Pengabdian Masyarakat Universitas Negeri Malang Hadirkan Inovasi AI Tutoring System untuk Teman Tuli, Wujudkan Pendidikan Inklusif Berkualitas</h2></div><div className="bp-article-placeholder"><span>[FEATURED ARTICLE CONTENT WILL BE INSERTED]</span><small>Artikel sumber akan dimasukkan kemudian.</small></div></div></section>

        <section className="bp-cta bp-grid-section" id="dukung"><span className="bp-cta-index">08 / 08</span><h2>Karena masa depan<br /><i>dimulai dari kesempatan.</i></h2><div className="bp-actions"><a className="bp-button bp-button-light" href="#kontak">DUKUNG BERPIJAR <span>→</span></a><a className="bp-text-link light-link" href="#program">LIHAT PROGRAM <span>↗</span></a></div></section>
      </div>

      <footer className="bp-footer bp-grid-section" id="kontak"><div className="bp-footer-brand"><a href="#top" className="bp-wordmark"><span>BERPIJAR</span><small>YAYASAN BERPIJAR INDONESIA</small></a><p>Bergerak melalui pendidikan,<br />life skill, dan pemberdayaan.</p></div><div><p className="bp-footer-label">NAVIGASI</p><a href="#tentang">Tentang</a><a href="#program">Program</a><a href="#kegiatan">Kegiatan</a><a href="#artikel">Artikel</a><a href="#kontak">Kontak</a></div><div><p className="bp-footer-label">KONTAK</p><p>[Alamat]</p><p>[Nomor WhatsApp]</p><p>[Email]</p></div><div><p className="bp-footer-label">SOCIAL</p><a href="#instagram">Instagram ↗</a><a href="#facebook">Facebook ↗</a><a href="#youtube">YouTube ↗</a></div><div className="bp-footer-bottom"><span>© 2026 Yayasan Berpijar Indonesia</span><span>LANDING PAGE / 01</span></div></footer>
    </main>
  );
}
