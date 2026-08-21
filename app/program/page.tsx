/* Native anchors are used because this Vinext starter has no stable next/link runtime. */
/* eslint-disable @next/next/no-html-link-for-pages */

import type { Metadata } from "next";
import "./program-index.css";

export const metadata: Metadata = {
  title: "Program — Yayasan Pendidikan Berpijar Indonesia",
  description: "Program pendidikan, life skill, dan pemberdayaan Yayasan Pendidikan Berpijar Indonesia.",
};

const programs = [
  {
    number: "01",
    title: "LIFE SKILL UNTUK TEMAN TULI",
    label: "PROGRAM ANDALAN / INKLUSIVITAS",
    text: "Pembekalan life skill agar peserta lebih siap berjuang, bertahan, dan meningkatkan taraf kehidupan yang lebih layak.",
    href: "/program/life-skill-teman-tuli",
    action: "LIHAT DETAIL PROGRAM",
    featured: true,
  },
  {
    number: "02",
    title: "PEMBINAAN ANAK YATIM PIATU",
    label: "PEMBERDAYAAN ANAK",
    text: "Pembekalan untuk anak yatim piatu merupakan salah satu program andalan yayasan. Informasi bentuk kegiatan akan diperbarui.",
    href: "/#program",
    action: "KEMBALI KE BERANDA",
  },
  {
    number: "03",
    title: "PENDIDIKAN",
    label: "PENDIDIKAN PROFIT & NON-PROFIT",
    text: "Berpijar bergerak di dunia pendidikan profit dan non-profit, dengan komitmen mendukung dan mengembangkan pendidikan.",
    href: "/#tentang",
    action: "TENTANG BERPIJAR",
  },
  {
    number: "04",
    title: "PROGRAM SOSIAL & KEMANUSIAAN",
    label: "SOCIAL IMPACT",
    text: "Tujuan yayasan mencakup bidang sosial, kemanusiaan, keagamaan, pendidikan, dan kegiatan terkait lainnya. Informasi program akan diperbarui.",
    href: "/#kontak",
    action: "HUBUNGI BERPIJAR",
  },
];

export default function ProgramsPage() {
  return (
    <main className="pi-page">
      <header className="pi-nav">
        <a className="pi-wordmark" href="/" aria-label="Kembali ke Yayasan Pendidikan Berpijar Indonesia"><strong>BERPIJAR</strong><small>YAYASAN PENDIDIKAN INDONESIA</small></a>
        <div className="pi-nav-meta"><span>PROGRAM / INDEX</span><a href="/#top">KEMBALI KE BERANDA ↗</a></div>
      </header>

      <div className="pi-shell">
        <section className="pi-hero">
          <p className="pi-eyebrow"><span /> YAYASAN PENDIDIKAN BERPIJAR INDONESIA / 2026</p>
          <div className="pi-hero-grid">
            <h1>Program yang hadir<br /><em>untuk memberi bekal.</em></h1>
            <div className="pi-hero-side"><p>Berpijar bergerak melalui pendidikan, soft skill, life skill, dan pemberdayaan untuk mempersiapkan anak menghadapi kehidupan.</p><span>01 / 04<br />EDUCATION<br />SOCIAL IMPACT</span></div>
          </div>
        </section>

        <section className="pi-list" aria-labelledby="program-list-title">
          <div className="pi-section-label"><span>01</span><i />DAFTAR PROGRAM</div>
          <h2 id="program-list-title" className="pi-visually-hidden">Daftar program Yayasan Pendidikan Berpijar Indonesia</h2>
          {programs.map((program) => (
            <article className={`pi-program ${program.featured ? "is-featured" : ""}`} key={program.number}>
              <span className="pi-number">{program.number}</span>
              <div className="pi-program-copy"><p className="pi-label">{program.label}</p><h3>{program.title}</h3><p>{program.text}</p></div>
              <a className="pi-program-link" href={program.href}>{program.action} <span>↗</span></a>
            </article>
          ))}
        </section>

        <section className="pi-cta">
          <div><p className="pi-eyebrow pi-eyebrow-light"><span /> BERPIJAR / NEXT STEP</p><h2>Setiap anak<br /><em>berhak berkembang.</em></h2></div>
          <div className="pi-cta-side"><p>Informasi detail program akan diperbarui setelah tersedia. Untuk terhubung dengan Berpijar, silakan hubungi kami.</p><a className="pi-button" href="/#kontak">HUBUNGI BERPIJAR <span>→</span></a></div>
        </section>
      </div>

      <footer className="pi-footer"><span>© 2026 Yayasan Pendidikan Berpijar Indonesia</span><span>KEDIRI, JAWA TIMUR</span><a href="mailto:indonesiashalawat@gmail.com">indonesiashalawat@gmail.com ↗</a></footer>
    </main>
  );
}
