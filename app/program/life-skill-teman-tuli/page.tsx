/* Native images are used because this Vinext starter has no next/image runtime. */
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */

import type { Metadata } from "next";
import "../program-detail.css";

export const metadata: Metadata = {
  title: "Life Skill untuk Teman Tuli — Yayasan Pendidikan Berpijar Indonesia",
  description: "Program andalan Berpijar berupa pembekalan life skill untuk teman tuli.",
};

const focusItems = [
  { number: "01", title: "PEMBEKALAN LIFE SKILL", text: "Memberikan bekal kemampuan melalui pembekalan life skill." },
  { number: "02", title: "KESIAPAN MENGHADAPI KEHIDUPAN", text: "Membantu peserta lebih siap untuk berjuang dan bertahan." },
  { number: "03", title: "TARAF KEHIDUPAN YANG LEBIH LAYAK", text: "Mendukung upaya peserta untuk meningkatkan taraf kehidupan." },
];

export default function LifeSkillTemanTuliPage() {
  return (
    <main className="pd-page">
      <header className="pd-nav">
        <a className="pd-wordmark" href="/" aria-label="Kembali ke Yayasan Pendidikan Berpijar Indonesia"><strong>BERPIJAR</strong><small>YAYASAN PENDIDIKAN INDONESIA</small></a>
        <div className="pd-nav-meta"><span>PROGRAM / 01</span><a href="/#program">SEMUA PROGRAM ↗</a></div>
      </header>

      <div className="pd-shell">
        <section className="pd-hero">
          <div className="pd-hero-copy">
            <p className="pd-eyebrow"><span /> PROGRAM ANDALAN / INKLUSIVITAS</p>
            <h1>Life skill<br /><em>untuk teman tuli.</em></h1>
            <p className="pd-lede">Pembekalan life skill agar peserta lebih siap berjuang, bertahan, dan meningkatkan taraf kehidupan yang lebih layak.</p>
            <div className="pd-actions"><a className="pd-button pd-button-dark" href="/#kontak">HUBUNGI BERPIJAR <span>→</span></a><a className="pd-text-link" href="/#program">SEMUA PROGRAM <span>↗</span></a></div>
          </div>
          <figure className="pd-hero-media"><img src="/berpijar/life-skill-workshop.jpg" alt="Peserta mengikuti pembekalan keterampilan barber dalam kegiatan life skill Berpijar." /><figcaption><span>01 / 03</span><strong>BELAJAR MELALUI PRAKTIK.</strong></figcaption></figure>
        </section>

        <section className="pd-overview">
          <div className="pd-section-label"><span>01</span><i />TENTANG PROGRAM</div>
          <div className="pd-overview-copy"><h2>Bekal untuk<br /><em>menghadapi kehidupan.</em></h2><p>Life skill untuk teman tuli merupakan salah satu program andalan Yayasan Pendidikan Berpijar Indonesia. Program ini hadir sebagai pembekalan kemampuan agar peserta lebih siap untuk berjuang, bertahan, dan meningkatkan taraf kehidupan yang lebih layak.</p><p className="pd-note">Informasi detail pelaksanaan program akan diperbarui.</p></div>
          <figure className="pd-overview-media"><img src="/berpijar/life-skill-barber.jpg" alt="Peserta belajar keterampilan barber dalam kegiatan life skill Berpijar." /><figcaption>PEMBEKALAN LIFE SKILL / DOKUMENTASI KEGIATAN</figcaption></figure>
        </section>

        <section className="pd-focus">
          <div className="pd-section-label pd-label-light"><span>02</span><i />FOKUS PEMBEKALAN</div>
          <div className="pd-focus-heading"><h2>Belajar melalui<br /><em>praktik.</em></h2><p>Ruang pembekalan yang berangkat dari komitmen Berpijar untuk mendukung pendidikan, life skill, dan pengembangan anak.</p></div>
          <div className="pd-focus-list">{focusItems.map((item) => <article key={item.number}><span className="pd-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="pd-arrow">↗</span></article>)}</div>
        </section>

        <section className="pd-next">
          <div className="pd-section-label"><span>03</span><i />INFORMASI PROGRAM</div>
          <div className="pd-next-copy"><h2>Detail akan<br /><em>diperbarui.</em></h2><p>Informasi pelaksanaan, dokumentasi tambahan, dan pembaruan program akan ditambahkan setelah tersedia.</p></div>
          <div className="pd-next-index"><strong>PROGRAM / 01</strong><span>LIFE SKILL<br />INKLUSIVITAS<br />SOCIAL IMPACT</span></div>
        </section>

        <section className="pd-cta"><div><p className="pd-eyebrow pd-eyebrow-light"><span /> YAYASAN PENDIDIKAN BERPIJAR INDONESIA</p><h2>Setiap anak<br /><em>berhak berkembang.</em></h2></div><div className="pd-cta-actions"><p>Berpijar terus bergerak melalui pendidikan, soft skill, life skill, dan pemberdayaan.</p><a className="pd-button pd-button-light" href="/#kontak">DUKUNG BERPIJAR <span>→</span></a></div></section>
      </div>

      <footer className="pd-footer"><span>© 2026 Yayasan Pendidikan Berpijar Indonesia</span><span>KEDIRI, JAWA TIMUR</span><a href="mailto:indonesiashalawat@gmail.com">indonesiashalawat@gmail.com ↗</a></footer>
    </main>
  );
}
